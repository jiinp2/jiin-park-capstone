import { format } from "date-fns";
import "./LogDate.scss";

const LogDate = ({ timestamps, onTitleFormat }) => {
  if (!timestamps.length) return <h2 className="log-title">Log</h2>;

  const sortedDates = timestamps.map((t) => new Date(t)).sort((a, b) => a - b);
  const startDate = sortedDates[0];
  const endDate = sortedDates[sortedDates.length - 1];

  const sameYear = startDate.getFullYear() === endDate.getFullYear();
  const sameMonth = startDate.getMonth() === endDate.getMonth();

  let dateRange;
  if (sameMonth) {
    dateRange = `${format(startDate, "MMM d")} - ${format(endDate, "d, yyyy")}`;
  } else if (sameYear) {
    dateRange = `${format(startDate, "MMM d")} - ${format(
      endDate,
      "MMM d, yyyy"
    )}`;
  } else {
    dateRange = `${format(startDate, "MMM d, yyyy")} - ${format(
      endDate,
      "MMM d, yyyy"
    )}`;
  }

  onTitleFormat(dateRange);

  return <h2 className="log-title">{dateRange}</h2>;
};

export default LogDate;
