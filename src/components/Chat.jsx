import axios from "axios";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./input";
import { useContext } from "react";
import { MessageContext } from "../context/messageContext";
import Welcome from "./Welcome";

const Chat = () => {
  const ChatUser = JSON.parse(localStorage.getItem("user"));
  const { id: currentUserId } = ChatUser;
  const { selecteduser, setSelectedUser, isLoaded } =
    useContext(MessageContext);
  // console.log(currentUser);
  // console.log(isLoaded);
  const handleSendMsg = async (msg) => {
    await axios.post("/message/addmessage", {
      from: currentUserId,
      to: selecteduser._id,
      message: msg,
    });
  };
  return (
    <div className="chat">
      {isLoaded && selecteduser.username !== undefined ? (
        <>
          <div className="chatInfo">
            <span>{selecteduser.username}</span>
            <div className="chatIcons">
              <img src={Cam} alt="" />
              <img src={Add} alt="" />
              <img src={More} alt="" />
            </div>
          </div>
          <Messages />
          <Input handleSendMsg={handleSendMsg} />
        </>
      ) : (
        <Welcome />
      )}
    </div>
  );
};

export default Chat;
