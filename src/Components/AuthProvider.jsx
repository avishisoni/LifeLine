import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create and export AuthContext
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.get("http://localhost:8001/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(response => {
          setUser(response.data);
        })
        .catch(error => {
          console.error("Error fetching profile:", error);
          localStorage.removeItem("token");
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    axios.get("http://192.168.1.4:8001/profile", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(response => setUser(response.data))
      .catch(error => console.error("Login error:", error));
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
