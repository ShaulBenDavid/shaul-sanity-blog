export const buildRoutePath = (...segments: string[]): string => {
  return segments.join("/");
};
