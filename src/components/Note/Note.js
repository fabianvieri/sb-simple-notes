import React, { useState } from "react";
import "./Note.scss";
import NoteItem from "../NoteItem/NoteItem";
import AddNote from "../AddNote/AddNote";
import TagView from "../TagView/TagView";

const initNotesItem = [
  {
    id: "note1",
    tag: "holiday",
    data: "this is my hobby",
    date: new Date(),
    color: "orange"
  },
  {
    id: "note2",
    tag: "work",
    data: "don't be late at work",
    date: new Date(),
    color: "green"
  },
  {
    id: "note3",
    tag: "family",
    data: "my sister birthday",
    date: new Date(),
    color: "blue"
  }
];

const Note = () => {
  const [notesItem, setNotesItem] = useState(initNotesItem);
  const [toogleTag, setToogleTag] = useState(false);
  const [noteToChangeTag, setNoteToChangeTag] = useState("");

  const handleTextChange = (event, id) => {
    const tempNotesItem = [...notesItem];
    for (const iterator of tempNotesItem) {
      if (iterator.id === id) {
        iterator.data = event.target.value;
        break;
      }
    }
    setNotesItem(tempNotesItem);
  };

  const handleAddNote = () => {
    const tempNotesItem = [...notesItem];
    const currId = "note" + (tempNotesItem.length + 1);
    tempNotesItem.push({
      id: currId,
      tag: "note",
      date: new Date()
    });
    setNotesItem(tempNotesItem);
  };

  const handleDeleteNote = id => {
    const tempNotesItem = [...notesItem];
    let found = false;
    for (const i in tempNotesItem) {
      if (tempNotesItem[i].id === id) {
        found = i;
        break;
      }
    }

    if (found) {
      const cnf = window.confirm("are you sure want ot delete this note ?");
      if (cnf) {
        tempNotesItem.splice(found, 1);
        setNotesItem(tempNotesItem);
      }
    }
  };

  const handleToogleTag = id => {
    setToogleTag(!toogleTag);
    setNoteToChangeTag(id);
  };

  const handleChangeTag = event => {
    const tempNotesItem = [...notesItem];
    for (const iterator of tempNotesItem) {
      if (iterator.id === noteToChangeTag) {
        iterator.tag = event.target.textContent;
        break;
      }
    }
    setNotesItem(tempNotesItem);
    setToogleTag(!toogleTag);
  };

  let tagView = null;
  if (toogleTag) {
    tagView = <TagView click={handleChangeTag} />;
  }

  return (
    <div className="Note">
      {notesItem.map(noteItem => (
        <NoteItem
          key={noteItem.id}
          tag={noteItem.tag}
          data={noteItem.data}
          date={noteItem.date}
          change={event => handleTextChange(event, noteItem.id)}
          deleteNote={() => handleDeleteNote(noteItem.id)}
          changeTag={() => handleToogleTag(noteItem.id)}
        />
      ))}
      <AddNote click={handleAddNote} />
      {tagView}
    </div>
  );
};

export default Note;
