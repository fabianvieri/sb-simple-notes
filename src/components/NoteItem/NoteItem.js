import React, { useState } from "react";
import "./NoteItem.scss";
import TextareaAutosize from "react-textarea-autosize";
import ViewNote from "../ViewNote/ViewNote";
import ChangeTag from "../ChangeTag/ChangeTag";
import DeleteNote from "../DeleteNote/DeleteNote";

const textStyle = {
  width: "100%",
  outline: "none",
  resize: "none",
  border: "none",
  padding: "0",
  fontSize: "1.1rem"
};

const NoteItem = ({ tag, data, change, deleteNote, date, changeTag }) => {
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
        <div className="tag-section">
          <h3>{tag}</h3>
          <p>{date.toDateString()}</p>
        </div>
        <div className="icon-section">
          <ChangeTag click={changeTag} />
          <DeleteNote click={deleteNote} />
          <ViewNote click={toogleNote} toogle={showNote} />
        </div>
      </div>
      <div className={showNote ? "detail-note-container" : ""}>{note}</div>
    </div>
  );
};

export default NoteItem;
