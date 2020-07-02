import React from "react";
import "./Note.scss";
import NoteItem from "../NoteItem/NoteItem";

const Note = () => {
  return (
    <div className="Note">
      <NoteItem />
      <NoteItem />
      <NoteItem />
    </div>
  );
};

export default Note;
