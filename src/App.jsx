import { useState } from 'react'
import ItemList from './components/ItemList'
import AddItemList from './components/AddItemList'
import './App.css'

function App() {
  const [items, setItems] = useState([
    {
        id:1,
        item:"pinapple"
    },
    {
        id:2,
        item:"cocunat"
    },
    {
        id:3,
        item:"strobary"
    },
    {
        id:4,
        item:"orange"
    },
    
    ])

    const handleDelete = (id)=>{
      const itemLists =items.filter(item =>item.id !==id);
      setItems(itemLists);
  }
  const handleAdd = (newItemText) => {
    if (!newItemText.trim()) return;
    const newItem = {
      id: items.length ? items[items.length - 1].id + 1 : 1,
      item: newItemText
    };
      setItems([...items, newItem]);
  };

  return (
    <>
    <ItemList
    items={items}
    handleDelete={handleDelete}
    />
    <AddItemList handleAdd={handleAdd} />
     
    </>
  )
}

export default App
