# HomeLife website (thehomelife.in)

A static website for **HomeLife**: *Elevate Your Living Space*. It is plain HTML, CSS and a little JavaScript. There is no build step, framework or CMS.

## What's here

```
thehomelife-website/
├── index.html          Home
├── about.html          About
├── products.html       Collections & Services
├── contact.html        Contact (details, WhatsApp enquiry form, map)
├── 404.html            "Page not found" page
├── assets/
│   ├── css/styles.css  All styles (colour, font and spacing tokens at the top)
│   ├── js/main.js      Mobile menu, scroll reveal, contact form → WhatsApp
│   └── img/            All photos and favicon.svg
└── design-system/homelife/   Design system from the ui-ux-pro-max skill (MASTER.md, tokens)
```

## View it locally

Double-click `index.html` to open it in your browser. To run it the way a real host would, start a small local server from this folder and open http://localhost:8080:

```powershell
python -m http.server 8080
```

## Business details on the site

| Detail | Value |
|---|---|
| Business | HomeLife: home furnishing, *Elevate Your Living Space* |
| Founder | Kunal Jalan |
| Experience | 10+ years, 3rd-generation family business |
| Showroom | Kanakapura Road, Bengaluru (area only, no street address yet) |
| Phone and WhatsApp | +91 97487 49214 |
| Instagram | https://www.instagram.com/thehomelife.in/ |
| Facebook | https://www.facebook.com/profile.php?id=61597053927324 |
| Products | Curtains, wallpapers, blinds, mattresses, sofas (new and repair), upholstery fabrics |
| Collections | Curtains and More, Drapes Avenue, Opulence |
| Services | Consultation booking, home visit service, customised orders, personal assistance, doorstep delivery, on time every time |
| Promise | PET: Priority, Economical and Trustworthy services |

Things you may still want to add or check:
- **Street address:** the site says "Kanakapura Road, Bengaluru" and the map shows the area. Add the full address and the map can point to the exact showroom.
- **Email and opening hours:** not on the site yet.
- **Collection and product descriptions:** written from the details you gave. Check that each collection's description matches what it really includes.
- **Photos:** all product and collection photos are stock photos (see below). Swap in photos of your own work when you have them.

**The header and footer are repeated in each of the 5 HTML files.** When you change the menu, footer, phone number or social links, change them in every page.

## Photos

All photos are in `assets/img/`. They are sized for the web (1000–2100px wide, about 70–670 KB each).

### ⚠️ The homepage hero photo (`hero-homelife.jpg`)

This is the photo from the old GoDaddy homepage, used here because you asked for it. It is a **Getty Images stock photo** (GoDaddy image ID `getty/2185299981`). GoDaddy licenses its Getty photos for use **only on sites built and hosted with GoDaddy's Website Builder**. Using it on a site hosted elsewhere (Netlify, GitHub Pages, cPanel) may not be covered by that licence.

Before going live, either:
- confirm with GoDaddy support that you may keep using it, or
- replace `assets/img/hero-homelife.jpg` with your own photo or a free Unsplash photo with the same file name. Landscape, at least 2000px wide, works best.

### Unsplash photos

Every other photo is from Unsplash, under the [Unsplash License](https://unsplash.com/license): free for commercial use, no permission or credit needed. They can't be sold unaltered or used to build a competing photo service. Credit is still polite. Source pages:

| File | Unsplash page |
|---|---|
| living-art.jpg | https://unsplash.com/photos/mGI8b4KFoFM |
| living-sectional.jpg | https://unsplash.com/photos/OlFHzNjg9kY |
| living-wood.jpg | https://unsplash.com/photos/2cfj0Y5ch00 |
| living-sunlit-chair.jpg | https://unsplash.com/photos/Hl3fvUU48Lw |
| bedroom-floral.jpg | https://unsplash.com/photos/EAri64dQlF4 |
| bedroom-calm.jpg | https://unsplash.com/photos/fWjIQs8sHPA |
| bedroom-pillows.jpg | https://unsplash.com/photos/9Cmony35LOE |
| dining-moody.jpg | https://unsplash.com/photos/wMzpa3WsDkI |
| dining-bright.jpg | https://unsplash.com/photos/bkLo8CIIAnM |
| decor-flowers.jpg | https://unsplash.com/photos/fEhzhqq3DrE |
| decor-shelf.jpg | https://unsplash.com/photos/5sB8uDknGU0 |
| decor-vase-shadow.jpg | https://unsplash.com/photos/uluH5a0sRdw |
| decor-vases-soft.jpg | https://unsplash.com/photos/tSkPbVkiCqY |
| decor-vases-shelf.jpg | https://unsplash.com/photos/5o9jDiU4de4 |
| lamp-vases.jpg | https://unsplash.com/photos/f9mpWX2a-QU |
| lamp-glow.jpg | https://unsplash.com/photos/bm-Ml4UYvkI |
| lamp-books.jpg | https://unsplash.com/photos/ulh3-dLSXjI |
| plant-mirror.jpg | https://unsplash.com/photos/5MrddkW_Cbg |
| plants-wood.jpg | https://unsplash.com/photos/dM317CbttyY |
| ceramic-bowls.jpg | https://unsplash.com/photos/vG9Y8YvzdSQ |
| col-curtains-and-more.jpg | https://unsplash.com/photos/EcusinlsfwI |
| col-drapes-avenue.jpg | https://unsplash.com/photos/SJ2TGUa432M |
| col-opulence.jpg | https://unsplash.com/photos/0ulaNhNHvdM |
| curtains-bright.jpg | https://unsplash.com/photos/j_J2JvXTe7M |
| curtains-sheer-sofa.jpg | https://unsplash.com/photos/jvv2e1NJc9s |
| wallpaper-floral.jpg | https://unsplash.com/photos/oeGFTHsXPw4 |
| blinds-wood.jpg | https://unsplash.com/photos/8UwnkpMoYXo |
| mattress.jpg | https://unsplash.com/photos/lrKF0_SM0Eg |
| sofa-green.jpg | https://unsplash.com/photos/fZuleEfeA1Q |
| fabric-rolls.jpg | https://unsplash.com/photos/stb9o3RE5lI |
| fabric-samples.jpg | https://unsplash.com/photos/naeWaAYdKUg |
| swatches-plans.jpg | https://unsplash.com/photos/pdCTX1harH4 |
| drapes-tassel.jpg | https://unsplash.com/photos/jQ6dTEErNaQ |
| velvet-closeup.jpg | https://unsplash.com/photos/o4HfkWSX5l0 |

These are **stock photos, not HomeLife's own work**. Once you have photos of your own curtains, sofas, showroom or finished homes, swap them in, especially for the three collections. Keep the same file name, or update the `src`, `width` and `height` in the HTML. Write an `alt` text that describes what the photo shows.

## WhatsApp

All enquiry buttons open a WhatsApp chat with **+91 97487 49214** in a new tab, with a message already typed:
- **Book consultation / Book your consultation** (header, home hero, services, bottom panels): "I'd like to book a consultation."
- **Ask for a home visit:** "I'd like to ask for a home visit."
- **Enquire** on each product, and **Enquire about …** on each collection: names that product or collection.
- **Work with us** (About page, for designers and architects): a partnership message.
- **Contact form:** builds a message from the name, phone, area, interest and message fields, then opens WhatsApp so the visitor only has to press send. Nothing is stored or emailed, and no form service is needed.

Phone numbers use `tel:+919748749214`, so they dial directly on mobiles.

To change the number, find and replace `919748749214`, `+919748749214`, `+91 97487 49214` and `97487 49214` in all the HTML files, and `data-whatsapp="919748749214"` on the contact form.

## Hosting

The site is just files, so any static host works. Upload the **contents** of this folder (`index.html` must be at the top level). You don't need to upload `design-system/` or `README.md`, but they do no harm.

### Option A: Netlify (easiest)
1. Sign in at app.netlify.com and choose **Add new site → Deploy manually**.
2. Drag this folder onto the page. You get a live `*.netlify.app` link in seconds.
3. **Domain settings → Add a domain → thehomelife.in**, then follow Netlify's DNS steps at GoDaddy (point the domain's records to Netlify, or switch nameservers). HTTPS is set up for you.

### Option B: GitHub Pages
1. Create a GitHub repository and upload these files to the `main` branch (top level).
2. **Settings → Pages → Build and deployment → Deploy from a branch → `main` / root**.
3. Under **Custom domain**, enter `thehomelife.in`. At GoDaddy DNS, add `A` records for `@` pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153`, plus a `CNAME` for `www` pointing to `<your-username>.github.io`. Then tick **Enforce HTTPS**.
4. `404.html` is used for unknown URLs automatically.

### Option C: GoDaddy web hosting (cPanel)
The free GoDaddy **Website Builder** can't host custom HTML. You need a GoDaddy **Web Hosting** plan (cPanel).
1. In cPanel, open **File Manager → public_html**.
2. Upload all files and folders here, keeping the `assets/` structure, so `public_html/index.html` exists.
3. Point thehomelife.in to that hosting plan, and turn on the free SSL certificate in cPanel.
4. Optional: add `ErrorDocument 404 /404.html` to `public_html/.htaccess` so the custom 404 page shows up.

When the new site is live, turn off or unpublish the old Website Builder site so the domain isn't pointing to two places.

## Design notes

Based on the ui-ux-pro-max design system (`design-system/homelife/MASTER.md`), then pushed toward an editorial, magazine-style look:

- **Style:** photography-led. Full-screen hero, a facts strip (10+ years, 3rd generation, made to order, PET), collection tiles, product cards, a dark services section, a 4-step process, a PET quote band, a founder's note, a photo mosaic and an image CTA. Slow fade and image-unmask reveals as you scroll, plus a scrolling word strip. All motion switches off under `prefers-reduced-motion`.
- **Colours:** linen `#F7F2EC`, ivory `#FBF8F4`, espresso `#231E1B`, warm ink `#2A2522`, with terracotta `#9A5B33` and soft gold `#C8A27A` accents. Text colours meet the 4.5:1 contrast ratio.
- **Type:** Cormorant Garamond (headings, with italic accents) and Montserrat (body), from the skill's "Luxury Serif" pairing, loaded from Google Fonts.
- **Header:** transparent over the photos, turning solid ivory when you scroll. Full-screen menu on phones.
- **Accessibility:** skip link, visible focus rings, 44–48px tap targets, labelled form fields with inline errors, and `prefers-reduced-motion` respected. No horizontal scroll at 375px.
- All colours and spacing are CSS variables at the top of `assets/css/styles.css`, so a rebrand is a few line edits.
