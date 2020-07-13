import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import "./AddNote.scss";

const AddNote = ({ click }) => {
  return (
    <div className="AddNote" onClick={click}>
      <FaPlusCircle className="icon-plus" />
    </div>
  );
};

export default AddNote;
