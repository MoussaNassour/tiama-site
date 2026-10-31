import type { ImageMetadata } from 'astro';

const all = import.meta.glob<ImageMetadata>('../assets/work/*.webp', {
  eager: true,
  import: 'default',
});

/** Look up a processed image in src/assets/work by file name (no extension). */
export function img(name: string): ImageMetadata {
  const m = all[`../assets/work/${name}.webp`];
  if (!m) throw new Error(`Missing image: src/assets/work/${name}.webp`);
  return m;
}

export type Cat = 'branding' | 'illustration' | 'poster' | 'ugc' | 'motion';
export const cats: Cat[] = ['branding', 'illustration', 'poster', 'ugc', 'motion'];

export interface WorkItem {
  id: string;
  cat: Cat;
  title: string;
  /** image file in src/assets/work (or the poster frame for videos) */
  img: string;
  /** mp4 in public/video (name without extension) */
  video?: string;
  /** Case study slug this piece belongs to */
  project?: string;
  /** key in dict.work.notes */
  note?: string;
  /** Oval "cameo" crop (transparent corners) */
  oval?: boolean;
  personal?: boolean;
  hasAudio?: boolean;
}

export const work: WorkItem[] = [
  // ── Branding & packaging ───────────────────────────────
  { id: 'mielle-story', cat: 'branding', title: 'Mielle d’Or', img: 'mielle-story', project: 'mielle-dor' },
  { id: 'fig-grandmother', cat: 'branding', title: 'Fig and Olive', img: 'fig-grandmother', project: 'fig-and-olive' },
  { id: 'kotg-scene', cat: 'branding', title: 'King of the Game', img: 'kotg-scene', project: 'king-of-the-game' },
  { id: 'mielle-box', cat: 'branding', title: 'Mielle d’Or · Box', img: 'mielle-box', project: 'mielle-dor' },
  { id: 'fig-jars', cat: 'branding', title: 'Fig and Olive · Jars', img: 'fig-jars', project: 'fig-and-olive' },
  { id: 'kotg-maze', cat: 'branding', title: 'King of the Game · Cup', img: 'kotg-maze-front', project: 'king-of-the-game' },
  { id: 'fig-milk', cat: 'branding', title: 'Fig and Olive · Bottles', img: 'fig-milk-bottles', project: 'fig-and-olive' },
  { id: 'kotg-menu', cat: 'branding', title: 'King of the Game · Menu', img: 'kotg-menu', project: 'king-of-the-game' },

  // ── Illustration ───────────────────────────────────────
  { id: 'ish-ish', cat: 'illustration', title: 'Ish Ish', img: 'ish-ish-family', note: 'ish-ish', personal: true },
  { id: 'unbowed', cat: 'illustration', title: 'Unbowed', img: 'unbowed' },
  { id: 'wings', cat: 'illustration', title: 'Wings of Tradition', img: 'wings-of-tradition' },
  { id: 'mask', cat: 'illustration', title: 'The Mask of the Heritage', img: 'mask-of-the-heritage' },
  { id: 'first-illustration', cat: 'illustration', title: 'My First Illustration', img: 'my-first-illustration', note: 'first-illustration' },
  { id: 'reserved', cat: 'illustration', title: 'Reserved for Two', img: 'reserved-for-two' },
  { id: 'chapter', cat: 'illustration', title: 'Through Every Chapter', img: 'through-every-chapter' },
  { id: 'sit-down', cat: 'illustration', title: 'Every Sit Down Tells a Story', img: 'every-sit-down' },
  { id: 'meets-reality', cat: 'illustration', title: 'Illustration Meets Reality', img: 'illustration-meets-reality', note: 'meets-reality' },
  { id: 'char-ish-ish', cat: 'illustration', title: 'Ish Ish · Character', img: 'char-ish-ish', oval: true, personal: true },
  { id: 'char-bouchkach', cat: 'illustration', title: 'Bouchkach · Character', img: 'char-bouchkach', oval: true, personal: true },
  { id: 'char-metwaly', cat: 'illustration', title: 'Metwaly · Character', img: 'char-metwaly', oval: true, personal: true },
  { id: 'char-ezat', cat: 'illustration', title: 'Ezat · Character', img: 'char-ezat', oval: true, personal: true },

  // ── Posters ────────────────────────────────────────────
  { id: 'tulote', cat: 'poster', title: 'Tulote', img: 'poster-tulote', personal: true },
  { id: 'habibti', cat: 'poster', title: 'Habibti Calling', img: 'poster-habibti-calling' },
  { id: 'travis', cat: 'poster', title: 'Travis Scott', img: 'poster-travis-scott', personal: true },
  { id: 'joker', cat: 'poster', title: 'Joker', img: 'poster-joker', personal: true },
  { id: 'haifa', cat: 'poster', title: 'Haifa Wehbe', img: 'poster-haifa-wehbe', oval: true, personal: true },
  { id: 'no-one', cat: 'poster', title: 'No One', img: 'poster-no-one', oval: true, personal: true },
  { id: 'mj', cat: 'poster', title: 'Michael Jackson', img: 'poster-michael-jackson', oval: true, personal: true },

  // ── UGC & AI content (video) ───────────────────────────
  { id: 'maison-blue', cat: 'ugc', title: 'Maison Blue', img: 'vposter-maison-blue', video: 'maison-blue', hasAudio: true },
  { id: 'mielle-film', cat: 'ugc', title: 'Mielle d’Or · Honey drizzle', img: 'vposter-mielle-drizzle', video: 'mielle-drizzle', project: 'mielle-dor', hasAudio: true },
  { id: 'buttery-blends', cat: 'ugc', title: 'Buttery Blends · Rosy the Panda', img: 'vposter-buttery-blends', video: 'buttery-blends', hasAudio: true },

  // ── AI animation (video) ───────────────────────────────
  { id: 'ish-ish-anim', cat: 'motion', title: 'Ish Ish · Family portrait', img: 'vposter-ish-ish-family', video: 'ish-ish-family', personal: true, hasAudio: true },
  { id: 'ezat-anim', cat: 'motion', title: 'Ezat · Animated', img: 'vposter-ezat-hookah', video: 'ezat-hookah', personal: true },
  { id: 'dancer-anim', cat: 'motion', title: 'Ish Ish · In motion', img: 'vposter-ish-ish-dancer', video: 'ish-ish-dancer', personal: true, hasAudio: true },
  { id: 'fig-film', cat: 'motion', title: 'Fig and Olive · The film', img: 'vposter-fig-and-olive-film', video: 'fig-and-olive-film', project: 'fig-and-olive', hasAudio: true },
];

export const byId = (id: string) => {
  const w = work.find((x) => x.id === id);
  if (!w) throw new Error(`Unknown work item: ${id}`);
  return w;
};
