import "./App.css";

function Sum({ valueA, valueB }) {
  const sum = valueA + valueB;
  return <p>{`${valueA} + ${valueB} = ${sum}`}</p>;
}

export default function App() {
  return <Sum valueA={1} valueB={2} />;
}
