import React from "react";
import { FaTrash } from "react-icons/fa";

const DeleteNote = ({ click }) => {
  return <FaTrash className="icon" onClick={click} />;
};

export default DeleteNote;
