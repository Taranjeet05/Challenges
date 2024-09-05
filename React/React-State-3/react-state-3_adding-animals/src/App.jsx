import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import { uid } from "uid";
import "./App.css";

const initialAnimals = [
  {
    id: "mTBErig",
    name: "Octopus",
    emoji: "🐙",
  },
  {
    id: "iMsbXQ1",
    name: "Crocodile",
    emoji: "🐊",
  },
  {
    id: "Qjf_K7V",
    name: "Beaver",
    emoji: "🦫",
  },
];

export default function App() {
  const [animals, setAnimals] = useState(initialAnimals);

  // Update handleAddAnimal to add the new animal with a unique id
  function handleAddAnimal(newAnimal) {
    // Set the new animal into the state with a unique id
    setAnimals([...animals, { id: uid(), ...newAnimal }]);
  }

  return (
    <main className="app">
      <Form onAddAnimal={handleAddAnimal} />
      <List animals={animals} />
    </main>
  );
}
