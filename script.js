const joksContainer = document.querySelector(".container-jokes");
const button = document.querySelector("button");

import {jokesData} from "./data.js";


const randomJoke = () =>{
    let randomID = Math.ceil(Math.random() * 25);
    return jokesData.find(item =>item.id  === randomID);
}

console.log(randomJoke());

button.addEventListener("click",() =>{
    let joke = randomJoke();
    if (joke) {
        joksContainer.innerHTML = `<p class="joke">${joke.joke}</p>`; 
    } else {
        joksContainer.textContent = "Vtip nebyl nalezen!";
    }
})