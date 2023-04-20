// // // // les differents selecteur
// // // document.querySelector("h4").style.background = "blue";

// // const question = document.querySelector("h4");
// // console.log(question);

// click event

// const questionContainer = document.querySelector(".click-event");

// questionContainer.addEventListener("click" ,()=>{
//     console.log("click !")
// })
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn1");
const btn2 = document.getElementById("btn2");
const response = document.querySelector('.sentence')
// questionContainer.addEventListener('click' , () => {
//      questionContainer.classList.add("Question-clicked"); 
// });

questionContainer.addEventListener('click' ,() => {
    questionContainer.classList.toggle("go-question");
});

btn1.addEventListener("click",()=>{
    response.style.visibility = "visible";
    response.style.background= "green";
})
btn2.addEventListener("click",()=>{
    response.style.visibility = "visible" ;
    response.style.background = "red" ;
})

