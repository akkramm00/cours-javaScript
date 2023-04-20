// // // // les differents selecteur
// document.querySelector("h4").style.background = "blue";
//on peut tout faire depuis le javascript, genre injecter du style sur tout les élément HTML;
// ,mais ce n'est trés pratique!, ce qui serait pratique c'est de cloisoner tout dans un variable.
// il faut donc déclarer la "variable" , comme ce qui suit :
// DECLARER LA VARIABLE/// const question = document.querySelector("h4");

//PUIS APEES ON PEUT JUSTE L'APPELER // console.log(question);

// click event : 
//POUR APPELER LA CLASSE "click-event" depuis le body: on la déclare dans une constante:

// const questionContainer = document.querySelector(".click-event");
 //console.log(questionContainer);( il faut toujour loguer les constantes pour etre sur que c'est bien déclarer.)
 const questionContainer = document.querySelector(".click-event");

// questionContainer.addEventListener("click" ,()=>{
//     console.log("click !")
// })
/* ---ce bout de code dessus veut dire :ajouter un événement a la constate "questionContainer" ,event est "click" ; ()=> est une fonction fléchée.*/
// IMPORTANT / A chaque fois qu'on ajoute un "eventListener" il faut la log de suite pour etre sur que ca fonctionne.
// EXAMPLE : on peut ajouter du style a la constante au click:
// questionContainer.addEventListener('click' , () => {
//      questionContainer.style.background = "red"; 
//      questionContainer.style.border = "3px solid teal";
// });

// il est préférable de déclarer les variables en h ut du ficher JS.
const btn1 = document.querySelector("#btn1");
const btn2 = document.getElementById("btn2");//Autre manière pour cibler les id = getElementById/ pas besoin de "#".
const response = document.querySelector('.sentence')
 /* loguer tjr pour etre sur que c'est bien fait*/
/* ---pour injecter une classe dans une constante ,on utilise la method      :classList.add("la classe créer précedement dans le CSS")*/
// questionContainer.addEventListener('click' , () => {
//   questionContainer.classList.add("Question-clicked"); 
// });

/*dans le code suivant, on va injecter la classe :go-question,et on ajoute la method "toggle" pour faire disparaitre et /ou réapparaitre  la réponse */
questionContainer.addEventListener('click' ,() => {
    questionContainer.classList.toggle("go-question");
});

btn1.addEventListener("click",()=>{
    response.classList.add("show-response");
    response.style.background= "green";
})
btn2.addEventListener("click",()=>{
    response.classList.add("show-response");
    response.style.background = "red" ;
})

