// ======================================================
// QUIZ APP - VANILLA JAVASCRIPT (FULL UPGRADED VERSION)
// ======================================================


// ======================================================
// 1. GET ELEMENTS FROM HTML
// (We connect JS to HTML so we can control the page)
// ======================================================

// Screens (we switch between them)
const startScreen = document.getElementById("start-screen");
const questionScreen = document.getElementById("question-screen");
const resultScreen = document.getElementById("result-screen");

// Buttons
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");

// Question display
const questionText = document.getElementById("question-text");

// Answer buttons inside fieldset
const answerButtons = document.querySelectorAll("fieldset button");

// Info displays
const scoreElement = document.getElementById("score");
const questionCounter = document.getElementById("question-counter");
const timerElement = document.getElementById("timer");

// Results
const finalScore = document.getElementById("final-score");
const percentage = document.getElementById("percentage");
const breakdown = document.getElementById("breakdown");
const messageElement = document.getElementById("message");
const highScoreElement = document.getElementById("high-score");

// Progress bar
const progressBar = document.getElementById("progress-bar");

// Select dropdowns
const topicSelect = document.getElementById("topic");
const difficultySelect = document.getElementById("difficulty");


// ======================================================
// 2. QUESTION DATABASE (TOPIC + DIFFICULTY SYSTEM)
// ======================================================

const questionBank = {

   html: {
      easy: [
         { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks Text Mark Language", "Hyper Tool Multi Language"], correctIndex: 0 },
         { question: "Which tag is used for paragraph?", options: ["<p>", "<div>", "<h1>", "<span>"], correctIndex: 0 },
         { question: "Which tag is for heading?", options: ["<h1>", "<p>", "<div>", "<span>"], correctIndex: 0 },
         { question: "Which tag is used for image?", options: ["<img>", "<image>", "<src>", "<pic>"], correctIndex: 0 },
         { question: "Which tag is used for link?", options: ["<a>", "<link>", "<href>", "<url>"], correctIndex: 0 },
         { question: "HTML is used for?", options: ["Structure", "Styling", "Logic", "Database"], correctIndex: 0 },
         { question: "Which tag breaks line?", options: ["<br>", "<lb>", "<break>", "<line>"], correctIndex: 0 },
         { question: "Which tag creates list?", options: ["<ul>", "<list>", "<lii>", "<olx>"], correctIndex: 0 },
         { question: "Which tag is root element?", options: ["<html>", "<body>", "<head>", "<main>"], correctIndex: 0 },
         { question: "Which tag contains page title?", options: ["<title>", "<head>", "<meta>", "<header>"], correctIndex: 0 },
         { question: "Which tag shows bold text?", options: ["<b>", "<bold>", "<stronger>", "<em>"], correctIndex: 0 },
         { question: "Which tag shows italic text?", options: ["<i>", "<it>", "<italic>", "<emphasis>"], correctIndex: 0 },
         { question: "Which tag creates button?", options: ["<button>", "<btn>", "<click>", "<input>"], correctIndex: 0 },
         { question: "Which tag creates form?", options: ["<form>", "<input>", "<fieldset>", "<label>"], correctIndex: 0 },
         { question: "Which tag is semantic?", options: ["<section>", "<div>", "<span>", "<b>"], correctIndex: 0 },
         { question: "Which tag is for input?", options: ["<input>", "<form>", "<data>", "<text>"], correctIndex: 0 },
         { question: "Which tag defines body?", options: ["<body>", "<html>", "<head>", "<main>"], correctIndex: 0 },
         { question: "Which tag holds metadata?", options: ["<meta>", "<info>", "<data>", "<head>"], correctIndex: 0 },
         { question: "Which tag is container?", options: ["<div>", "<p>", "<span>", "<text>"], correctIndex: 0 },
         { question: "Which tag is used for table?", options: ["<table>", "<grid>", "<tab>", "<tr>"], correctIndex: 0 }
      ],

      medium: [
         { question: "Which attribute adds image source?", options: ["src", "href", "link", "path"], correctIndex: 0 },
         { question: "Which tag is used for list item?", options: ["<li>", "<ul>", "<ol>", "<list>"], correctIndex: 0 },
         { question: "Which tag is for navigation?", options: ["<nav>", "<section>", "<div>", "<menu>"], correctIndex: 0 },
         { question: "Which tag is semantic section?", options: ["<section>", "<div>", "<span>", "<b>"], correctIndex: 0 },
         { question: "Which tag groups content?", options: ["<div>", "<p>", "<h1>", "<img>"], correctIndex: 0 },
         { question: "Which tag defines header?", options: ["<header>", "<head>", "<top>", "<section>"], correctIndex: 0 },
         { question: "Which tag defines footer?", options: ["<footer>", "<bottom>", "<end>", "<section>"], correctIndex: 0 },
         { question: "Which tag is for form input?", options: ["<input>", "<form>", "<label>", "<fieldset>"], correctIndex: 0 },
         { question: "Which tag is label?", options: ["<label>", "<text>", "<span>", "<input>"], correctIndex: 0 },
         { question: "Which attribute makes input required?", options: ["required", "must", "need", "fill"], correctIndex: 0 },
         { question: "Which tag is used for video?", options: ["<video>", "<media>", "<movie>", "<clip>"], correctIndex: 0 },
         { question: "Which tag is used for audio?", options: ["<audio>", "<sound>", "<music>", "<mp3>"], correctIndex: 0 },
         { question: "Which tag creates table row?", options: ["<tr>", "<td>", "<table>", "<row>"], correctIndex: 0 },
         { question: "Which tag creates table cell?", options: ["<td>", "<tr>", "<table>", "<cell>"], correctIndex: 0 },
         { question: "Which tag creates table header?", options: ["<th>", "<td>", "<tr>", "<head>"], correctIndex: 0 },
         { question: "Which tag defines article?", options: ["<article>", "<div>", "<section>", "<text>"], correctIndex: 0 },
         { question: "Which tag defines main content?", options: ["<main>", "<body>", "<content>", "<section>"], correctIndex: 0 },
         { question: "Which tag is for figure?", options: ["<figure>", "<img>", "<pic>", "<media>"], correctIndex: 0 },
         { question: "Which tag describes caption?", options: ["<figcaption>", "<caption>", "<text>", "<label>"], correctIndex: 0 },
         { question: "Which tag is for emphasis?", options: ["<em>", "<b>", "<i>", "<strong>"], correctIndex: 0 }
      ],

      hard: [
         { question: "Which attribute opens link in new tab?", options: ["target='_blank'", "new='tab'", "open='new'", "blank='true'"], correctIndex: 0 },
         { question: "Which input type is email?", options: ["email", "text", "mail", "input"], correctIndex: 0 },
         { question: "Which attribute improves accessibility?", options: ["aria-label", "title", "alt", "name"], correctIndex: 0 },
         { question: "Which tag is best for SEO structure?", options: ["semantic tags", "div", "span", "b"], correctIndex: 0 },
         { question: "Which attribute describes image?", options: ["alt", "src", "title", "name"], correctIndex: 0 },
         { question: "Which tag is best for layout?", options: ["section", "div", "span", "p"], correctIndex: 0 },
         { question: "Which tag is used for scripting?", options: ["script", "js", "code", "style"], correctIndex: 0 },
         { question: "Which tag defines document type?", options: ["<!DOCTYPE html>", "<doctype>", "<html>", "<meta>"], correctIndex: 0 },
         { question: "Which tag is for external CSS?", options: ["<link>", "<style>", "<css>", "<script>"], correctIndex: 0 },
         { question: "Which attribute links CSS?", options: ["href", "src", "link", "style"], correctIndex: 0 },
         { question: "Which tag improves SEO?", options: ["<meta>", "<div>", "<span>", "<b>"], correctIndex: 0 },
         { question: "Which tag defines viewport?", options: ["meta viewport", "div", "section", "body"], correctIndex: 0 },
         { question: "Which tag is for iframe?", options: ["<iframe>", "<frame>", "<embed>", "<video>"], correctIndex: 0 },
         { question: "Which tag is for embedding page?", options: ["<iframe>", "<embed>", "<object>", "<link>"], correctIndex: 0 },
         { question: "Which tag defines script source?", options: ["src", "href", "link", "path"], correctIndex: 0 },
         { question: "Which tag improves structure?", options: ["semantic tags", "div", "span", "b"], correctIndex: 0 },
         { question: "Which tag is block element?", options: ["div", "span", "a", "img"], correctIndex: 0 },
         { question: "Which tag is inline element?", options: ["span", "div", "section", "article"], correctIndex: 0 },
         { question: "Which tag wraps content?", options: ["div", "html", "body", "head"], correctIndex: 0 },
         { question: "Which tag is best practice?", options: ["semantic HTML", "div only", "table layout", "inline CSS"], correctIndex: 0 }
      ]
   },

   css: {
      easy: [
         { question: "CSS stands for?", options: ["Cascading Style Sheets", "Computer Style System", "Creative Sheet", "Color Style System"], correctIndex: 0 },
         { question: "CSS is used for?", options: ["Styling", "Structure", "Logic", "Database"], correctIndex: 0 },
         { question: "Change text color?", options: ["color", "font", "text", "style"], correctIndex: 0 },
         { question: "Background color property?", options: ["background-color", "bg", "color", "image"], correctIndex: 0 },
         { question: "CSS file extension?", options: [".css", ".html", ".js", ".style"], correctIndex: 0 },
         { question: "Select class?", options: [".class", "#class", "class()", "@class"], correctIndex: 0 },
         { question: "Select id?", options: ["#id", ".id", "id()", "@id"], correctIndex: 0 },
         { question: "Font size property?", options: ["font-size", "text-size", "size", "font"], correctIndex: 0 },
         { question: "Bold text?", options: ["font-weight", "bold", "text-style", "weight"], correctIndex: 0 },
         { question: "Underline text?", options: ["text-decoration", "underline", "style", "line"], correctIndex: 0 },
         { question: "Center text?", options: ["text-align:center", "align:center", "center-text", "middle"], correctIndex: 0 },
         { question: "CSS syntax uses?", options: ["{ }", "( )", "[ ]", "< >"], correctIndex: 0 },
         { question: "Add border?", options: ["border", "outline", "stroke", "line"], correctIndex: 0 },
         { question: "Round corners?", options: ["border-radius", "radius", "round", "corner"], correctIndex: 0 },
         { question: "Spacing inside?", options: ["padding", "margin", "gap", "space"], correctIndex: 0 },
         { question: "Spacing outside?", options: ["margin", "padding", "border", "gap"], correctIndex: 0 },
         { question: "Hide element?", options: ["display:none", "hide", "remove", "off"], correctIndex: 0 },
         { question: "Flexbox property?", options: ["display:flex", "flex:on", "layout:flex", "box:flex"], correctIndex: 0 },
         { question: "Grid property?", options: ["display:grid", "grid:on", "layout:grid", "box:grid"], correctIndex: 0 },
         { question: "Responsive unit?", options: ["%", "px", "cm", "pt"], correctIndex: 0 }
      ],

      medium: [
         { question: "Which layout uses rows and columns?", options: ["grid", "flex", "block", "inline"], correctIndex: 0 },
         { question: "Which layout is one-dimensional?", options: ["flexbox", "grid", "table", "block"], correctIndex: 0 },
         { question: "Align items horizontally in flex?", options: ["justify-content", "align-items", "text-align", "position"], correctIndex: 0 },
         { question: "Align items vertically in flex?", options: ["align-items", "justify-content", "float", "display"], correctIndex: 0 },
         { question: "Space inside element?", options: ["padding", "margin", "border", "gap"], correctIndex: 0 },
         { question: "Space outside element?", options: ["margin", "padding", "border", "outline"], correctIndex: 0 },
         { question: "Make element invisible but keep space?", options: ["visibility:hidden", "display:none", "opacity:0", "remove"], correctIndex: 0 },
         { question: "Remove element from layout?", options: ["display:none", "visibility:hidden", "opacity:0", "hidden"], correctIndex: 0 },
         { question: "Which property adds shadow?", options: ["box-shadow", "shadow", "filter-shadow", "border-shadow"], correctIndex: 0 },
         { question: "Which property controls font thickness?", options: ["font-weight", "font-size", "font-style", "text-weight"], correctIndex: 0 },
         { question: "Which unit is relative to parent?", options: ["em", "px", "cm", "pt"], correctIndex: 0 },
         { question: "Which unit is root-based?", options: ["rem", "em", "px", "%"], correctIndex: 0 },
         { question: "Which property rounds corners?", options: ["border-radius", "corner", "round", "shape"], correctIndex: 0 },
         { question: "Which property controls overflow?", options: ["overflow", "clip", "hide", "cut"], correctIndex: 0 },
         { question: "Which property positions element?", options: ["position", "align", "place", "layout"], correctIndex: 0 },
         { question: "Which value is default position?", options: ["static", "relative", "absolute", "fixed"], correctIndex: 0 },
         { question: "Which value sticks on scroll?", options: ["sticky", "fixed", "absolute", "relative"], correctIndex: 0 },
         { question: "Which CSS feature is responsive?", options: ["media queries", "grid", "flex", "animation"], correctIndex: 0 },
         { question: "Which rule targets screen size?", options: ["@media", "@screen", "@device", "@query"], correctIndex: 0 },
         { question: "Which property smooths transition?", options: ["transition", "animation", "smooth", "ease"], correctIndex: 0 }
      ],
      hard: [
         { question: "Which property controls stacking order?", options: ["z-index", "stack", "order", "layer"], correctIndex: 0 },
         { question: "Which layout is 2D system?", options: ["grid", "flex", "block", "inline"], correctIndex: 0 },
         { question: "Which property defines grid columns?", options: ["grid-template-columns", "grid-columns", "columns", "layout"], correctIndex: 0 },
         { question: "Which property defines grid rows?", options: ["grid-template-rows", "grid-rows", "rows", "layout-rows"], correctIndex: 0 },
         { question: "Which property controls animation time?", options: ["animation-duration", "time", "speed", "delay"], correctIndex: 0 },
         { question: "Which property delays animation?", options: ["animation-delay", "delay", "pause", "wait"], correctIndex: 0 },
         { question: "Which property defines keyframes?", options: ["@keyframes", "@animation", "@frames", "@motion"], correctIndex: 0 },
         { question: "Which property improves performance?", options: ["transform", "position", "float", "display"], correctIndex: 0 },
         { question: "Which value removes element flow?", options: ["absolute", "relative", "static", "sticky"], correctIndex: 0 },
         { question: "Which value pins element to viewport?", options: ["fixed", "absolute", "relative", "static"], correctIndex: 0 },
         { question: "Which property hides overflow content?", options: ["overflow:hidden", "clip", "cut", "hide"], correctIndex: 0 },
         { question: "Which property adds blur effect?", options: ["filter: blur()", "shadow", "opacity", "effect"], correctIndex: 0 },
         { question: "Which property improves GPU rendering?", options: ["transform", "margin", "padding", "border"], correctIndex: 0 },
         { question: "Which feature supports dark mode?", options: ["prefers-color-scheme", "media-dark", "theme", "mode"], correctIndex: 0 },
         { question: "Which unit is viewport width?", options: ["vw", "vh", "px", "%"], correctIndex: 0 },
         { question: "Which unit is viewport height?", options: ["vh", "vw", "em", "rem"], correctIndex: 0 },
         { question: "Which property controls transparency?", options: ["opacity", "visibility", "display", "alpha"], correctIndex: 0 },
         { question: "Which property improves layout performance?", options: ["contain", "float", "position", "margin"], correctIndex: 0 },
         { question: "Which property enables smooth scroll?", options: ["scroll-behavior", "smooth", "transition", "motion"], correctIndex: 0 },
         { question: "Which CSS technique avoids layout shift?", options: ["aspect-ratio", "float", "inline", "block"], correctIndex: 0 }
      ],
   },

   js: {
      easy: [
         { question: "JS is used for?", options: ["Logic", "Styling", "Structure", "Database"], correctIndex: 0 },
         { question: "Variable keyword?", options: ["let", "int", "string", "define"], correctIndex: 0 },
         { question: "Constant keyword?", options: ["const", "let", "var", "fixed"], correctIndex: 0 },
         { question: "Output function?", options: ["console.log()", "print()", "echo()", "show()"], correctIndex: 0 },
         { question: "Array symbol?", options: ["[]", "{}", "()", "<>"], correctIndex: 0 },
         { question: "Object symbol?", options: ["{}", "[]", "()", "<>"], correctIndex: 0 },
         { question: "Add operator?", options: ["+", "-", "*", "/"], correctIndex: 0 },
         { question: "Condition keyword?", options: ["if", "for", "loop", "switch"], correctIndex: 0 },
         { question: "Loop array method?", options: ["forEach()", "loop()", "run()", "repeat()"], correctIndex: 0 },
         { question: "Delay function?", options: ["setTimeout", "delay()", "wait()", "pause()"], correctIndex: 0 },
         { question: "Repeat function?", options: ["setInterval", "repeat()", "loop()", "cycle()"], correctIndex: 0 },
         { question: "Boolean values?", options: ["true/false", "yes/no", "1/0", "on/off"], correctIndex: 0 },
         { question: "Equality operator?", options: ["===", "==", "=", "!="], correctIndex: 0 },
         { question: "Stop loop?", options: ["break", "stop", "exit", "end"], correctIndex: 0 },
         { question: "Skip loop?", options: ["continue", "skip", "next", "pass"], correctIndex: 0 },
         { question: "Function keyword?", options: ["function", "func", "def", "method"], correctIndex: 0 },
         { question: "JSON parse?", options: ["JSON.parse()", "JSON.convert()", "JSON.read()", "JSON.get()"], correctIndex: 0 },
         { question: "Async keyword?", options: ["async", "sync", "wait", "promise"], correctIndex: 0 },
         { question: "Await used for?", options: ["async result", "loop", "style", "html"], correctIndex: 0 },
         { question: "Event listener?", options: ["addEventListener", "onClick", "listen()", "event()"], correctIndex: 0 }
      ],

      medium: [
         { question: "Which method adds item to array?", options: ["push()", "pop()", "shift()", "slice()"], correctIndex: 0 },
         { question: "Which method removes last item?", options: ["pop()", "push()", "add()", "delete()"], correctIndex: 0 },
         { question: "Which loops through array?", options: ["forEach()", "loop()", "repeat()", "cycle()"], correctIndex: 0 },
         { question: "Which method creates new array?", options: ["map()", "forEach()", "loop()", "run()"], correctIndex: 0 },
         { question: "Which filters array?", options: ["filter()", "find()", "map()", "sort()"], correctIndex: 0 },
         { question: "Which finds single element?", options: ["find()", "filter()", "map()", "reduce()"], correctIndex: 0 },
         { question: "Which converts JSON string?", options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.read()"], correctIndex: 0 },
         { question: "Which converts object to string?", options: ["JSON.stringify()", "JSON.parse()", "JSON.toString()", "JSON.encode()"], correctIndex: 0 },
         { question: "Which keyword stops loop?", options: ["break", "stop", "exit", "end"], correctIndex: 0 },
         { question: "Which keyword skips iteration?", options: ["continue", "skip", "next", "pass"], correctIndex: 0 },
         { question: "Which checks strict equality?", options: ["===", "==", "=", "!="], correctIndex: 0 },
         { question: "Which operator assigns value?", options: ["=", "==", "===", "=>"], correctIndex: 0 },
         { question: "Which creates function?", options: ["function", "func", "def", "method"], correctIndex: 0 },
         { question: "Which is arrow function symbol?", options: ["=>", "->", "::", "==>"], correctIndex: 0 },
         { question: "Which waits async result?", options: ["await", "wait", "pause", "delay"], correctIndex: 0 },
         { question: "Which declares async function?", options: ["async", "sync", "await", "promise"], correctIndex: 0 },
         { question: "Which handles error?", options: ["try...catch", "if...else", "loop", "switch"], correctIndex: 0 },
         { question: "Which returns promise success?", options: ["resolve", "reject", "return", "done"], correctIndex: 0 },
         { question: "Which returns failure?", options: ["reject", "resolve", "fail", "error"], correctIndex: 0 },
         { question: "Which listens for events?", options: ["addEventListener", "onClick", "listen()", "event()"], correctIndex: 0 }
      ],

      hard: [
         { question: "Which is JavaScript runtime?", options: ["Node.js", "Python", "Java", "PHP"], correctIndex: 0 },
         { question: "Which is async keyword?", options: ["async", "sync", "await", "promise"], correctIndex: 0 },
         { question: "Which keyword waits async?", options: ["await", "wait", "delay", "pause"], correctIndex: 0 },
         { question: "Which is promise state success?", options: ["fulfilled", "rejected", "pending", "error"], correctIndex: 0 },
         { question: "Which is promise state failure?", options: ["rejected", "fulfilled", "pending", "done"], correctIndex: 0 },
         { question: "Which improves performance async?", options: ["event loop", "loop", "thread", "stack"], correctIndex: 0 },
         { question: "Which is JavaScript engine?", options: ["V8", "Chrome", "Firefox", "Edge"], correctIndex: 0 },
         { question: "Which stores multiple values?", options: ["array", "object", "string", "number"], correctIndex: 0 },
         { question: "Which stores key-value pairs?", options: ["object", "array", "list", "map"], correctIndex: 0 },
         { question: "Which method reduces array?", options: ["reduce()", "map()", "filter()", "find()"], correctIndex: 0 },
         { question: "Which pattern handles async code?", options: ["promise", "loop", "class", "object"], correctIndex: 0 },
         { question: "Which improves modular code?", options: ["modules", "functions", "loops", "variables"], correctIndex: 0 },
         { question: "Which keyword defines class?", options: ["class", "object", "function", "module"], correctIndex: 0 },
         { question: "Which creates instance?", options: ["new", "make", "create", "build"], correctIndex: 0 },
         { question: "Which is DOM selector?", options: ["getElementById", "find()", "select()", "query()"], correctIndex: 0 },
         { question: "Which updates DOM?", options: ["innerHTML", "update()", "change()", "render()"], correctIndex: 0 },
         { question: "Which event runs on click?", options: ["click", "hover", "scroll", "load"], correctIndex: 0 },
         { question: "Which runs after page loads?", options: ["DOMContentLoaded", "onClick", "start", "init"], correctIndex: 0 },
         { question: "Which avoids callback hell?", options: ["promise", "loop", "if", "switch"], correctIndex: 0 },
         { question: "Which modern async pattern?", options: ["async/await", "callback", "loop", "timeout"], correctIndex: 0 }
      ],
   }
};


// ======================================================
// 3. STATE VARIABLES (GAME DATA THAT CHANGES)
// ======================================================

let questions = [];            // current quiz questions
let currentQuestionIndex = 0;  // which question user is on
let score = 0;                 // user score
let answers = [];              // store user answers
let timerInterval;             // timer control
let timeLeft = 10;             // countdown time
let shuffledOptions = [];      // shuffled answers


// ======================================================
// 4. SHUFFLE FUNCTION (RANDOM ORDER)
// ======================================================

function shuffleArray(array) {
   return array.sort(() => Math.random() - 0.5);
}


// ======================================================
// 5. START QUIZ
// ======================================================

startBtn.addEventListener("click", () => {

   // get selected topic and difficulty
   const topic = topicSelect.value;
   const difficulty = difficultySelect.value;

   // load questions based on selection
   questions = shuffleArray([...questionBank[topic][difficulty]]);

   // reset game state
   currentQuestionIndex = 0;
   score = 0;
   answers = [];

   // reset UI
   scoreElement.textContent = "Score: 0";
   progressBar.style.width = "0%";

   // switch screens
   startScreen.classList.add("hidden");
   resultScreen.classList.add("hidden");
   questionScreen.classList.remove("hidden");

   showQuestion();
});


// ======================================================
// 6. SHOW QUESTION
// ======================================================

function showQuestion() {

   const currentQuestion = questions[currentQuestionIndex];

   // prepare answers (we attach original index for checking later)
   shuffledOptions = currentQuestion.options.map((opt, i) => ({
      text: opt,
      index: i
   }));

   // shuffle answers so order changes every time
   shuffledOptions = shuffleArray(shuffledOptions);

   // show question text
   questionText.textContent = currentQuestion.question;

   // show answer buttons
   answerButtons.forEach((btn, i) => {
      btn.textContent = shuffledOptions[i].text;
      btn.disabled = false;
      btn.classList.remove("correct", "incorrect");
   });

   // update question counter
   questionCounter.textContent =
      `Question ${currentQuestionIndex + 1} of ${questions.length}`;

   updateProgressBar();
   startTimer();
}


// ======================================================
// 7. TIMER SYSTEM (DIFFICULTY BASED)
// ======================================================

function startTimer() {

   clearInterval(timerInterval);

   const difficulty = difficultySelect.value;

   // difficulty controls time
   if (difficulty === "easy") timeLeft = 15;
   if (difficulty === "medium") timeLeft = 10;
   if (difficulty === "hard") timeLeft = 5;

   timerElement.textContent = timeLeft;

   timerInterval = setInterval(() => {

      timeLeft--;
      timerElement.textContent = timeLeft;

      // warning color when time is low
      if (timeLeft <= 5) {
         timerElement.classList.add("timer-warning");
      }

      // time out
      if (timeLeft === 0) {
         clearInterval(timerInterval);
         handleTimeOut();
      }

   }, 1000);
}


// ======================================================
// 8. TIMEOUT (NO ANSWER GIVEN)
// ======================================================

function handleTimeOut() {

   answers.push({
      question: questions[currentQuestionIndex].question,
      isCorrect: false
   });

   nextQuestion();
}


// ======================================================
// 9. CLICK ANSWER
// ======================================================

answerButtons.forEach((btn, i) => {

   btn.addEventListener("click", () => {
      checkAnswer(shuffledOptions[i].index);
   });

});


// ======================================================
// 10. CHECK ANSWER
// ======================================================

function checkAnswer(selectedIndex) {

   clearInterval(timerInterval);

   const currentQuestion = questions[currentQuestionIndex];

   const isCorrect = selectedIndex === currentQuestion.correctIndex;

   // store answer
   answers.push({
      question: currentQuestion.question,
      isCorrect: isCorrect
   });

   // increase score
   if (isCorrect) {
      score++;
      scoreElement.textContent = `Score: ${score}`;
   }

   // show correct/incorrect UI
   answerButtons.forEach((btn, i) => {

      btn.disabled = true;

      const realIndex = shuffledOptions[i].index;

      if (realIndex === currentQuestion.correctIndex) {
         btn.classList.add("correct");
         btn.textContent += " ✔";
      }

      if (realIndex === selectedIndex && !isCorrect) {
         btn.classList.add("incorrect");
         btn.textContent += " ✖";
      }
   });

   setTimeout(nextQuestion, 1000);
}


// ======================================================
// 11. NEXT QUESTION
// ======================================================

function nextQuestion() {

   currentQuestionIndex++;

   if (currentQuestionIndex < questions.length) {
      showQuestion();
   } else {
      showResults();
   }
}


// ======================================================
// 12. PROGRESS BAR
// ======================================================

function updateProgressBar() {
   const progress = (currentQuestionIndex / questions.length) * 100;
   progressBar.style.width = `${progress}%`;
}


// ======================================================
// 13. SHOW RESULTS
// ======================================================

function showResults() {

   progressBar.style.width = "100%";

   questionScreen.classList.add("hidden");
   resultScreen.classList.remove("hidden");

   const percent = Math.round((score / questions.length) * 100);

   finalScore.textContent = `${score}/${questions.length}`;
   percentage.textContent = `${percent}%`;

   // message based on performance
   let message =
      percent >= 80 ? "Excellent!" :
         percent >= 50 ? "Good job!" :
            "Keep practicing!";

   messageElement.textContent = message;

   // high score
   let highScore = localStorage.getItem("highScore") || 0;

   if (score > highScore) {
      localStorage.setItem("highScore", score);
      highScore = score;
   }

   highScoreElement.textContent = `High Score: ${highScore}`;

   // breakdown
   breakdown.innerHTML = "";

   answers.forEach((ans, i) => {
      const li = document.createElement("li");
      li.textContent = `${i + 1}. ${ans.question} - ${ans.isCorrect ? "✔ Correct" : "✖ Wrong"}`;
      breakdown.appendChild(li);
   });
}


// ======================================================
// 14. RESTART QUIZ
// ======================================================

restartBtn.addEventListener("click", () => {

   currentQuestionIndex = 0;
   score = 0;
   answers = [];

   resultScreen.classList.add("hidden");
   startScreen.classList.remove("hidden");
});