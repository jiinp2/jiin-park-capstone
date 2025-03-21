import { useEffect, useState } from "react";
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
};

export default UserLogs;
