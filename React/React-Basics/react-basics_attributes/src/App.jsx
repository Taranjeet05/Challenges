import "./App.css";

export default function App() {
  return <Article/>;
}

/*## Task

Write an `Article` component and use it to replace the given `<div>`.

Your component should contain the following parts:

- an `<article>` as a wrapper HTML element with the class `article`
- an `<h2>` with the class `article__title` and a text of your choice
- a `<label>` and `<input>` tag connected with `id` and `htmlFor` (!) attributes
- an `<a>` tag with the class `article__link` as well as text content and 
 `href` attribute of your choice (What about a Wikipedia article?)
 */

 function Article () {
  return (
   <article className ="article">
    <h2 className ="article__title">Hello Everyone to learn React </h2>
    <label htmlFor="react"><input type="text" id ="input--tag" /></label>
    <a href="https://github.com/" className = "article__link" target = "_blank">Click Here</a>
   </article>
  );
 }



 