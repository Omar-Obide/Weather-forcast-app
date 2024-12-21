import { format, isToday } from "date-fns";

const FullDay = (date: string) => {
  const givenDate = new Date(date);

  if (isToday(givenDate)) {
    return 'Today';
  }

  const dayOfWeek = format(givenDate, "EEEE");
  return dayOfWeek;
};

export default FullDay;
