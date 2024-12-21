const modifiedDate = (date: string) => {
  let dateArray = Array.from(date);
  return dateArray.slice(11,16).join('');
};

export default modifiedDate;
