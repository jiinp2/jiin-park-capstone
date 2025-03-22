import { format } from "date-fns";
import { useEffect } from "react";
import "./LogDate.scss";

const LogDate = ({ timestamps, onTitleFormat }) => {
  // Sorted timestamps
  const sortedDates = timestamps
    .filter(Boolean)
    .map((t) => new Date(t))
    .filter((date) => !isNaN(date))
    .sort((a, b) => a - b);

  // Fallback heading
  if (!sortedDates.length) return <h2 className="log-title">Log</h2>;

  // Extract earlist and altest dates
  const startDate = sortedDates[0];
  const endDate = sortedDates[sortedDates.length - 1];

  // Check for year and month
  const sameYear = startDate.getFullYear() === endDate.getFullYear();
  const sameMonth = startDate.getMonth() === endDate.getMonth();

  // Date range formatting
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

  // Passing title to save to database
  useEffect(() => {
    onTitleFormat && onTitleFormat(dateRange);
  }, [dateRange, onTitleFormat]);

  return <h2 className="log-title">{dateRange}</h2>;
};

export default LogDate;
