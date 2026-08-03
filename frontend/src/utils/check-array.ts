export const checkArray = (item: string | string[] | undefined) => {
  return Array.isArray(item) ? item : item ? [item] : [];
};
