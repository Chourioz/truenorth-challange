import React, { createContext, useState } from "react";

export const UserContext = createContext({});

interface UserContextProps {
  user: string;
  login: Function;
  logout: Function;
}

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState({ name: "", auth: false });

  const login = (name: string) => {
    setUser((user) => ({
      name: name,
      auth: true,
    }));
  };

  const logout = () => {
    setUser((user) => ({
      name: "",
      auth: false,
    }));
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
