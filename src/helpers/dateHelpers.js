// changes memory object to Date.JSON or returns Date.JSON
export const forceDateString = (dateObj) => {
  if (dateObj.hasOwnProperty('_isAMomentObject')) {
    const newDateObj = dateObj.toDate();
    return newDateObj.toJSON();
  } else {
    return dateObj.toJSON();
  }
};
