import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import "./register.scss";

const Register = () => {
  const {user, setUser} = useContext(AuthContext)
  // console.log(user)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if(!user.isLoggedIn){
        const newUser = await fetch('https://socialmedia-server-ws6f.vercel.app/api', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        })
      })
      .then(response => response.json())
      // console.log(newUser)
      

      alert('Registered successfully. Click here to login')

      navigate('/login');



    } else {
      alert('user exists!')
    }
    
    
  }

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Lama Social.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
            <button onClick={(e) => handleRegister(e)}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
