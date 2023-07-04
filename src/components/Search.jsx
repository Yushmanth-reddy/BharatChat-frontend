import { useState } from "react";

const Search = () => {
  const [username, setUsername] = useState("");

  return (
    <></>
    // <div className="search">
    //   <div className="searchForm">
    //     {/* <input
    //       type="text"
    //       placeholder="Find a user"
    //       // onKeyDown={handleKey}
    //       onChange={(e) => setUsername(e.target.value)}
    //       value={username}
    //     /> */}
    //   </div>
    //   {/* {err && <span>User not found!</span>} */}
    //   {
    //     <div className="userChat">
    //       <img
    //         src="https://img.freepik.com/free-photo/happy-young-female-student-holding-notebooks-from-courses-smiling-camera-standing-spring-clothes-against-blue-background_1258-70161.jpg?w=2000"
    //         alt=""
    //       />
    //       <div className="userChatInfo">
    //         <span>hello</span>
    //       </div>
    //     </div>
    //   }
    // </div>
  );
};

export default Search;
