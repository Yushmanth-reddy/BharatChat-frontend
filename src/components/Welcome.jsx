import robot from "../img/robot.gif";

const Welcome = () => {
  const ChatUser = JSON.parse(localStorage.getItem("user"));
  const { username } = ChatUser;
  //   console.log(username);
  return (
    <div className="welcomeComp">
      <img src={robot} alt="" />
      <h1>
        Welcome, <span>{username}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </div>
  );
};

export default Welcome;
