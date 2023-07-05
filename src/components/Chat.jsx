import axios from "axios";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./input";
import { useContext, useEffect, useRef, useState } from "react";
import { MessageContext } from "../context/messageContext";
import Welcome from "./Welcome";
import { io } from "socket.io-client";
import { host } from "../utils/APIRoutes";

const Chat = () => {
  const socket = useRef();
  const ChatUser = JSON.parse(localStorage.getItem("user"));
  const { id: currentUserId } = ChatUser;
  const { selecteduser, setSelectedUser, isLoaded, messages, setMessages } =
    useContext(MessageContext);
  const [arrivalMessage, setArrivalMessage] = useState(null);

  useEffect(() => {
    if (ChatUser) {
      socket.current = io(host);
      socket.current.emit("add-user", currentUserId);
    }
  }, [ChatUser.id]);
  const handleSendMsg = async (msg) => {
    await axios.post("/message/addmessage", {
      from: currentUserId,
      to: selecteduser._id,
      message: msg,
    });
    socket.current.emit("send-msg", {
      to: selecteduser._id,
      from: currentUserId,
      message: msg,
    });
    const msgs = [...messages];
    msgs.push({ fromSelf: true, message: msg });
    setMessages(msgs);
  };

  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-recieve", (msg) => {
        setArrivalMessage({ fromSelf: false, message: msg });
      });
    }
  }, []);

  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);
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
          <Messages socket={socket} />
          <Input handleSendMsg={handleSendMsg} />
        </>
      ) : (
        <Welcome />
      )}
    </div>
  );
};

export default Chat;
