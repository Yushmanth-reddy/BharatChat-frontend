const Navbar = () => {
  const ChatUser = JSON.parse(localStorage.getItem("user"));
  const { username } = ChatUser;
  const handleLogout = () => {
    const now = new Date();
    now.setFullYear(now.getFullYear() - 1); // Set the expiration to one year ago

    document.cookie = `token=; expires=${now.toUTCString()}; path=/;`;
    window.location.reload();
  };
  return (
    <div className="navbar">
      <span className="logo">Bharat Chat</span>
      <div className="user">
        <img
          src="https://img.freepik.com/free-photo/happy-young-female-student-holding-notebooks-from-courses-smiling-camera-standing-spring-clothes-against-blue-background_1258-70161.jpg?w=2000"
          alt=""
        />
        <span>{username}</span>
        <button
          onClick={() => {
            handleLogout();
          }}
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
