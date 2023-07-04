import Img from "../img/img.png";
import Attach from "../img/attach.png";
import Picker from "emoji-picker-react";
import { useState } from "react";

const Input = ({ handleSendMsg }) => {
  const [text, setText] = useState("");

  const sentChat = (e) => {
    e.preventDefault();
    if (text.length > 0) {
      handleSendMsg(text);
      setText("");
    }
  };
  return (
    <div className="input">
      <form
        onSubmit={(e) => {
          sentChat(e);
        }}
      >
        <input
          type="text"
          placeholder="Type something..."
          required
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <div className="send">
          <img src={Attach} alt="" />
          <input
            type="file"
            style={{ display: "none" }}
            id="file"
            //   onChange={(e) => setImg(e.target.files[0])}
          />
          <label htmlFor="file">
            <img src={Img} alt="" />
          </label>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default Input;
