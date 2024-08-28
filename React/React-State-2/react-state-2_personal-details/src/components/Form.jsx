import "./Form.css";

export default function Form({ onSubmit }) {
  return (
    <form
      className="form"
      aria-labelledby="user-details"
      onSubmit={(event) => {
        event.preventDefault();

        // Get the values from the form fields
        const nameValue = event.target.name.value;
        const emailValue = event.target.email.value;

        // Pass the values back to the parent component (App.jsx)
        onSubmit(nameValue, emailValue);

        // Reset the form fields
        event.target.reset();
      }}
    >
      <h2 id="user-details">Please enter your details here!</h2>
      <label htmlFor="name">Name: </label>
      <input id="name" name="name" type="text" placeholder="John Doe" />
      <label htmlFor="email">Email: </label>
      <input id="email" name="email" type="email" placeholder="john@doe.com" />
      <button className="form__submit-button" type="submit">
        Submit
      </button>
    </form>
  );
}
