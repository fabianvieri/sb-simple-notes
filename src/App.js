import React from "react";
import "./styles.scss";
import Note from "./components/Note/Note";

export default function App() {
  return (
    <div className="App">
      <h1>Simple Notes</h1>
      <Note />
    </div>
  );
}
