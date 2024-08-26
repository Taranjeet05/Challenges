import "./App.css";

export default function App() {
  return (
    <div>
      {}
      <Greeting name="Taranjeet Singh" />
    </div>
  );
}

function Greeting({ name }) {
  const coaches = ["John", "Jane", "Doe"];

  return <h1>{coaches.includes(name) ? "Hello, Coach!" : `Hello, ${name}!`}</h1>;
}

