# HomeLife website (thehomelife.in)

A static website for **HomeLife**: *Elevate Your Living Space*. It is plain HTML, CSS and a little JavaScript. There is no build step, framework or CMS.

## What's here

```
thehomelife-website/
├── index.html          Home
├── about.html          About
├── products.html       Products & Services
├── contact.html        Contact (details, enquiry form, map slot)
├── 404.html            "Page not found" page
├── assets/
│   ├── css/styles.css  All styles (colour, font and spacing tokens at the top)
│   ├── js/main.js      Mobile menu, scroll reveal, contact-form validation
│   └── img/            favicon.svg; put your photos here
└── design-system/homelife/   Design system from the ui-ux-pro-max skill (MASTER.md, tokens)
```

## View it locally

Double-click `index.html` to open it in your browser. To run it the way a real host would, start a small local server from this folder and open http://localhost:8080:

```powershell
python -m http.server 8080
```

## Content you need to fill in

The old GoDaddy site only had the name **HomeLife**, the tagline **"Elevate Your Living Space"** and an empty contact section and store. No products, prices, contact details, address or social links were published there. So nothing like that has been made up here. Every gap is marked:

- on the page, with a dashed amber outline and a **TO ADD**, **EXAMPLE** or **PHOTO TO ADD** label;
- in the HTML, with a `<!-- TODO: ... -->` comment that says what goes there.

To find them all, search the project for `TODO` and `placeholder`. The main items:

| Where | What to add |
|---|---|
| `contact.html` | Phone, email, address, opening hours. Use `tel:` and `mailto:` links. (WhatsApp is done; see below.) |
| `contact.html` | A Google Maps embed, or delete the map block if you have no shop. |
| `products.html` | The six category tiles (Living, Bedroom, Dining, Lighting, Décor, Greenery) are **examples** matched to the photos. Rename or delete them to match what you really sell. |
| `products.html` | Your services, or delete the Services section. |
| `about.html`, `index.html` | Your story: who you are, where you're based, how HomeLife started. |
| Footer (every page) | Instagram and Facebook URLs. Replace the `href="#"` links or delete the icons. |

The tagline, the "Ideas for your home" tips and the "What we believe" values are starter copy built around the HomeLife tagline. Edit them so they sound like you.

**The header and footer are repeated in each of the 5 HTML files.** When you change the menu, footer or social links, change them in every page.

## Photos

All photos are in `assets/img/`. They are sized for the web (1000–2100px wide, about 80–550 KB each).

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

These are **mood photos, not HomeLife's products**. Once you have photos of your own products, store or finished rooms, swap them in, especially on the Products page. Keep the same file name, or update the `src`, `width` and `height` in the HTML. Write an `alt` text that describes what the photo shows.

## WhatsApp

Every **Get in touch** style button opens a WhatsApp chat with **+91 97487 49214** in a new tab, with "Hi HomeLife, I'd like to know more." already typed. That covers the header button, the home hero, the photo panel at the bottom of each page, "Ask about our services", the contact page and the footer icon. The **Contact** menu link still goes to the contact page.

The links look like `https://wa.me/919748749214?text=...`. To change the number, find and replace `919748749214` (country code, no `+` or spaces) and `+91 97487 49214` in all the HTML files.

## Contact form

The form checks the input in the browser, but **it is not connected to anything yet**. Until you connect it, visitors see an honest "not connected yet" message. Static hosting can't send email by itself, so pick one of these:

- **Formspree** (any host): create a free form at formspree.io, then set the form's endpoint in `contact.html`:
  `<form id="contact-form" data-endpoint="https://formspree.io/f/XXXXXXX" novalidate>`
- **Netlify Forms** (Netlify only): add `name="contact" data-netlify="true"` to the `<form>`, set `data-endpoint="/"`, and add `<input type="hidden" name="form-name" value="contact">` inside the form.

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

- **Style:** photography-led. Full-screen hero, photo banners on every page, room tiles, a full-width quote band, a photo mosaic and an image CTA. Slow fade and image-unmask reveals as you scroll, plus a scrolling word strip. All motion switches off under `prefers-reduced-motion`.
- **Colours:** linen `#F7F2EC`, ivory `#FBF8F4`, espresso `#231E1B`, warm ink `#2A2522`, with terracotta `#9A5B33` and soft gold `#C8A27A` accents. Text colours meet the 4.5:1 contrast ratio.
- **Type:** Cormorant Garamond (headings, with italic accents) and Montserrat (body), from the skill's "Luxury Serif" pairing, loaded from Google Fonts.
- **Header:** transparent over the photos, turning solid ivory when you scroll. Full-screen menu on phones.
- **Accessibility:** skip link, visible focus rings, 44–48px tap targets, labelled form fields with inline errors, and `prefers-reduced-motion` respected. No horizontal scroll at 375px.
- All colours and spacing are CSS variables at the top of `assets/css/styles.css`, so a rebrand is a few line edits.
