import React, { useState } from "react";

const CharacterCounter = () => {
  const text = "Hi Priya, What are you doing?";

  return (
    <div className="character-counter">
      <textarea
        value={text}
        placeholder="Type your text here..."
        rows="5"
        cols="40"
      />
      <p>Character count: {text.length}</p>
    </div>
  );
};

export default CharacterCounter;
