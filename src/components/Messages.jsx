import { useContext, useEffect, useRef, useState } from "react";
import Message from "./message";
import { MessageContext } from "../context/messageContext";
import axios from "axios";

const Messages = ({ socket }) => {
  const ChatUser = JSON.parse(localStorage.getItem("user"));
  const { id: currentUserId } = ChatUser;
  const { selecteduser, messages, setMessages } = useContext(MessageContext);
  const scrollRef = useRef();
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
        <Message msgItem={msgItem} scrollRef={scrollRef} key={i} />
      ))}
    </div>
  );
};

export default Messages;
