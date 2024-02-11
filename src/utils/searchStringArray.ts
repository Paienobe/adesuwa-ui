export const searchStringArray = (query: string, source: string[]) => {
  return source.filter((item) => {
    return item.toLowerCase().includes(query.toLowerCase());
  });
};
