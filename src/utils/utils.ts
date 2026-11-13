export const extractNameFromSlug = (slug: string): string => {
  return slug
    .replaceAll("-", " ")
    .toLowerCase()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
};

export const copyUrlToClipboard = async (
  url: string = window.location.href,
): Promise<void> => {
  await navigator.clipboard.writeText(url);
};
