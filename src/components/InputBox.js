import React from "react";

const InputBox = ({input , setInput , toggleAdd}) => {

  return (
    <div className="input-div">
      <input
        placeholder="Type something to add...."
        className="input"
        name="text"
        type="text"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
      />
      <div className="add-btn" onClick={toggleAdd}>
      <i className="fa-solid fa-plus">
      </i>
      </div>
    </div>
  );
};

export default InputBox;
