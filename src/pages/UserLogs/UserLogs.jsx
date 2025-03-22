import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./UserLogs.scss";

const UserLogs = () => {
  const navigate = useNavigate();
  const [logs, setLogs] = useState([]);

  // Fetch saved logs
  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/logs`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch logs");
        }

        const data = await response.json();
        setLogs(data.logs);
      } catch (error) {
        console.error("Error fetching logs:", error);
      }
    };
    fetchLogs();
  }, []);

  return (
    <section className="logs">
      <h1>Saved Logs</h1>
      {logs.length > 0 ? (
        <div className="logs__list">
          {logs.map((log) => (
            <div
              key={log.log_id}
              className="logs__cards"
              onClick={() => navigate(`/logs/${log.log_id}`)}
            >
              <p className="label">{log.title}</p>
              <img
                src={`${import.meta.env.VITE_API_URL}${log.cover_image}`}
                alt={log.title}
              />
              <Link
                to={`/log/${log.log_id}/edit`}
                className="button--secondary"
              >
                View Log
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>No logs saved yet.</p>
      )}
    </section>
  );
};

export default UserLogs;
