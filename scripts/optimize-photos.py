"""
Optimise event photos for the website.

Reads  : PICTURES FOR WEBSITE/<event folder>/*   (originals, never modified)
Writes : public/images/events/<slug>/NN.webp + NN-thumb.webp, public/images/hero/hero-N.webp
         src/workData.js  (event list consumed by the Work page)

Re-run after adding photos:   python scripts/optimize-photos.py
Needs: pip install pillow
EXIF (incl. GPS) is stripped. Near-duplicate photos inside one event are skipped.
"""
import json
import os
import shutil

from PIL import Image, ImageOps

Image.MAX_IMAGE_PIXELS = None
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
SRC = os.path.join(ROOT, 'PICTURES FOR WEBSITE')
OUT = os.path.join(ROOT, 'public', 'images', 'events')
HERO = os.path.join(ROOT, 'public', 'images', 'hero')

FULL, THUMB, HERO_PX = 1800, 760, 2400
EXTS = ('.jpg', '.jpeg', '.png', '.cr2')

# Not published: private family event, staff portraits (need consent), watermarked / unidentified files.
SKIP_FOLDERS = {'PRIVATE EVENT', 'STAFF PICTURES'}
SKIP_FILES = {'298628.jpg', 'Spurpress 4.jpg'}
# Files stored in the wrong folder: (folder, file) -> slug it belongs to.
MOVED = {('DNA SYMPOSIUM KUALA LUMPUR', '298629.jpg'): 'lawasia-conference'}

# slug, title, category, description, folders, cover filename (substring)
EVENTS = [
    ('brandlaureate-awards', 'BrandLaureate Best Brands Awards', 'Awards & Galas',
     'Gala awards night staged around the BrandLaureate Best Brands identity.', ['BRANDLAUREATE AWARDS CELEBRATION'], '_MG_3302'),
    ('malaysia-landscape-architecture-awards', 'Malaysia Landscape Architecture Awards', 'Awards & Galas',
     'Industry awards ceremony for the Institute of Landscape Architects Malaysia.', ['MALAYSIA LANDSCAPE ARCHITECTURE AWARDS'], 'COE04188'),
    ('gold-a-heart-fundraising-dinner', 'Gold A-Heart Fundraising Appreciation Dinner', 'Awards & Galas',
     'A charity appreciation dinner with an exhibition gallery reception.', ['GOLDHEART FUND RAISING DINNER'], '6F6A4257'),
    ('malaysian-bar-annual-dinner-dance', 'Malaysian Bar Annual Dinner & Dance', 'Awards & Galas',
     'Stage, lighting and ballroom production for the Malaysian Bar.', ['MALAYSIAN BAR ANNUAL DINNER & DANCE'], '20240302_190352'),
    ('lawasia-conference', '37th LAWASIA Conference', 'Conferences',
     'Opening ceremony with the Prime Minister of Malaysia, Kuala Lumpur.', ['LAWASIA CONFERENCE'], 'DSC00648'),
    ('international-malaysia-law-conference', 'International Malaysia Law Conference', 'Conferences',
     'Conference staging, AV and opening ceremonies for the legal community.', ['INTERNATIONAL MALAYSIA LAW CONFERENCE'], '20230710_110202'),
    ('dna-symposium-kuala-lumpur', 'Drew Network Asia Symposium Kuala Lumpur', 'Conferences',
     'Branded stage, registration and seating for a symposium in Kuala Lumpur.', ['DNA SYMPOSIUM KUALA LUMPUR'], '295525'),
    ('naza-world-sales-convention', 'NAZA World Sales Convention', 'Conferences',
     'Sales convention and gala dinner for the NAZA Group.', ['NAZA SALES CONVENTION', 'NAZA EVENTS'], '140'),
    ('cimb-events', 'CIMB Events', 'Launches & Corporate',
     'Awards nights, roadshows and appreciation events for CIMB.', ['CIMB EVENTS'], '20230722_113657'),
    ('chevrolet-3s-centre-puchong', 'Official Launch of Chevrolet 3S Centre Puchong', 'Launches & Corporate',
     'Official opening officiated by the Minister of Transport Malaysia.', ['OFFICIAL LAUNCH OF CHEVROLET 3S CENTRE'], 'Chevrolet 272'),
    ('international-bedding-gallery', 'Official Launch of International Bedding Gallery', 'Launches & Corporate',
     'Press conference and launch event.', ['OFFICIAL LAUNCH OF IBG'], 'unnamed copy'),
    ('mah-sing-property-showcase', 'Mah Sing Property Showcase', 'Launches & Corporate',
     'Property showcase marking the Mah Sing Group 18th anniversary.', ['MAH SING PROPERTY ROADSHOW'], 'Mahsing 1'),
    ('ytl-learn-from-home', 'YTL Communications “Learn From Home” Project', 'Launches & Corporate',
     'Programme launch with the Minister of Communications & Multimedia.', ['OTHER EVENTS'], '5W2A4701'),
    ('exhibitions', 'Exhibitions & Roadshow Showcases', 'Exhibitions',
     'Exhibition stands designed, built and managed for corporate clients.', ['EXHIBITIONS'], '298984'),
]

HERO_SOURCES = [
    ('MALAYSIA LANDSCAPE ARCHITECTURE AWARDS', 'COE04188'),
    ('BRANDLAUREATE AWARDS CELEBRATION', '_MG_3302'),
    ('LAWASIA CONFERENCE', 'DSC00648'),
    ('INTERNATIONAL MALAYSIA LAW CONFERENCE', 'DSC08546'),
]

# Section images used on Home / About / Services: (output name, folder, filename substring, long edge px)
SITE_IMAGES = [
    ('home-intro', 'BRANDLAUREATE AWARDS CELEBRATION', '_MG_3304', 1600),
    ('about-story', 'BRANDLAUREATE AWARDS CELEBRATION', '_MG_3300', 1600),
    ('work-preview', 'MALAYSIA LANDSCAPE ARCHITECTURE AWARDS', '100', 1800),
    ('feature-band', 'MALAYSIA LANDSCAPE ARCHITECTURE AWARDS', '306183', 2400),
    ('belief', 'INTERNATIONAL MALAYSIA LAW CONFERENCE', 'DSC08634', 2000),
    ('services-banner', 'MALAYSIA LANDSCAPE ARCHITECTURE AWARDS', 'COE04189', 2400),
]
SITE = os.path.join(ROOT, 'public', 'images', 'site')


def dhash(im, size=9):
    g = im.convert('L').resize((size, size - 1 + 1), Image.LANCZOS)
    px = list(g.getdata())
    bits = 0
    for r in range(size):
        for c in range(size - 1):
            bits = (bits << 1) | (px[r * size + c] > px[r * size + c + 1])
    return bits


def hamming(a, b):
    return bin(a ^ b).count('1')


def load(path):
    im = Image.open(path)
    im = ImageOps.exif_transpose(im)
    return im.convert('RGB')


def save(im, path, long_edge, quality):
    im = im.copy()
    im.thumbnail((long_edge, long_edge), Image.LANCZOS)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    im.save(path, 'WEBP', quality=quality, method=6)
    return im.size


def find(folder, needle):
    for f in sorted(os.listdir(os.path.join(SRC, folder))):
        if needle.lower() in f.lower() and f.lower().endswith(EXTS):
            return os.path.join(SRC, folder, f)
    raise SystemExit(f'cover/hero not found: {folder} / {needle}')


def collect(slug, folders):
    files = []
    for folder in folders:
        for f in sorted(os.listdir(os.path.join(SRC, folder))):
            if f.startswith('.') or not f.lower().endswith(EXTS) or f in SKIP_FILES:
                continue
            if MOVED.get((folder, f), slug) != slug:
                continue
            files.append((folder, f))
    for (folder, f), target in MOVED.items():
        if target == slug and (folder, f) not in files and folder not in folders:
            files.append((folder, f))
    return files


def main():
    if os.path.isdir(OUT):
        shutil.rmtree(OUT)
    events_out = []
    total_in = total_out = 0
    for slug, title, category, desc, folders, cover_key in EVENTS:
        cover_path = find(folders[0], cover_key)
        entries = []
        hashes = []
        files = collect(slug, folders)
        # cover first, then the rest in filename order
        files.sort(key=lambda t: (os.path.join(SRC, *t) != cover_path, t[1].lower()))
        for folder, f in files:
            path = os.path.join(SRC, folder, f)
            im = load(path)
            h = dhash(im)
            if any(hamming(h, o) <= 5 for o in hashes):
                print(f'  skip duplicate: {folder}/{f}')
                continue
            hashes.append(h)
            n = len(entries) + 1
            full = os.path.join(OUT, slug, f'{n:02d}.webp')
            thumb = os.path.join(OUT, slug, f'{n:02d}-thumb.webp')
            w, hgt = save(im, full, FULL, 80)
            save(im, thumb, THUMB, 76)
            total_in += os.path.getsize(path)
            total_out += os.path.getsize(full) + os.path.getsize(thumb)
            base = f'/images/events/{slug}/{n:02d}'
            entries.append({'src': f'{base}.webp', 'thumb': f'{base}-thumb.webp', 'w': w, 'h': hgt})
        events_out.append({'slug': slug, 'title': title, 'category': category, 'desc': desc, 'photos': entries})
        print(f'{title}: {len(entries)} photos')

    # hero images
    if os.path.isdir(HERO):
        shutil.rmtree(HERO)
    for i, (folder, key) in enumerate(HERO_SOURCES, 1):
        save(load(find(folder, key)), os.path.join(HERO, f'hero-{i}.webp'), HERO_PX, 78)

    # section images
    if os.path.isdir(SITE):
        shutil.rmtree(SITE)
    for name, folder, key, px in SITE_IMAGES:
        save(load(find(folder, key)), os.path.join(SITE, f'{name}.webp'), px, 80)

    js = '// Generated by scripts/optimize-photos.py - do not edit by hand.\nexport const workEvents = ' + json.dumps(events_out, indent=2, ensure_ascii=False) + '\n'
    js += "export const workCategories = ['All', 'Awards & Galas', 'Conferences', 'Launches & Corporate', 'Exhibitions']\n"
    js += f"export const heroImages = {json.dumps([f'/images/hero/hero-{i}.webp' for i in range(1, len(HERO_SOURCES) + 1)])}\n"
    with open(os.path.join(ROOT, 'src', 'workData.js'), 'w', encoding='utf-8') as fh:
        fh.write(js)
    print(f'\n{sum(len(e["photos"]) for e in events_out)} photos | in {total_in // 2**20} MB -> out {total_out // 2**20} MB')


if __name__ == '__main__':
    main()
