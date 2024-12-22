import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainProtectedWrapper = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
    }
    axios
      .post(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          const data = response.data;
          setCaptain(data.captain);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.log("Error:", error);
        localStorage.removeItem("token");
        navigate("/captain-login");
      });
  }, [token, navigate]);


  if (isLoading) {
    return <div>Loading...</div>;
  }
  return <>{children}</>;
};

export default CaptainProtectedWrapper;