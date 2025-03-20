import "./LogDate.scss";

const LogDate = ({ timestamp }) => {
  if (!timestamp.length) return <h2>Log</h2>;

  const sortedDates = timestamp.map((t) => new Date(t)).sort((a, b) => a - b);
  const startDate = sortedDates[0];
  const endDate = sortedDates[sortedDates.length - 1];

  const sameYear = startDate.getFullYear() === endDate.getFullYear();
  const sameMonth = startDate.getMonth() === endDate.getMonth();

  let dateRange;
  if (sameMonth) {
    dateRange = `${format(startDate, "MMM d")}=${format(endDate, "d, yyyy")}`;
  } else if (sameYear) {
    dateRange = `${format(startDate, "MMM d")} - ${format(
      endDate,
      "MMM d, yyyy"
    )}`;
  } else {
    dateRange = `${format(startDate, "MMM yyyy")} - ${format(
      endDate,
      "MMM yyyy"
    )}`;
  }

  return <h2>{dateRange}</h2>;
};

export default LogDate;
