# Tiama Nassour — portfolio website

A fast, multilingual (English · العربية · Français) portfolio for Tiama Nassour, graphic designer & illustrator in South Lebanon.
Built with [Astro](https://astro.build) → plain static HTML, almost no JavaScript, hosted free on GitHub Pages.

**Measured (Lighthouse, mobile):** Performance 98–100 · Accessibility 100 · Best Practices 100 · SEO 100.

---

## 1. Run it on your computer

Requires [Node.js](https://nodejs.org) 22.23 or newer.

```bash
npm install
npm run dev        # live preview at http://localhost:4321
npm run build      # production build into /dist
npm run preview    # test the production build
```

## 2. Put the contact details & domain in ONE place

Edit **`site.config.mjs`**: email, phone, WhatsApp number, social links, domain.
Everything (buttons, footer, schema.org data, sitemap, social previews) reads from it.

| Setting | What it does |
|---|---|
| `url` | The public address, e.g. `https://tiamanassour.com` (or `https://USERNAME.github.io`) |
| `base` | `'/'` for a custom domain or a `USERNAME.github.io` repo. `'/repo-name/'` for a normal project repo |
| `web3formsKey` | Makes the contact form deliver straight to her inbox (free key at [web3forms.com](https://web3forms.com)). Without it, the form opens the visitor's email app |
| `socials` | Instagram / Behance / LinkedIn / TikTok URLs. Empty = hidden |
| `googleSiteVerification` | Search Console verification code |
| `cloudflareAnalyticsToken` | Free, cookie-less visitor stats |

## 3. Publish on GitHub Pages

1. Create a GitHub repository and push this folder to the `main` branch.
2. Repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Every push to `main` now builds and publishes automatically (`.github/workflows/deploy.yml`).
4. If the address is `https://USERNAME.github.io/REPO/`, set `url` and `base: '/REPO/'` in `site.config.mjs`
   (or add repository variables `SITE_URL` and `BASE_PATH`).

### Custom domain (strongly recommended for SEO and trust)
Buy a domain, then Settings → Pages → Custom domain, and add a file `public/CNAME` containing just the domain.
Put the same domain in `site.config.mjs → url`. Putting the domain on **Cloudflare (free plan)** adds fast global caching,
Brotli compression and HTTP/3, which GitHub Pages alone does not give.

## 4. After launch — the SEO checklist

1. Add the site to **Google Search Console** and **Bing Webmaster Tools**; submit `/sitemap-index.xml`.
2. Put the website link in her Instagram / Behance / LinkedIn / TikTok bios and on every post.
3. Test the link preview by sharing the URL in WhatsApp (each page has its own preview image).
4. Ask happy clients for a link back to the site; list the case studies on Behance with a link to the site.
5. Keep adding case studies: each one is a new page that can rank for searches such as *"packaging design Lebanon"*.

## 5. Editing content

| To change… | Edit |
|---|---|
| Any text, in all 3 languages | `src/i18n/en.ts`, `ar.ts`, `fr.ts` (same structure in each) |
| Portfolio pieces / categories | `src/data/work.ts` |
| Case-study images, colours | `src/data/cases.ts` (+ text in `src/i18n/*.ts → cases`) |
| Images | `src/assets/work/` (use WebP/JPG/PNG; they are resized and converted to AVIF/WebP automatically) |
| Videos | `public/video/` (MP4, H.264, ideally under 2 MB) |
| Colours / fonts / spacing | top of `src/styles/global.css` |

**Add a piece:** drop the image in `src/assets/work/my-piece.webp`, then add a line in `src/data/work.ts`:
`{ id: 'my-piece', cat: 'poster', title: 'My Piece', img: 'my-piece' }`

**Replace an image with a higher-resolution original:** keep the same file name and overwrite it. Nothing else changes.

## Notes

- The site works without JavaScript; JS only adds the lightbox, filters, theme toggle, lazy video previews and the form.
- No cookies, no trackers, no third-party fonts: nothing to disclose in a cookie banner.
- `llms.txt`, `robots.txt`, `sitemap-index.xml`, structured data (Person, ProfessionalService, FAQ, CreativeWork, Breadcrumb) and `hreflang` are generated automatically.
