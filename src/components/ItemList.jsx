import React from 'react';
import DeleteButton from './DeleteButton';


function ItemList({items, handleDelete}) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} style={{ marginBottom: '10px' }}>
        <span>{item.item}</span>
        <DeleteButton handleDelete={() => handleDelete(item.id)} />
      </li>
      ))}
    </ul>
  )
}

export default ItemList
