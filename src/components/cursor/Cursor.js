import React from "react";
import "./cursor.css";

const Cursor = ({ cursorPosition }) => {
  const { top, left } = cursorPosition;
  return (
    <div className='cursor' style={{ top, left }}>
      Play Reel
    </div>
  );
};

export default Cursor;
