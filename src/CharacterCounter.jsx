// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const CharacterCounter = () => {
  const [text, setText] = useState("");

  const textHandle = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="character-counter">
      <textarea
        // value={text}
        placeholder="Type your text here..."
        rows="5"
        cols="40"
        onChange={textHandle}
      />
      <p>Character count: {text.length}</p>
    </div>
  );
};

export default CharacterCounter;
