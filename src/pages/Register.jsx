import { Link, useNavigate } from "react-router-dom";
import Add from "../img/addAvatar.png";
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/authContext";
import Cookies from "universal-cookie";

const Register = () => {
  const cookies = new Cookies();
  const [err, setErr] = useState(false);
  const [errmsg, setErrmsg] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { token, setToken } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    // const file = e.target[3].files[0];

    var credentials = { username, email, password };

    try {
      const response = await axios.post("/auth/register", credentials);
      console.log(response.data);
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
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="username" />
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          {/* <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label> */}
          <button disabled={loading}>Sign up</button>
          {/* {loading && "Uploading and compressing the image please wait..."} */}
          {err && <span>{errmsg}</span>}
        </form>
        <p>
          You do have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
