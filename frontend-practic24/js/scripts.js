const submit = document.getElementById("submit_uwu");
const input = document.getElementById("input");
const form = document.getElementById("form")
const text = document.querySelector(".text_email")
const icon = document.querySelector(".icon_submit")

form.addEventListener("submit", (e)=>{
    e.preventDefault()
})

submit.addEventListener("click", (e)=>{
     e.preventDefault()
     if(input.textLength<=10){
         icon.classList.add("active");
         text.classList.add("active");
    }else{
        icon.classList.remove("active");
        text.classList.remove("active");
        input.value="";
    }
     console.log(input.textLength)
})
