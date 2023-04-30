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

// il est préférable de déclarer les variables en haut du ficher JS.
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
/*-----------------------------------------------------------------------------------------------*/
// Mousemove= mouvement de la souris.
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove" , (e)=>{
    mousemove.style.left = e.pageX +"px";  
    mousemove.style.top = e.pageY +"px";   
});

// add mousedown--------------------------------------------------------------------
window.addEventListener("mousedown", () =>{ 
    mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});
// Add mouseup----------------------------------------------------------------------
window.addEventListener("mouseup", () =>{
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
    mousemove.style.border = "2px solid teal";
});
//add mouseenter--------------------------------------------------------------------
questionContainer.addEventListener("mouseenter", ()=>{
    questionContainer.style.background = "rgba(0, 0, 0, 0.6)";
});

//add mouseout----------------------------------------------------------------------
questionContainer.addEventListener("mouseout", ()=>{
    questionContainer.style.background = "black";
});

// add mouseover-------------------------------------------------------------------
response.addEventListener("mouseover", ()=>{
    response.style.transform = "rotate(2deg)";
    response.style.marginTop = "10px";
})
//----------------------------------------------------------------------------------
//add de keypress event------------------------------------------------------------
const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

//déclaration d'une variable pour faire jouer un sens...
const ring = (key) =>{
    const audio = new Audio ();
    audio.src = key + ".mp3";
    audio.play();
};

document.addEventListener("keypress",(e) => {
key.textContent = e.key;// pouvoir identifier tout les touches sur lesquelles on appuie.
//on pourrais bien écrire = "voici un texte"a la place de =e.key ,il l'affichera ...donc "e.key"affiche les lettres tapées; on peut donner du style par la suite .

if (e.key === "j"){
    keypressContainer.style.background = "pink" ;
}else if (e.key === "h"){
    keypressContainer.style.background = "teal" ;
}else if(e.key === "z"){
    keypressContainer.style.background = "green";
}else{
    keypressContainer.style.background = "blue";
}
    ring(e.key)
});

//------------------------------Scroll Event----------------------------
const nav = document.querySelector("nav");

window.addEventListener("scroll", () =>{
   console.log(window.scrollY);

   if(window.scrollY > 120){
    nav.style.top = 0;
   }else{
    nav.style.top ="-50px";
   }
})
//--------------------------------FormEvents ---------------------------------

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language="";
console.log(form)

inputName.addEventListener("input" , (e) =>{
  pseudo= e.target.value;// sur les input on utilise tjrs "e.target.value"pour recuperer les data.
  
});
 // a noter: c'est toujours le meme principe a faire pour recuper les data .
 select.addEventListener("input" , (e) =>{
    language= e.target.value;
 });
 form.addEventListener("submit",(e) =>{
    e.preventDefault();
 
    if (cgv.cheked){
        document.querySelector("form > div").innerHTML = `
        <h3>Pseudo : ${pseudo}</h3>
        <h4>Language préféré : ${language}</h4
        `;
    }else{
        alert("veuillez accepter les CGV");
    }

 })
 //----------------------Load event--------------------------------

window.addEventListener("load", () => {
    console.log("Document chargé !")
});

//comment selecctionner plusieurs element de la meme classe--------
// ForEach
const boxes = document.querySelectorAll(".box");
boxes.array.forEach((box) => {
    box.addEventListener("click" , (e) => {
    e.target.style.transform = "scale(0.7)";
    })
});
//----------------------------------------------------------------
// addEventListener vs onclick :
// document.body .onclick = () =>{
// console.log("click !")
// };

// document.body .onclick = () =>{
//     console.log("scroll !")
// };
// Bubbling => fin (de base l'enventlistener est paramétré en mode Bubbling)
document.body;addEventListener("click" , ()=> {
    console.log("click 1 !");
}, false);

document.body;addEventListener("click" , ()=> {
    console.log("click 2 !");
},true);







