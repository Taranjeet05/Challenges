import { useState } from "react";
import "./EntryForm.css";
import Button from "../Button";

export default function EntryForm({ onAddEntry }) {
  const [motto, setMotto] = useState("");
  const [notes, setNotes] = useState("");

  
  function handleSubmit(event) {
    event.preventDefault(); 
    const newEntry = { motto, notes }; 
    onAddEntry(newEntry); 
    setMotto(""); 
    setNotes("");
  }

  return (
    <form className="entry-form" onSubmit={handleSubmit}>
      <h2 className="entry-form__title">New Entry</h2>
      <div className="entry-form__fields">
        <div className="entry-form__field">
          <label htmlFor="motto">Motto</label>
          <input
            type="text"
            name="motto"
            id="motto"
            value={motto}
            onChange={(event) => setMotto(event.target.value)}
          />
        </div>
        <div className="entry-form__field">
          <label htmlFor="notes">Notes</label>
          <textarea
            name="notes"
            id="notes"
            rows="4"
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
          />
        </div>
        <div className="entry-form__button-wrapper">
          <Button type="submit">Create</Button>
        </div>
      </div>
    </form>
  );
}
