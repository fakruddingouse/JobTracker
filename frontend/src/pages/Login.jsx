// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";

// const Login = () => {

//   const [formData, setFormData] = useState({
//     email: "",
//     password: ""
//   });

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/login", formData);

//       localStorage.setItem("token", res.data.token);
//       setToken(res.data.token); // ✅ Tell App.jsx the token changed → triggers re-fetch

//       navigate("/dashboard");
//     } catch (err) {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Login</h2>

//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <input
//             type="email"
//             placeholder="Email"
//             required
//             onChange={(e)=>setFormData({...formData,email:e.target.value})}
//           />
//         </div>

//         <div className="form-group">
//           <input
//             type="password"
//             placeholder="Password"
//             required
//             onChange={(e)=>setFormData({...formData,password:e.target.value})}
//           />
//         </div>

//         <button className="btn-submit" type="submit">Login</button>

//         <p className="link">
//           Don't have an account? <Link to="/signup">Create Account</Link>
//         </p>

//       </form>
//     </div>
//   );
// };

// export default Login;



import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Login = ({ setToken }) => {  // ✅ Receive setToken as prop

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, formData);
      
      localStorage.setItem("token", res.data.token);
      setToken(res.data.token); // ✅ Notify App.jsx → triggers job re-fetch

      navigate("/dashboard");

    } catch (err) {
      alert("Invalid credentials");
    }

  };

  return (
    <div className="form-container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>

        <button className="btn-submit" type="submit">Login</button>

        <p className="link">
          Don't have an account? <Link to="/signup">Create Account</Link>
        </p>

      </form>
    </div>
  );
};

export default Login;