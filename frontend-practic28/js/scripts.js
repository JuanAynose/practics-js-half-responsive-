const diceButton = document.getElementById("button_dice");
const titleCard = document.getElementById("card_title");
const textCard = document.getElementById("card_text");

diceButton.addEventListener("click", ()=>{  
fetch("https://api.adviceslip.com/advice")
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(res =>{
        console.log(res)
        console.log(res.slip.advice)
        titleCard.textContent=`Advice #${res.slip.id}`;
        textCard.innerText=`"${res.slip.advice}"`;
    })
})