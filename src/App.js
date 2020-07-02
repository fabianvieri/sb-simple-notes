import React from "react";
import "./styles.scss";
import Note from "./components/Note/Note";
import AddNote from "./components/AddNote/AddNote";

export default function App() {
  return (
    <div className="App">
      <h1>Simple Notes</h1>
      <Note />
      <AddNote />
    </div>
  );
}
