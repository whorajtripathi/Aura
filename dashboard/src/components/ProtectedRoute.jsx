import { useEffect, useState } from "react";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await axios.get(
          "https://aura-vcj1.onrender.com/home",
          {
            withCredentials: true,
          }
        );

        if (data.status) {
          setAuthenticated(true);
        } else {
          window.location.href = "https://aura-henna-kappa.vercel.app/login";
        }
      } catch (error) {
        console.error("AUTH ERROR:", error);

        window.location.href = "https://aura-henna-kappa.vercel.app/login";
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