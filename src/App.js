import React, { useState, useCallback } from 'react';
import Table from './Table';
import Form from './Form';

const App = (props) => {
  const [characters, setCharacters] = useState([]);

  const removeCharacter = useCallback(
    (index) => {
      setCharacters(
        characters.filter((characters, i) => {
          return i !== index;
        }),
      );
    },
    [characters],
  );

  const handleSubmit = useCallback(
    (character) => {
      setCharacters([...characters, character]);
    },
    [characters],
  );

  return (
    <div className="App">
      <Table characterData={characters} removeCharacter={removeCharacter} />
      <Form handleSubmit={handleSubmit} />
    </div>
  );
};

export default App;
