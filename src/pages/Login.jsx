import { Link, useNavigate } from "react-router-dom";
import "../style.scss";
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/authContext";
import Cookies from "universal-cookie";

const Login = () => {
  const cookies = new Cookies();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [errmsg, setErrmsg] = useState();
  const navigate = useNavigate();
  const { token, setToken } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    var credentials = { email, password };
    // console.log(credentials);
    try {
      const response = await axios.post("/auth/login", credentials);
      // console.log(response.data);
      // setToken(response.data.token);
      const myCookie = cookies.get("token");
      setToken(myCookie);
      const chatUser = {
        id: response.data.id,
        username: response.data.username,
      };
      localStorage.setItem("user", JSON.stringify(chatUser));
      navigate("/home");
    } catch (err) {
      setErr(true);
      setErrmsg(err.response.data.message);
      setLoading(false);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Bharat Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button type="submit" disabled={loading}>
            Sign in
          </button>
          {err && <span>{errmsg}</span>}
        </form>
        <p>
          You don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
