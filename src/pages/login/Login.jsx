import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  const {user, setUser} = useContext(AuthContext)

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if(!user.isLoggedIn){
      console.log('if codeblock')

        const existingUser = await fetch('https://socialmedia-server-ws6f.vercel.app/api/login', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: email
          })
        })
        .then(response => response.json())
        console.log(existingUser)
      
      setUser({
        id: existingUser._id,
        name: existingUser.name,
        email: existingUser.email,
        password: existingUser.password,
        profilePic: "https://res.cloudinary.com/mytrainingschool/image/upload/v1661717512/ef0igyp7wj1zmwaqtyc0.jpg",
        isLoggedIn: true
      })

      alert('Logged in successfully')

      navigate('/');

      

    } else {
      alert('user exists!')
    }
    
    
  }



  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={(e) => handleLogin(e)}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
