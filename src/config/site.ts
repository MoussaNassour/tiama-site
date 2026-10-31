import cfg from '../../site.config.mjs';

export const site = cfg as {
  url: string;
  base: string;
  name: string;
  email: string;
  phone: string;
  whatsapp: string;
  web3formsKey: string;
  socials: Record<'instagram' | 'behance' | 'linkedin' | 'tiktok', string>;
  googleSiteVerification: string;
  cloudflareAnalyticsToken: string;
  timezone: string;
};

export const waLink = (text = '') =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
