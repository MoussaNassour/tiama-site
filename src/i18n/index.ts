import { en, type Dict } from './en';
import { ar } from './ar';
import { fr } from './fr';
import { site } from '../config/site';

export const locales = ['en', 'ar', 'fr'] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = 'en';

const dicts: Record<Lang, Dict> = { en, ar, fr };
export const getDict = (l: Lang): Dict => dicts[l];

const isLang = (x: unknown): x is Lang => locales.includes(x as Lang);
export const pageLang = (param?: string): Lang => (param && isLang(param) ? param : defaultLang);

const BASE = (import.meta.env.BASE_URL || '/').replace(/\/?$/, '/');

/** Site-relative URL for a logical path, e.g. href('ar', '/work/') → /ar/work/ */
export function href(lang: Lang, path = '/'): string {
  const p = path.replace(/^\//, '');
  return BASE + (lang === defaultLang ? '' : `${lang}/`) + p;
}

/** Absolute URL (for canonical, hreflang, Open Graph, JSON-LD). */
export const abs = (lang: Lang, path = '/') => new URL(href(lang, path), site.url).toString();
export const absAsset = (p: string) => new URL(BASE + p.replace(/^\//, ''), site.url).toString();
export const assetUrl = (p: string) => BASE + p.replace(/^\//, '');

/** getStaticPaths helper for the optional [...lang] route segment. */
export const langPaths = () =>
  locales.map((l) => ({ params: { lang: l === defaultLang ? undefined : l } }));
