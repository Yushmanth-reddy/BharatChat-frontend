import { useContext, useEffect, useState } from "react";
import Message from "./message";
import { MessageContext } from "../context/messageContext";
import axios from "axios";

const Messages = () => {
  const ChatUser = JSON.parse(localStorage.getItem("user"));
  const { id: currentUserId } = ChatUser;
  const { selecteduser } = useContext(MessageContext);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getmessagesfromserver = async () => {
      const response = await axios.post("/message/getmessage", {
        from: currentUserId,
        to: selecteduser._id,
      });
      setMessages(response.data);
    };
    getmessagesfromserver();
  }, [selecteduser]);
  return (
    <div className="messages">
      {messages.map((msgItem, i) => (
        <Message msgItem={msgItem} key={i} />
      ))}
    </div>
  );
};

export default Messages;
