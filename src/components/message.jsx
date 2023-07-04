import { useRef } from "react";

const Message = ({ msgItem }) => {
  const ref = useRef();
  // console.log(msgItem);
  return (
    <div ref={ref} className={`message ${msgItem.fromSelf && "owner"}`}>
      <div className="messageInfo">
        <img
          src="https://img.freepik.com/free-photo/happy-young-female-student-holding-notebooks-from-courses-smiling-camera-standing-spring-clothes-against-blue-background_1258-70161.jpg?w=2000"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>{msgItem.message}</p>
        {/* {message.img && <img src={message.img} alt="" />} */}
      </div>
    </div>
  );
};

export default Message;
