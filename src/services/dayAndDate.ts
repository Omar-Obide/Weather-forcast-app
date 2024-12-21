import { format } from "date-fns";

const dayAndDate = (date: string) => {
  const formattedDate = format(new Date(date), "EEE, dd/MM");
  return formattedDate;
};

export default dayAndDate;
