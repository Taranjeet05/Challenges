import "./App.css";

export default function App() {
  return <HelloWorldArticle/>
}


/* ## Task

Render an HTML `article` tag containing a heading and a paragraph to the browser. 
To do so, create a component called `HelloWorldArticle`.

Use the following hints as guideline:

- In the [App.jsx](src/App.jsx), create a new function called `HelloWorldArticle()`.
- `HelloWorldArticle()` should return an HTML `article` tag as a wrapper which contains;
  - an `h1` heading
  - at least one `p` tag
  - Note: Add whatever tags you like, but the predefined styles are limited ;)
- In the return statement of your `App` function, replace the `div` with your 
`HelloWorldArticle` component.
- Once again, look at the browser and be amazed! */

function HelloWorldArticle () {
  return (
    <article>
      <h1>Starting With React</h1>
      <p>Hello, This is first time that i am using react.</p>
    </article>
  );
}