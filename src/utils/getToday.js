const weekDay = new Array(7);
weekDay[0] = "Sun";
weekDay[1] = "Mon";
weekDay[2] = "Tue";
weekDay[3] = "Wed";
weekDay[4] = "Thur";
weekDay[5] = "Fri";
weekDay[6] = "Sat";

export const getDayOfWeek = (date) => {
  const getDay = String(date.getDate()).padStart(2, '0');
  return `${weekDay[date.getDay()]} ${getDay}`;
};