# New Client Site Spin-Up (Runbook — Concise + Static Services)

## Goals

- Duplicate this template into a unique, non-cookie-cutter site for the client defined in `site-template-starter/intake/client.yaml`.
- **Apply client branding**: Use the client's colors, fonts, logo, and social links from `branding` section in YAML to create a visually distinct site.
- **Creative styling**: Ensure each client site looks different by:
  - Applying unique color scheme from `branding.colors` (primary, accent, dark, light, gradients)
  - Using client-specific fonts from `branding.fonts` (heading, body)
  - Varying layout choices, button styles, spacing, and visual rhythm
  - Selecting different hero and services layouts from `site-template-starter/catalog/sections.json`
- Generate concise copy (short paragraphs, clear bullets) with one "near me/near you" mention and optional neighborhoods.
- Create **three static service pages** in `pages/services/` directory:
  - `pages/services/index.vue` (main services listing page)
  - `pages/services/service-a.vue`
  - `pages/services/service-b.vue`
  - `pages/services/service-c.vue`
- Ensure the build runs cleanly and commit to a new branch.

---

## Steps

1. **Read intake**

   - Parse `site-template-starter/intake/client.yaml` for:
     - Site info: `name`, `domain`, `phone`, `email`, `city/region`, `niche`
     - Branding: `colors` (primary, accent, dark, light, gradients), `fonts` (heading, body)
     - Content: `socials`, `tone`, `neighborhoods`, `services`
     - Style preferences: `tone`, `word_limit`

2. **Prepare template**

   - Duplicate into a new folder:
     ```bash
     bash site-template-starter/scripts/duplicate.sh \
       --out "./client-<slug>" \
       --intake "site-template-starter/intake/client.yaml" \
       --init-git
     ```
   - Or, if already in the copy:
     ```bash
     bash site-template-starter/scripts/setup.sh
     ```
   - This script automatically applies client branding to `site.config.ts` and `tailwind.config.js`.

3. **Apply branding & styling**

   - Verify `tailwind.config.js` has been updated with client colors and fonts.
   - Review the color palette and ensure it creates a distinct visual identity:
     - Primary color for CTAs, links, and accents
     - Dark color for text and headers
     - Light color for backgrounds
     - Accent color for highlights and hover states
   - Consider creative variations:
     - Adjust border radius for sharper or softer feel
     - Vary button sizes and styles
     - Modify spacing (padding, margins) to create different rhythm
     - Use gradient combinations from `gradient_from` and `gradient_to`
   - **Important**: The goal is for each client site to look visually distinct, not like a color-swapped template.

4. **Assets**

   - Ensure `public/logo.png` exists (copy from `assets.logo` if defined).
   - Reference it in the NavBar and Hero components.
   - Optional: `public/og-image.jpg`, `public/favicon.png`.

5. **Layout choice**

   - Choose a hero and services layout from `catalog/sections.json` that differs from the previous build.
   - Add a brief comment noting the selected variation.

6. **Content generation**

   - Use the prompts in `site-template-starter/prompts`:
     - **home.md**
       - H1 (<10 words), H2 (<12 words), intro paragraph (<100 words), 3 short bullet points.
       - Include one "near you/near me" and up to 2 neighborhood mentions.
     - **service.md**
       - Produce three concise static service pages:
         - `pages/services/service-a.vue`
         - `pages/services/service-b.vue`
         - `pages/services/service-c.vue`
       - For each:
         - Title (<8 words)
         - Intro (<80 words)
         - 3 short bullets
         - 1-sentence CTA
         - Up to 3 FAQs
       - Keep wording plain and confident; avoid marketing filler.
     - **faq.md**
       - 5–7 brief Q&A pairs (<50 words each).
   - Style rules:
     - Single short paragraphs only.
     - Skip brand repetition; use natural rhythm.

7. **Structured data**

   - Home: `LocalBusiness` JSON-LD (telephone, address, geo).
   - Each service page: `Service` JSON-LD (name, areaServed, @id, url).

8. **Navigation / Footer**

   - Static service routes:
     `/services/service-a`, `/services/service-b`, `/services/service-c`.
   - Services index page at: `/services` → `pages/services/index.vue`
   - Update NavBar, Footer, and HomepageServices components with these routes.
   - Confirm socials and contact info match the intake YAML.

9. **Verify build**
   ```bash
   npm i
   npm run dev
   npm run build || npm run generate
   ```
