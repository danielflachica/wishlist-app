export const extractNameFromSlug = (slug: string): string => {
  return slug
    .replaceAll("-", " ")
    .toLowerCase()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
};

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
