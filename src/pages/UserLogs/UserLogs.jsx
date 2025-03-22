import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./UserLogs.scss";
import { Icons } from "../../icons";
import { Trash2 } from "lucide-react";

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

  // Delete log
  const handleDeleteLog = async (logId) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/logs/${logId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete log");
      }

      setLogs((prevLogs) => prevLogs.filter((log) => log.log_id !== logId));
    } catch (error) {
      console.error("Error deleting log:", error);
    }
  };

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
              <div className="logs__title-wrapper">
                <p className="label">{log.title}</p>
                <button
                  className="logs__delete"
                  onClick={() => handleDeleteLog(log.log_id)}
                >
                  <Trash2 />
                </button>
              </div>
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
