import { useState } from 'react';

import Form from './components/Form';
import Navbar from './components/Navbar';
import List, { Packist } from './components/List';
import State from './components/State';

function App() {
  // Saari packing items yahan store hongi
  const [items, setItems] = useState([]);

  // Form se new item receive hoga
  function handleAddItem(item) {
    setItems((items) => [
      ...items,

      {
        ...item,

        // Quantity ko hi sorting ID bana rahe hain
        // Example: quantity 5 hai to listId bhi 5 hoga
        listId: item.quantity,
      },
    ]);
  }

  // Checkbox click hone par packed value change hogi
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,

              packed: !item.packed,
            }
          : item,
      ),
    );
  }

  // Delete button se item remove hoga
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  // Quantity/listId ke according ascending sorting
  function handleSortItems() {
    const sortedItems = [...items].sort((a, b) => a.listId - b.listId);

    setItems(sortedItems);
  }

  // Puri list clear karne ke liye
  function handleClearItems() {
    setItems([]);
  }

  return (
    <>
      <Navbar />

      {/* Form ko item add karne ka function pass kar rahe hain */}
      <Form onAddItem={handleAddItem} />

      {/* List ko data aur functions pass kar rahe hain */}
      <List
        items={items}
        onToggleItem={handleToggleItem}
        onDeleteItem={handleDeleteItem}
      />

      {/* Sorting aur clear buttons */}
      <Packist onSortItems={handleSortItems} onClearItems={handleClearItems} />

      <State items={items} />
    </>
  );
}

export default App;
