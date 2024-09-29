import "./App.css";

function Smiley({ isHappy }) {
  return (
    <span role="img" aria-label={isHappy ? "happy" : "sad"}>
      {isHappy ? "😄" : "😢"}
    </span>
  );
}

export default function App() {
  return <Smiley isHappy={true} />; 
}
