import "./App.css";

export default function App() {
  return (
    <main>
      <Button First Button/>
      <Button Hello/>
      <Button Click Here />
      <Button Welcome/>
    </main>
  );
}

function Button({children}) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
