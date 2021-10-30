// import React from "react";
// import { useParams } from "react-router";
// const { module_id } = useParams();

// function QuizQuestions() {
//   const { module_id } = useParams();
//   if (module_id === "rights_over_body") {
const qBank = [
  {
    question: "Who has the ultimate right over your body? ?",
    answers: ["Yourself", "Parents", "Close relatives"],
    correct: "Yourself",
    questionId: "099099",
  },
  {
    question: "Any touch that makes you feel ____________ is unacceptable?",
    answers: ["Secure", "Loved", "Uncomfortable"],
    correct: "Uncomfortable",
    questionId: "093909",
  },
  {
    question:
      "What must you do if you are not comfortable with people touching you?",
    answers: ["Cry", "Don't say anything", "Say NO!", "Smile"],
    correct: "Say NO!",
    questionId: "009039",
  },
  {
    question: "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "090089",
  },
  {
    question: "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "01010101",
  },
  {
    question: "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "092299",
  },
  {
    question: "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "099099",
  },
  {
    question: "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "222099",
  },
  {
    question: "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "2222099",
  },
];

// n = 5 to export 5 question
export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
