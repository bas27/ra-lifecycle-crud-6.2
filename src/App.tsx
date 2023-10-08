import { useState, useCallback, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import Cards from "./components/Cards";
import AddNoteForm from "./components/AddNote";

const URL = "https://lifecycle-crud-server.onrender.com/notes";

function App() {
  const [cards, setCards] = useState([]);

  const updateNotes = useCallback(() => {
    const fetchNotes = async () => {
      const response = await fetch(URL);
      const data = await response.json();

      setCards(data);
    };

    fetchNotes();
  }, []);

  const addNote = useCallback((text: string): void => {
    const newNote = {
      body: text,
    };
    const fetchAddNote = async () => {
      const response = await fetch(URL, {
        method: "POST",
        body: JSON.stringify(newNote),
      });

      if (response.ok) {
        updateNotes();
      }
    };

    fetchAddNote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteNote = useCallback((id: string): void => {
    const fetchDeleteNote = async () => {
      const response = await fetch(`${URL}/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        updateNotes();
      }
    };

    fetchDeleteNote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    updateNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app">
      <div className="notes">
        <Header onUpdate={updateNotes} />
        <Cards textCards={cards} onDelete={deleteNote} />
        <AddNoteForm onAddNote={addNote} />
      </div>
    </div>
  );
}

export default App;
