import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: null,
    name: "",
    email: "",
    password: "",
    profilePic: "https://res.cloudinary.com/mytrainingschool/image/upload/v1661717512/ef0igyp7wj1zmwaqtyc0.jpg",
    isLoggedIn: false
  })

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
