import { useState } from "react";
import EntriesSection from "./components/EntriesSection";
import EntryForm from "./components/EntryForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { uid } from "uid"; 


const initialEntries = [
  {
    id: 1000,
    date: "Feb 5, 2025",
    motto: "We are in a state of chaos",
    notes: "Today I learned about React State. It was fun! I can't wait to learn more.",
  },
];

function App() {
  const [entries, setEntries] = useState(initialEntries);

  function handleAddEntry(newEntry) {
    const date = new Date().toLocaleDateString("en-us", { dateStyle: "medium" });
    const entryWithId = { id: uid(), date, ...newEntry };
    setEntries([entryWithId, ...entries]); 
  }

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <EntryForm onAddEntry={handleAddEntry} /> 
        <EntriesSection entries={entries} /> 
      </main>
      <Footer />
    </div>
  );
}

export default App;
