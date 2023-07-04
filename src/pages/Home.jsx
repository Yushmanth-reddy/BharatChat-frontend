import { useContext } from "react";
import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";
import { AuthContext } from "../context/authContext";

const Home = () => {
  const { token, setToken } = useContext(AuthContext);

  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
