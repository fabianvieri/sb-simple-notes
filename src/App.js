import React, { useState } from "react";
import "./styles.scss";
import Note from "./components/Note/Note";
import Login from "./components/Login/Login";

export default function App() {
  const [isLogin, setLogin] = useState(false);

  return (
    <div className="App">
      {isLogin ? null : <Login click={setLogin} />}
      <h1>Simple Notes</h1>
      <Note />
    </div>
  );
}
