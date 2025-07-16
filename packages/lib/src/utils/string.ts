export function slugify(text: string): string {
  return text.toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function truncate(text: string, length = 100): string {
  return text.length > length ? text.slice(0, length) + "…" : text;
}