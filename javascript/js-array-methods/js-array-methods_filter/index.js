console.clear();

const cards = [
  {
    id: "1",
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next"],
  },
];

//  1:  card with id "2"
const onlyCardWithIdTwo = cards.filter(card => card.id === "2");

//  2:  3 tags
const allCardsWith3Tags = cards.filter(card => card.tags && card.tags.length === 3);

//  3:  not bookmarked
const allCardsThatAreNotBookmarked = cards.filter(card => card.isBookmarked === false);

//  4:  bookmarked 
const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter(card => 
  card.isBookmarked === true && 
  (card.tags.includes("html") || card.tags.includes("js"))
);

export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};

console.log(onlyCardWithIdTwo); 
console.log(allCardsWith3Tags); 
console.log(allCardsThatAreNotBookmarked); 
console.log(allCardsWithTagsHTMLOrJSThatAreBookmarked); 
