//? Step 1: Define Quiz Data 

const quizData = [
  {
    question: "What does HTML stand for ?",
    options: [
      "Hypertext Markup Language",
      "Hyper Transfer Markup Language",
      "Hypertext Machine Markup Language",
      "Hyper Link  Markup Language",
    ],
    correct: 0,
  },
  {
    question: "Which of the following is a front-end technology?",
    options: [
      " Node.js",
      "Django",
      "Angular",
      "MongoDB",
    ],
    correct: 2,
  },
  {
    question: "Which of the following is a full-stack framework for developing web applications?",
    options: [
      " React",
      "Ruby on Rails",
      "Flask",
      "Vue.js",
    ],
    correct: 1,
  },
  {
    question: "Which of the following is a popular CSS framework?",
    options: [
      "Express.js",
      "Bootstrap",
      "Django",
      "Laravel",
    ],
    correct: 1,
  },
  {
    question: " In a typical MERN stack, which database is used?",
    options: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "SQLite",
    ],
    correct: 2,
  },
];
//? Step 2: JavaScript Initilization
const quiz = document.querySelector(`#quiz`);

const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] = document.querySelectorAll("#question, .option_1, .option_2, .option_3, .option_4");
const submitBtn = document.querySelector("#submit");
let currentQuiz = 0;
let score = 0;

//? Step 3: Load Quiz Function
const loadQuiz = () =>{
  const {question, options} = quizData[currentQuiz];
  console.log(options);
  questionElm.innerText= `${currentQuiz + 1} ${question}`;
  // options.forEach((curOption, index)=>(option_1.innerText= curOption))
  options.forEach((curOption, index )=> (window[`option_${index + 1}`].innerText = curOption));
};
loadQuiz();

//? Step 4: Get Selected Answer Function on Button click

const getSelectedOption = ()=>{
  // let ans_index;
  // answerElm.forEach((curOption, index)=>{
  //   if(curOption.checked){
  //        ans_index =index;
  //   }
  // });
  // return ans_index;
  let ansElement = Array.from(answerElm) ;
  return ansElement.findIndex((curElem) => curElem.checked);
};

// deselected Answer 
const deselectedAnswer = () => {
 return answerElm.forEach((curElem)=> curElem.checked = false);
}

submitBtn.addEventListener('click', ()=>{
  const SelectedOptionIndex = getSelectedOption();
  console.log(SelectedOptionIndex);

  if(SelectedOptionIndex == quizData[currentQuiz].correct){
    score = score +1;
  }

   currentQuiz++;
  
  if(currentQuiz < quizData.length){
    deselectedAnswer();
    loadQuiz();
  } else {
    quizData.innerHTML = `
    <div class = "result">
      <h2> Your score: ${score}/${quizData.length} Correct Answer</h2>
      <p>Congratulations on completing the quiz! </p>
      <button class = "reload-button" onclick= "location.reload()">Play Again</button>
    </div>
    `;
  }
});