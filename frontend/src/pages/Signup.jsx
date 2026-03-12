import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {

  const navigate = useNavigate();

  const [formData,setFormData] = useState({
    name:"",
    email:"",
    password:""
  });

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post("http://localhost:5000/api/auth/signup",formData);

      navigate("/login");

    } catch(err){
      alert("Signup failed");
    }

  };

  return (

    <div className="form-container">

      <h2>Create Account</h2>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            required
            onChange={(e)=>setFormData({...formData,name:e.target.value})}
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e)=>setFormData({...formData,email:e.target.value})}
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e)=>setFormData({...formData,password:e.target.value})}
          />
        </div>

        <button className="btn-submit" type="submit">Signup</button>

        <p>
          Already have account? <Link to="/login">Login</Link>
        </p>

      </form>

    </div>

  );
};

export default Signup;