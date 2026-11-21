export const extractNameFromSlug = (slug: string): string => {
  return slug
    .replaceAll("-", " ")
    .toLowerCase()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
};

export const slugify = (input: string): string =>
  input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // "Niño" becomes "Nino"
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // anything else becomes a hyphen
    .replace(/^-+|-+$/g, ""); // trim leading and trailing hyphens

export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
};

export async function handleShareClick(slug: string) {
  const link = `${window.location.origin}/list/${slug}`;
  const copied = await copyToClipboard(link);

  if (copied) {
    alert("Link copied to clipboard. Share it with your friends!");
  } else {
    window.prompt("Copy this link and share it with your friends:", link);
  }
}
