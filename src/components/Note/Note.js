import React, { useState } from "react";
import "./Note.scss";
import NoteItem from "../NoteItem/NoteItem";
import AddNote from "../AddNote/AddNote";

const initNotesItem = [
  {
    id: "note1",
    title: "hobby",
    data: "this is my hobby"
  },
  {
    id: "note2",
    title: "work",
    data: "don't be late at work"
  },
  {
    id: "note3",
    title: "family",
    data: "my sister birthday"
  }
];

const Note = () => {
  const [notesItem, setNotesItem] = useState(initNotesItem);

  const handleTextChange = (event, id) => {
    const tempNotesItem = [...notesItem];
    for (const iterator of tempNotesItem) {
      if (iterator.id === id) {
        iterator.data = event.target.value;
      }
    }
    setNotesItem(tempNotesItem);
  };

  const handleAddNote = () => {
    const tempNotesItem = [...notesItem];
    const currId = "note" + (tempNotesItem.length + 1);
    tempNotesItem.push({
      id: currId,
      title: "new note"
    });
    setNotesItem(tempNotesItem);
  };

  return (
    <div className="Note">
      {notesItem.map(noteItem => (
        <NoteItem
          key={noteItem.id}
          title={noteItem.title}
          data={noteItem.data}
          change={event => handleTextChange(event, noteItem.id)}
        />
      ))}
      <AddNote click={handleAddNote} />
    </div>
  );
};

export default Note;
