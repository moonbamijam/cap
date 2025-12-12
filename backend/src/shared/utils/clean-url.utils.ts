export const cleanURL = (url: string): string => {
  if (url.endsWith("/") && url.length > 8) return url.slice(0, -1);
  return url;
};
