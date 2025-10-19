// site.config.ts
export type BusinessType = 'LocalBusiness' | 'HVACBusiness' | 'AutoRepair'

export const siteConfig = {
    siteName: 'Prescott Electric & Heating, Inc.',
    siteUrl: 'https://prescotteh.com',

    // Contact
    phone: '+17152623253',
    phoneDisplay: '(715) 262-3253',
    email: 'mike@prescotteh.com',

    // Location
    location: {
        street: '131 Broad Street North',
        city: 'Prescott',
        state: 'WI',
        zip: '54021',
        country: 'US',
        latitude: '',
        longitude: ''
    },

    // Business meta
    description: 'Prescott Electric & Heating delivers licensed electrical and HVAC service for homes and small businesses across the St. Croix River Valley.',
    hours: 'Mo–Fr 07:00–17:00',
    businessType: 'HVACBusiness' as BusinessType,

    // Assets
    socialImage: '/og-image.jpg',
    favicon: '/favicon.png',

    // Theme tokens used in components
    theme: {
        primaryColor: '#118AB2',
        secondaryColor: '#F5F7FA',
        accentColor: '#0B6E7E',
        fontFamily: 'Russo One, Inter, sans-serif',
        borderRadius: '1.75rem'
    },

    hero: {
        eyebrow: 'Serving the St. Croix River Valley Since 1963',
        headline: 'Reliable Electrical & HVAC Pros Near You',
        subheadline: 'Licensed electricians and heating technicians for fast, code-compliant fixes across Prescott and River Falls.',
        ctaPrimaryLabel: 'Call for Service',
        ctaSecondaryLabel: 'Book an Estimate'
    },

    homeContent: {
        intro: 'Prescott Electric & Heating keeps homes and small businesses in Prescott and River Falls running safely and comfortably. Our electricians handle panel upgrades, lighting, and everyday troubleshooting, while our HVAC team installs and services furnaces, air conditioners, and ductless systems. We show up on time, clean up before we leave, and explain every option in plain language so you can make the call that fits your space and budget.',
        bullets: [
            'Same-day troubleshooting for urgent electrical issues',
            'Energy-smart installs with financing-friendly options',
            'Licensed electricians and HVAC techs on every project',
            'Serving Prescott and River Falls, plus nearby communities'
        ]
    },

    services: [
        {
            title: 'Residential Electrical',
            blurb: 'Repairs, upgrades, and safety-driven wiring for homes across the valley.',
            bullets: [
                'Panel replacements and capacity planning',
                'Lighting design, installs, and repairs',
                'Whole-home surge and code corrections'
            ]
        },
        {
            title: 'Commercial Electrical',
            blurb: 'Tenant build-outs, lighting retrofits, and maintenance for offices and shops.',
            bullets: [
                'Dedicated circuits for equipment',
                'LED upgrades that cut usage',
                'On-call troubleshooting for outages'
            ]
        },
        {
            title: 'Heating & Cooling',
            blurb: 'Installation and service for furnaces, air conditioners, and ductless systems.',
            bullets: [
                'High-efficiency furnace and AC installs',
                'Ductless mini-splits for comfort control',
                'Seasonal tune-ups and emergency repairs'
            ]
        }
    ],

    valueProps: [
        { title: 'One Call for Power & Comfort', text: 'Coordinated electrical and HVAC crews eliminate juggling multiple contractors.' },
        { title: 'Craftsmanship Since 1963',      text: 'Family-owned and trusted for code-compliant installs across the St. Croix Valley.' },
        { title: 'Clear Pricing Before Work',     text: 'We review options on-site, provide written estimates, and stand behind every fix.' }
    ],

    reviews: [
        { name: 'Lori H.',   text: 'They replaced our panel and added surge protection in one visit—everything was tidy and clearly explained.' },
        { name: 'Trevor M.', text: 'Furnace quit on a freezing night. Prescott Electric & Heating had us warm again before sunrise.' },
        { name: 'Sheila D.', text: 'Fast troubleshooting on our shop lighting and they coordinated with the city inspector without delays.' }
    ],

    faqs: [
        {
            q: 'Do you handle emergency calls?',
            a: 'Yes. We offer after-hours support for electrical outages and heating failures—call and we will triage the quickest solution.'
        },
        {
            q: 'Can you upgrade my panel and furnace together?',
            a: 'Absolutely. We plan the electrical capacity first, then install the HVAC equipment so everything passes inspection the first time.'
        },
        {
            q: 'Which areas do you serve?',
            a: 'We regularly work in Prescott, River Falls, Hudson, Hastings, Red Wing, Cottage Grove, and neighboring communities.'
        },
        {
            q: 'Do you offer maintenance plans?',
            a: 'Yes. Schedule seasonal electrical and HVAC checks so breakers, furnaces, and air conditioners stay efficient year-round.'
        },
        {
            q: 'Can I request a virtual estimate?',
            a: 'Send photos or short videos of the issue and we will review them before visiting your property.'
        }
    ],

    serviceAreas: ['Prescott', 'River Falls', 'Hudson', 'Hastings', 'Red Wing', 'Cottage Grove'],

    social: {
        website: 'https://prescotteh.com',
        gbp: '',
        facebook: '',
        instagram: '',
        yelp: '',
        nextdoor: ''
    }
}
