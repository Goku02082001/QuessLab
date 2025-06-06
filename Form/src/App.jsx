import React, { useState } from 'react';
import './App.css';
import FormPost from './components/FormPost';
import Card from './components/Card';
import { FaPlus } from 'react-icons/fa';

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(prev => !prev);
  };

  return (
    <div className='App'>
      <div className="plus-icon" onClick={toggleForm}>
        <FaPlus size={24} />
      </div>

      <FormPost show={showForm} />

      <Card />
    </div>
  );
};

export default App;
