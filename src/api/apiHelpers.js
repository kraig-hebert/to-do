export const createListDict = (list) => {
  let newDict = {};
  list.map((dict) => {
    newDict[Object.keys(dict)[0]] = dict[Object.keys(dict)[0]].map(
      (dictItem) => {
        return {
          ...dictItem,
          startDate: new Date(dictItem.startDate),
          endDate: new Date(dictItem.endDate),
        };
      }
    );
  });
  return newDict;
};
