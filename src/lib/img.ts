import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

/** Responsive widths up to (never beyond) the source size — we never upscale. */
export function widthsFor(w: number, steps = [240, 360, 480, 640, 800, 1024, 1280, 1600]): number[] {
  const list = steps.filter((s) => s < w);
  list.push(w);
  return [...new Set(list)];
}

/** URL of a large WebP used inside the lightbox. */
export async function bigUrl(src: ImageMetadata, max = 1600): Promise<string> {
  const r = await getImage({ src, width: Math.min(max, src.width), format: 'webp', quality: 82 });
  return r.src;
}
