import axios from 'axios'
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./style.scss";
import { useContext, useEffect } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext, AuthContextProvider } from "./context/authContext"; 
import UpdateProfile from "./pages/UpdateProfile/UpdateProfile";

function App() {
  const { user, setUser } = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  

  // useEffect(() => {
  //   const result = axios.get(`http://localhost:5000/api/${user.id}`)
  //   console.log(result)
  // })
  return (
    <AuthContextProvider value={{user, setUser}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
          </Route>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/update' element={<UpdateProfile/>}/>
          <Route path='*' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
      </AuthContextProvider>

  );
}

export default App;
