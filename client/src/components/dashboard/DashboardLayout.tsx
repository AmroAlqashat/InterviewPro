import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

function DashboardLayout(): React.ReactElement {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const navigate = useNavigate();
  const hasRun = useRef<boolean>(false);
  const token: string | null = localStorage.getItem("token");
  
  useEffect(() => {
    const dashboardAPI = async (): Promise<void> => {
      if(hasRun.current) return;
      hasRun.current = true;

      try {
        if (!token) throw new Error("No token found");

        const decodedToken = JSON.parse(atob(token.split(".")[1]));
        const expirationTime = decodedToken.exp * 1000;
        if (Date.now() >= expirationTime) throw new Error("Token expired");
        await axios.get("http://localhost:4000/api/protected/dashboard", {
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
  }, [navigate, token]);

  if (!isAuthorized) return <h1 className="text-lg">Not Authorized. Redirecting...</h1>;

  return (
    <div className="flex flex-col lg:flex-row">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default DashboardLayout;
