import React, { useState } from "react";
import "./NoteItem.scss";
import { FaChevronDown } from "react-icons/fa";
import TextareaAutosize from "react-textarea-autosize";

const textStyle = {
  width: "100%",
  outline: "none",
  resize: "none",
  border: "none",
  padding: "0"
};

const NoteItem = ({ title, data, change }) => {
  const [showNote, setShowNote] = useState(false);

  const toogleNote = () => {
    setShowNote(!showNote);
  };

  let note = null;
  if (showNote) {
    note = (
      <TextareaAutosize
        defaultValue={data}
        style={textStyle}
        onChange={change}
      />
    );
  }

  return (
    <div className="NoteItem">
      <div className="header-note">
        <h3>{title}</h3>
        <FaChevronDown className="icon-down" onClick={toogleNote} />
      </div>
      <div className={showNote ? "detail-note-container" : ""}>{note}</div>
    </div>
  );
};

export default NoteItem;
