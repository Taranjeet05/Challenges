import { useState } from "react";
import Form from "./components/Form.jsx";
import "./App.css";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleCreateUser(nameValue, emailValue) {
    setName(nameValue);
    setEmail(emailValue);
  }

  return (
    <div className="container">
      <h1>Personal Details Form</h1>
      <Form onSubmit={handleCreateUser} />
      <h2>Your submitted details:</h2>
      <p>
        Name: <span className="output">{name || "John Doe"}</span>
      </p>
      <p>
        Email: <span className="output">{email || "john@doe.com"}</span>
      </p>
    </div>
  );
}
