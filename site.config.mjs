// ─────────────────────────────────────────────────────────────
//  The ONE file to edit for contact details, domain and links.
//  Everything on the website reads from here.
// ─────────────────────────────────────────────────────────────
export default {
  // Public address of the site. Use your custom domain once you have one
  // (recommended for SEO), e.g. 'https://tiamanassour.com'.
  // For a plain GitHub address use 'https://<username>.github.io'
  // (and set base to '/<repo-name>/' unless the repo is <username>.github.io).
  url: process.env.SITE_URL || 'https://tiamanassour.com',
  base: process.env.BASE_PATH || '/',

  name: 'Tiama Nassour',
  email: 'nassourtiama@gmail.com',
  phone: '+961 76 610 578',
  // WhatsApp number: digits only, with country code, no "+" or spaces.
  whatsapp: '96176610578',

  // Contact form: create a free key at https://web3forms.com (enter her email),
  // paste it here. Without a key the form opens the visitor's email app instead.
  web3formsKey: '',

  // Social profiles: leave '' to hide. Full URLs, e.g. 'https://instagram.com/…'
  socials: {
    instagram: '',
    behance: '',
    linkedin: '',
    tiktok: '',
  },

  // Optional: Google Search Console "HTML tag" verification code (the content="" value)
  googleSiteVerification: '',
  // Optional: Cloudflare Web Analytics token (free, privacy-friendly, no cookie banner)
  cloudflareAnalyticsToken: '',

  timezone: 'Asia/Beirut',
};
