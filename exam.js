

let btnmark = document.getElementById("nav-btn-mark")
let markside = document.getElementById("mark-side")
let mainMark = document.getElementById("mark")
let nextBtn = document.getElementById("nextbtn")
let prevBtn = document.getElementById("prevbtn")
let questionExam = document.getElementById("questionExam")
let currentNumber = document.getElementById("currentnumber")
let allNumber = document.getElementById("allnumber")
// let timer = document.getElementById("timer").textContent

btnmark.addEventListener("click", function () {
   markside.classList.toggle("hidden")

})

let arrOfQuestion = []
let currentQuestionIndex = 0


function selectedQuestionUI(currentQuestion) {

   let box = ``;
   box = ` <p>${currentQuestion.question}</p>`

   for (let j = 0; j < currentQuestion.choices.length; j++) {
      box += `
                <div class="answer-container">
                    <label>
                        <input type="radio" name="question${currentQuestionIndex}" class="choice">
                        ${currentQuestion.choices[j]}
                    </label>
                </div>
      
     `

   }
   questionExam.innerHTML = box
}
async function getQuestion() {

   let data = await fetch("question.json")
   let result = await data.json()
   arrOfQuestion.push(...result.questions)
   // currentQuestion = arrOfQuestion[0]
   selectedQuestionUI(arrOfQuestion[currentQuestionIndex])
   allNumber.innerHTML = arrOfQuestion.length
   currentNumber.innerHTML = currentQuestionIndex + 1

   if (currentQuestionIndex === 0) {
      prevBtn.classList.add("hid")
   }

}

getQuestion()

let i = 1
nextBtn.addEventListener("click", function () {
   if (currentQuestionIndex < arrOfQuestion.length - 1) {
      currentQuestionIndex++ //arrOfQuestion[Math.floor(Math.random() * 10)]
      selectedQuestionUI(arrOfQuestion[currentQuestionIndex])
   }
   currentNumber.innerHTML = currentQuestionIndex + 1

   prevBtn.classList.remove("hid")


})

// console.log(currentQuestion)
// console.log(arrOfQuestion)

prevBtn.addEventListener("click", function () {

   if (currentQuestionIndex > 0) {
      currentQuestionIndex--
      selectedQuestionUI(arrOfQuestion[currentQuestionIndex])
      currentNumber.innerHTML = currentQuestionIndex + 1
   }
   if (currentQuestionIndex === 0) {
      prevBtn.classList.add("hid")
   }
})

console.log(currentQuestionIndex)

let markedQuestions = []

mainMark.addEventListener("click", function () {
   if (!markedQuestions.includes(currentQuestionIndex)) {
      markedQuestions.push(currentQuestionIndex)
      updateMarkSide()
   }

})



function updateMarkSide() {
   markside.innerHTML = ""
   for (let i = 0; i < markedQuestions.length; i++) {
      let box = ``
      box = ` <div class="mark-container">
            <h3>Question${markedQuestions[i] + 1} </h3>
            <i class="fa-regular fa-circle-xmark exitIcon"></i>
            </div>`


      markside.innerHTML += box
   }

   let exitIcon = document.getElementsByClassName("exitIcon")
   for (let i = 0; i < exitIcon.length; i++) {
      exitIcon[i].addEventListener("click", function () {
          markedQuestions.splice(i, 1)
       
          updateMarkSide()
      })

   }
}



let timerElement = document.getElementById("timer");

for (let i = 60; i >= 0; i--) {
    setTimeout(function () {
        timerElement.textContent = `0:${i}`;
        console.log(`0:${i}`);
    }, (60 - i) * 1000);
}



setTimeout(function () {
   window.location.href = "timeout.html";
}, 60000)
