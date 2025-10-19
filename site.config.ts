// site.config.ts
export type BusinessType = 'LocalBusiness' | 'HVACBusiness' | 'AutoRepair'

export const siteConfig = {
    siteName: "Prescott Electric siteName: "Vogt Electric", Heating, Inc.",
    siteUrl: 'http://prescotteh.com',

    // Contact
    phone: '+17152623253',
    phoneDisplay: "{{PHONE_DISPLAY}}",      // Pretty display
    email: 'mike@prescotteh.com',

    // Location
    location: {
        street: "{{ADDRESS_STREET}}",
        city: "{{ADDRESS_CITY}}",
        state: "{{ADDRESS_STATE}}",
        zip: "{{ADDRESS_ZIP}}",
        country: "{{ADDRESS_COUNTRY}}",
        latitude: "",    // optional
        longitude: ""    // optional
    },

    // Business meta
    description: "Quality since 1963. Prescott Electric description: "Vogt Electric is a locally owned electrical contractor serving homeowners and businesses across the Twin Cities. From panel upgrades to lighting and EV charger installations, we deliver safe, reliable, and efficient electrical solutions.", Heating provides electrical and HVAC services for homes and businesses across the St. Croix River Valley.",
    hours: "{{BUSINESS_HOURS}}",
    businessType: "LocalBusiness", // Options: 'LocalBusiness', 'HVACBusiness', 'AutoRepair', etc.

    // Assets
    socialImage: "/og-image.jpg",
    favicon: "/favicon.png",

    // Theme
    theme: {
        primaryColor:  "{{PRIMARY_COLOR}}",  // teal
        secondaryColor:"{{SECONDARY_COLOR}}",  // light bg
        accentColor:   "{{ACCENT_COLOR}}",  // warm CTA
        fontFamily:    "{{FONT_FAMILY}}",
        borderRadius:  "{{BORDER_RADIUS}}"
    },

    // Hero copy (used in Index sections below if you want to bind it)
    hero: {
        eyebrow: "{{HERO_EYEBROW}}",
        headline: "{{HERO_HEADLINE}}",
        subheadline: "{{HERO_SUBHEADLINE}}",
        ctaPrimaryLabel: "{{CTA_PRIMARY}}",
        ctaSecondaryLabel: "{{CTA_SECONDARY}}"
    },

    // Services summary (HomepageServices already handles grid; this supports extra sections on index)
    services: [
        {
            title: "Paintless Dent Repair",
            blurb: "Door dings, creases, and small collisions corrected without repainting.",
            bullets: ["Mobile or drop-off", "Same-day on many jobs", "Preserve OEM paint"]
        },
        {
            title: "Hail Repair",
            blurb: "Insurance-friendly estimates and panel-by-panel hail dent removal.",
            bullets: ["Work with your insurer", "Multi-panel correction", "Keep CarFax clean"]
        },
        {
            title: "Detailing & Add-ons",
            blurb: "Interior/exterior detailing, scratch/scuff removal, ceramic coating.",
            bullets: ["Express & full detail", "Scratch buffing", "Ceramic protection"]
        }
    ],

    // Why choose us
    valueProps: [
        { title: "OEM Paint Preserved", text: "No filler. No repaint. Just clean metalwork." },
        { title: "Mobile Service",      text: "We can come to you for minor work or schedule drop-off." },
        { title: "Insurance Friendly",  text: "Streamlined estimates and coordination on hail events." }
    ],

    // Reviews (simple placeholders; replace with real quotes when ready)
    reviews: [
        { name: "Sarah M.", text: "Flawless result. You can’t tell there was a dent at all." },
        { name: "Daniel K.", text: "Fast mobile repair at my office. Super convenient." },
        { name: "Alyssa R.", text: "Handled hail damage quickly and worked with my insurer." }
    ],

    // FAQs
    faqs: [
        {
            q: "How long does PDR take?",
            a: "Small dings can be done in hours. Multi-panel hail can take longer depending on severity."
        },
        {
            q: "Do you repaint?",
            a: "No. PDR preserves the OEM paint by massaging the dent from behind the panel."
        },
        {
            q: "Can I text photos for an estimate?",
            a: "Yes—text a few angles and include year/make/model for the quickest quote."
        }
    ],

    // Service areas
    serviceAreas: "{{SERVICE_AREAS}}",

    // Social links (optional)
    social: {
        nextdoor: "{{SOCIAL_NEXTDOOR}}",
        facebook: "{{SOCIAL_FACEBOOK}}",
        yelp: "{{SOCIAL_YELP}}"
    }
}
