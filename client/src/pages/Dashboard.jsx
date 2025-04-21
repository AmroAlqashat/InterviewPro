import { React, useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/dashboard/Navbar/Navbar.jsx";

function Dashboard() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const navigate = useNavigate();
  const hasRun = useRef(false);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const dashboardAPI = async () => {
      if(hasRun.current) return;
      hasRun.current = true;

      try {
        if (!token) throw new Error("No token found");

        const decodedToken = JSON.parse(atob(token.split(".")[1]));
        const expirationTime = decodedToken.exp * 1000;
        if (Date.now() >= expirationTime) throw new Error("Token expired");
        await axios.get("http://localhost:5000/api/protected/dashboard", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setIsAuthorized(true);
      } catch (error) {
        console.log("Unauthorized:", error);

        localStorage.removeItem("token");
        setIsAuthorized(false);
        setTimeout(() => navigate("/"), 1500);
      }
    };

    dashboardAPI();
  }, [navigate]);

  if (!isAuthorized) return <h1 className="text-lg">Not Authorized. Redirecting...</h1>;

  return (
    <div>
      <Navbar />
    </div>
  );
}

export default Dashboard;
