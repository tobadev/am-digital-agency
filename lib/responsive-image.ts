/**
 * Builds a srcSet string for responsive images.
 * Assumes variants exist at: /path/to/image-640w.webp, -960w.webp, -1280w.webp
 * The original is used as the largest size.
 */

const WIDTHS = [640, 960, 1280];

export function getSrcSet(src: string): string {
  const ext = src.substring(src.lastIndexOf('.'));
  const base = src.substring(0, src.lastIndexOf('.'));

  const variants = WIDTHS.map((w) => `${base}-${w}w${ext} ${w}w`);
  // Add original as the largest (1920w as default)
  variants.push(`${src} 1920w`);

  return variants.join(', ');
}
