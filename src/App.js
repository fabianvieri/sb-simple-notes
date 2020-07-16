import React, { useState, Fragment } from "react";
import "./styles.scss";
import Note from "./components/Note/Note";
import Login from "./components/Login/Login";

export default function App() {
  const [isLogin, setLogin] = useState(false);
  const [username, setUsername] = useState("");

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  return (
    <div className="App">
      {isLogin ? (
        <Fragment>
          <h1>{username}'s notes</h1>
          <Note username={username} />
        </Fragment>
      ) : (
        <Login
          click={() => setLogin(!isLogin)}
          username={username}
          change={handleUsernameChange}
        />
      )}
    </div>
  );
}
