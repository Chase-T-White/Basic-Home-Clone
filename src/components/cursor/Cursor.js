import React from "react";
import "./cursor.css";

const Cursor = ({ cursorPosition }) => {
  const { top, left, transform } = cursorPosition;
  return (
    <div className='cursor-container' style={{ top, left, transform }}>
      <div className='cursor'>
        Play<br></br>Reel
      </div>
      basic/dept®<br></br>2010-22
    </div>
  );
};

export default Cursor;
