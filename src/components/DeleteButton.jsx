import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

function DeleteButton({ handleDelete }) {
  return (
    <FaTrashAlt
      onClick={handleDelete}
      role="button"
      tabIndex="0"
      style={{ cursor: 'pointer', color:"blue", fontSize:"40px" }}
      aria-label="delete item"
    />
  );
}

export default DeleteButton;
