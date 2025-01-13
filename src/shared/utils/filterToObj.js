function filterToObj(list) {
   if (!list.length) return {};

   const result = list.reduce((acc, { index, value }) => {
      if (!acc[index]) {
         acc[index] = [value];
      } else {
         acc[index].push(value);
      }
      return acc;
   }, {});

   return result;
}

export { filterToObj };
