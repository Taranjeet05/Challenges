console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.


// Creating and appending a new social media post
function createNewPost(content, username) {
  //  the main section for the post
  const postSection = document.createElement('section');
  postSection.classList.add('post');

  //  the paragraph element for the post content
  const postContent = document.createElement('p');
  postContent.classList.add('post__content');
  postContent.textContent = content;

  // the footer for the post
  const postFooter = document.createElement('footer');
  postFooter.classList.add('post__footer');

  //  the span for the username
  const postUsername = document.createElement('span');
  postUsername.classList.add('post__username');
  postUsername.textContent = `@${username}`;

  // Create the like button
  const likeButton = document.createElement('button');
  likeButton.type = 'button';
  likeButton.classList.add('post__button');
  likeButton.setAttribute('data-js', 'like-button');
  likeButton.textContent = '♥ Like';

  //  event listener for the like button
  likeButton.addEventListener('click', handleLikeButtonClick);

  // Append elements 
  postFooter.appendChild(postUsername);
  postFooter.appendChild(likeButton);
  postSection.appendChild(postContent);
  postSection.appendChild(postFooter);

  // Append new post
  document.body.appendChild(postSection);
}

//  Addg a new post
createNewPost(
  'This is a new post content. It’s dynamically generated using JavaScript!',
  'new_user'
);