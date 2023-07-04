import axios from "axios";
import UseFetch from "../hooks/useFetch";
import { useContext, useEffect, useState } from "react";
import { MessageContext } from "../context/messageContext";

const Chats = () => {
  const ChatUser = JSON.parse(localStorage.getItem("user"));
  const { id } = ChatUser;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const { selecteduser, setSelectedUser, setIsLoaded } =
    useContext(MessageContext);
  useEffect(() => {
    const fetchdata = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`/user/getallusers/${id}`);
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchdata();
  }, []);
  // console.log(data);

  const selectContact = (contact) => {
    setSelectedUser(contact);
    setIsLoaded(true);
  };
  return (
    <>
      {data.map((contact, i) => (
        <div
          className="chats"
          key={i}
          onClick={() => {
            selectContact(contact);
          }}
        >
          <div className="userChat">
            <img
              src="https://img.freepik.com/free-photo/happy-young-female-student-holding-notebooks-from-courses-smiling-camera-standing-spring-clothes-against-blue-background_1258-70161.jpg?w=2000"
              alt=""
            />
            <div className="userChatInfo">
              <span>{contact.username}</span>
              <p>hello</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Chats;
