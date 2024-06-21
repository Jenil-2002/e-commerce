import React, { createContext, useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    // const redirectPath = location.state?.path || "/";
    const [user, setUser] = useState({
        username: "",
        permissions: [],
    });
    const login = (user) => {
        if (user === "admin") {
            setUser({ username: user?.username, permissions: ["view_extra"] });
        } else {
            setUser({ username: user?.username, permissions: ["view_about"] });
        }
        navigate("/");
    };
    const logout = () => {
        setUser({ username: "", permissions: [] });
    };
    return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};
export const useAuth = () => {
    return useContext(AuthContext);
};