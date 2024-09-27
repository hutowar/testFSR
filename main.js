// const question=document.querySelector('.question');
// const questionInput = document.querySelector('.question_input');
// // function Next(){

// // } функция для перехода к следующему заданию
// question.addEventListener('click', function (e){
//     let answerInputUser;
//     let answerInputRight;
//     if (e.target.classList.contains("question_img-answer")){ //при нажатии на ответ-картинку
//         document.querySelector('.choice').dataset.answer = e.target.dataset.answer;
//         document.querySelector('.choice span').textContent = e.target.title;
//     }



//     if (e.target.classList.contains("question_button")){ // при нажатии на кнопку
//         answerInputUser = questionInput.value; // получаем input
//         answerInputRight = questionInput.dataset.rightanswer; // получаем input
//         if (document.querySelector('.choice').dataset.answer == 0 && answerInputUser == answerInputRight){
//             document.querySelector('.gif-t').style.display = "block"
//             alert('Правильно!')
//             // setTimeout(Next, 10000) // переход на следующее задание через 10с 
//         }else{
//             document.querySelector('.gif-f').style.display = "block"
//             alert('НЕ ВЕРНО!')

//         }
        
//     }
//     // console.log(e);
// });

// const questionInput = document.querySelector('.question_input');

const question=document.querySelector('.question');
const questions=document.querySelectorAll('.question');
let questionCount = questions.length;
let rightAnswers = 0;
document.querySelector('.finale b').textContent = questionCount;

function randomInteger(min, max){
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function takeQuestion() {
    let arr = document.querySelectorAll('.none');
    if(!document.querySelector('.question')){
        document.querySelector('.finale').classList.remove('none2')
        return;
    }
    let rand = randomInteger(0, arr.length-1);
    console.log(rand, arr[rand]);
    arr[rand].classList.remove("none");
  }
// console.log(document.querySelectorAll('.none'))
document.querySelector('.start-btn').addEventListener('click', function(){
    document.querySelector('.start').remove();
    takeQuestion();
})

function confirm(str){
    document.querySelector('.confirm').classList.toggle('none2');
    document.querySelector('.confirm h4').textContent = str;
}

document.querySelector('.confirm-btn').addEventListener('click', (e) =>{
    document.querySelector('.confirm').classList.toggle('none2')
});



questions.forEach(questionE1 => {
    questionE1.addEventListener('click', function (e){
        let questionInput = questionE1.querySelector('.question_input');
        let answerInputUser;
        let answerInputRight;
        if (e.target.classList.contains("question_img-answer")){ //при нажатии на ответ-картинку
            questionE1.querySelector('.choice').dataset.answer = e.target.dataset.answer;
            questionE1.querySelector('.choice span').textContent = e.target.title;
        }
        if (e.target.classList.contains("question_button")){ // при нажатии на кнопку
            answerInputUser = questionInput.value; // получаем input
            answerInputRight = questionInput.dataset.rightanswer; // получаем input
            if (questionE1.querySelector('.choice').dataset.answer == 0 && answerInputUser == answerInputRight){
                questionE1.querySelector('.gif-t').style.display = "block"
                confirm('Правильно!');
                rightAnswers++;
                document.querySelector('.finale span').textContent = rightAnswers;
            }else{
                questionE1.querySelector('.gif-f').style.display = "block"
                confirm('НЕ ВЕРНО!');
                

            }
            document.querySelector('.confirm-btn').addEventListener('click', function(e) {
                questionE1.remove();
                takeQuestion();  
            })
        }
        // console.log(e);
    });
});