import { useEffect, useState } from "react";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3002/home",
          {
            withCredentials: true,
          }
        );

        if (data.status) {
          setAuthenticated(true);
        } else {
          window.location.href = "http://localhost:5173/login";
        }
      } catch (error) {
        console.error("AUTH ERROR:", error);

        window.location.href = "http://localhost:5173/login";
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, []);

  if (loading) {
    return <div>Checking authentication...</div>;
  }

  if (!authenticated) {
    return null;
  }

  return children;
};

export default ProtectedRoute;