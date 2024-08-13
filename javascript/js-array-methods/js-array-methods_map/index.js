console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
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
    tags: ["js", "next", "advanced"],
  },
];

//  1:  answers to lowercase
const lowerCaseAnswers = cards.map(card => card.answer.toLowerCase());

//  2:  questions and answers into a single string
const questionsAndAnswersTogether = cards.map(card => `${card.question} - ${card.answer}`);

//  3:  array of objects with question and answer only
const questionAndAnswer = cards.map(card => ({
  question: card.question,
  answer: card.answer
}));

export { lowerCaseAnswers, questionsAndAnswersTogether, questionAndAnswer };

console.log(lowerCaseAnswers); 
console.log(questionsAndAnswersTogether); 
console.log(questionAndAnswer);