import React, { useState } from 'react';

function AddItemList({ handleAdd }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '10px' }}>
      <input
        id='input'
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new item..."
        style={{ padding: '10px', marginRight: '10px' }}
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddItemList;
