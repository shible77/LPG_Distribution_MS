import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";

function ContactReports() {
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve authentication status from localStorage
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    if (!isAuthenticated) {
      navigate("/");
    }
  }, [navigate]);
  return <div>Hello from Contact Report</div>;
}

export default ContactReports;
