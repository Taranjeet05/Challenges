import "./App.css";

export default function App(name) {
  return (
    <div>
      <Greeting name = 'Taranjeet Singh' />
    </div>
  )
}


function Greeting ({name}) {

  let coaches = ['John', 'Jane', 'Doe']

  return (
    <h1>
      {coaches.includes(name) ? 'Hello coach!' : `Hello, ${name}!`}
    </h1>
  );
}


