const quizDB = [
  {
    question: "Q1: What is the correct HTML element for the largest heading?",
    a: "<h1>",
    b: "<heading>",
    c: "<h6>",
    d: "<head>",
    ans: "ans1",
  },
  {
    question: "Q2: Which CSS property is used to control the spacing between individual letters?",
    a: "text-spacing",
    b: "letter-spacing",
    c: "line-height",
    d: "word-spacing",
    ans: "ans2",
  },
  {
    question: "Q3: What is the purpose of JavaScript in web development?",
    a: "To style web pages",
    b: "To make web pages interactive",
    c: "To create database queries",
    d: "To define the layout of web pages",
    ans: "ans2",
  },
  {
    question: "Q4: Which of the following is NOT a valid JavaScript data type?",
    a: "String",
    b: "Boolean",
    c: "Number",
    d: "Array",
    ans: "ans4",
  },
  {
    question: "Q5: What does CSS stand for?",
    a: "Creative Style Sheets",
    b: "Cascading Style Sheets",
    c: "Computer Style Sheets",
    d: "Colorful Style Sheets",
    ans: "ans2",
  },
  {
    question: "Q6: Which HTML tag is used to link an external JavaScript file?",
    a: "<script>",
    b: "<javascript>",
    c: "<link>",
    d: "<js>",
    ans: "ans1",
  },
  {
    question: "Q7: Which CSS property is used to change the background color of an element?",
    a: "color",
    b: "background-color",
    c: "text-color",
    d: "fill",
    ans: "ans2",
  },
  {
    question: "Q8: What is the purpose of the CSS box-sizing property?",
    a: "To control the size of the border box",
    b: "To control the size of the content box",
    c: "To control the size of the margin box",
    d: "To control the size of the padding box",
    ans: "ans1",
  },
  {
    question: "Q9: What is the correct syntax for referring to an external JavaScript file called 'script.js'?",
    a: "<script src='script.js'>",
    b: "<script href='script.js'>",
    c: "<script name='script.js'>",
    d: "<script file='script.js'>",
    ans: "ans1",
  },
  {
    question: "Q10: Which of the following is NOT a valid CSS positioning property?",
    a: "relative",
    b: "static",
    c: "fixed",
    d: "up",
    ans: "ans4",
  },
  {
    question: "Q11: What is a state in React?",
    a: "A way to handle user input",
    b: "A data structure that determines how a component behaves",
    c: "A CSS property for responsive design",
    d: "A JavaScript event listener",
    ans: "ans2",
  },
  {
    question: "Q12: Which Bootstrap class provides a responsive grid layout?",
    a: ".container",
    b: ".row",
    c: ".grid",
    d: ".flex",
    ans: "ans2",
  },
  {
    question: "Q13: How do you create a function in JavaScript?",
    a: "function = myFunction()",
    b: "function myFunction()",
    c: "myFunction function()",
    d: "create function myFunction()",
    ans: "ans2",
  },
  {
    question: "Q14: Which HTML tag is used to define an unordered list?",
    a: "<ul>",
    b: "<ol>",
    c: "<li>",
    d: "<list>",
    ans: "ans1",
  },
  {
    question: "Q15: How do you import a CSS file in a React component?",
    a: "import './style.css';",
    b: "<link rel='stylesheet' href='./style.css'>",
    c: "<style src='./style.css'>",
    d: "require('./style.css')",
    ans: "ans1",
  },
  {
    question: "Q16: What does the 'defer' attribute do in a script tag in HTML?",
    a: "Delays script execution until the page has fully loaded",
    b: "Executes the script immediately",
    c: "Prevents the script from blocking the HTML parser",
    d: "Executes the script before HTML parsing begins",
    ans: "ans1",
  },
  {
    question: "Q17: In CSS Flexbox, what does the 'align-items' property do?",
    a: "Aligns flex items along the cross axis",
    b: "Aligns flex items along the main axis",
    c: "Distributes space between flex items",
    d: "Specifies how flex items wrap",
    ans: "ans1",
  },
  {
    question: "Q18: Which JavaScript feature allows you to execute asynchronous code without blocking the main thread?",
    a: "Promises",
    b: "Callbacks",
    c: "Async/Await",
    d: "All of the above",
    ans: "ans4",
  },
  {
    question: "Q19: In React, what is the difference between 'state' and 'props'?",
    a: "State is immutable, props can change over time",
    b: "Props are immutable, state can change over time",
    c: "Both state and props can change over time",
    d: "Props are used for handling events, state manages styling",
    ans: "ans2",
  },
  {
    question: "Q20: What is the virtual DOM in React?",
    a: "An in-memory representation of the actual DOM",
    b: "A direct reference to the real DOM",
    c: "A replacement for the browser's DOM",
    d: "A new JavaScript standard for rendering HTML",
    ans: "ans1",
  },
  {
    question: "Q21: Which CSS Grid property defines the space between grid items?",
    a: "grid-gap",
    b: "grid-template",
    c: "gap",
    d: "grid-row-gap",
    ans: "ans3",
  },
  {
    question: "Q22: How can you optimize performance in a React application?",
    a: "By using the Context API",
    b: "By using useMemo and useCallback hooks",
    c: "By increasing the number of states in each component",
    d: "By avoiding JavaScript entirely",
    ans: "ans2",
  },
  {
    question: "Q23: What does the 'this' keyword refer to in JavaScript in strict mode?",
    a: "The global object",
    b: "The object where the function is invoked",
    c: "undefined",
    d: "The parent object",
    ans: "ans3",
  },
  {
    question: "Q24: What is the correct way to bind a function to a React component?",
    a: "Using the useState hook",
    b: "Using the constructor and this.functionName.bind(this)",
    c: "Using componentDidMount",
    d: "Using the useEffect hook",
    ans: "ans2",
  },
  {
    question: "Q25: In HTML5, which element is used to define a navigation section?",
    a: "<nav>",
    b: "<header>",
    c: "<section>",
    d: "<footer>",
    ans: "ans1",
  },
];

const questions = document.querySelector(".questions");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#score");

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
  const quetionList = quizDB[questionCount];
  questions.innerText = quetionList.question;
  option1.innerText = quetionList.a;
  option2.innerText = quetionList.b;
  option3.innerText = quetionList.c;
  option4.innerText = quetionList.d;
};
loadQuestion();

const getCheckedAnswer = () => {
  let answer;
  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
  });
  return answer;
};

const deSelectAll = () => {
  answers.forEach((curAnsElem) => (curAnsElem.checked = false));
};
submit.addEventListener("click", () => {
  const checkedAnswer = getCheckedAnswer();
  console.log(checkedAnswer);
  if (checkedAnswer === quizDB[questionCount].ans) {
    score++;
  }

  questionCount++;
  deSelectAll();
  if (questionCount < quizDB.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `
        <h3> You Scored ${score}/${quizDB.length}✌️</h3>
        <button class="btn" onClick="location.reload()"> Play Again </button>
      `;
    showScore.classList.remove("score_area");
  }
});
