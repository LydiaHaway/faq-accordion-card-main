const arrow1 = document.querySelector(".arrow1");
const quest1 = document.querySelector(".q1"); 
const answer1 = document.querySelector(".a1");

const arrow2 = document.querySelector(".arrow2");
const quest2 = document.querySelector(".q2"); 
const answer2 = document.querySelector(".a2");

const arrow3 = document.querySelector(".arrow3");
const quest3 = document.querySelector(".q3"); 
const answer3 = document.querySelector(".a3");

const arrow4 = document.querySelector(".arrow4");
const quest4 = document.querySelector(".q4"); 
const answer4 = document.querySelector(".a4");

const arrow5 = document.querySelector(".arrow5");
const quest5 = document.querySelector(".q5"); 
const answer5 = document.querySelector(".a5");

arrow1.addEventListener("click", () =>{
    answer1.classList.toggle("active"); 
    quest1.classList.toggle("active_q"); 
    arrow1.classList.toggle("rotade"); 
}); 

arrow2.addEventListener("click", () =>{
    answer2.classList.toggle("active"); 
    quest2.classList.toggle("active_q"); 
    arrow2.classList.toggle("rotade"); 
}); 

arrow3.addEventListener("click", () =>{
    answer3.classList.toggle("active"); 
    quest3.classList.toggle("active_q"); 
    arrow3.classList.toggle("rotade"); 
}); 

arrow4.addEventListener("click", () =>{
    answer4.classList.toggle("active"); 
    quest4.classList.toggle("active_q"); 
    arrow4.classList.toggle("rotade"); 
}); 

arrow5.addEventListener("click", () =>{
    answer5.classList.toggle("active"); 
    quest5.classList.toggle("active_q"); 
    arrow5.classList.toggle("rotade"); 
}); 