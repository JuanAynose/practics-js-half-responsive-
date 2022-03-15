const button_modal = document.getElementById("modal_mobile");

const modal_menu = document.getElementById("modal_menu");
const close_modal = document.getElementById("close_modal")

button_modal.addEventListener("click", ()=>{
    modal_menu.classList.toggle("active")
})

close_modal.addEventListener("click", ()=>{
    modal_menu.classList.remove("active")
})

/*modal open & close*/

const ArrText=["Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.","Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.","Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."]

const featutes_cont = document.getElementById("features_container")
const textFeatures = document.getElementById("text_features")

featutes_cont.addEventListener("click", (e)=>{
    if(e.target.tagName=="A"){
        e.preventDefault()
        for(let i=0; i <e.target.parentNode.parentNode.children.length; i++){
            if(e.target.parentNode.parentNode.children[i].children[0].classList[1]=="active") e.target.parentNode.parentNode.children[i].children[0].classList.remove("active")
        }
        if(e.target.text==="Speedy Searching"){
            textFeatures.textContent=ArrText[0]
        }else if(e.target.text==="Easy Sharing"){
            textFeatures.textContent=ArrText[1]
        }else{
            textFeatures.textContent=ArrText[2]
        }
        e.target.classList.add("active")
    }
})

/*features menu*/

const accordion_menu = document.getElementById("accordion")

accordion_menu.addEventListener("click", (e)=>{
    if(e.target.tagName=="A"){
        e.preventDefault()
        e.target.children[0].nextElementSibling.classList.toggle("active")
        e.target.nextElementSibling.classList.toggle("active")
    }else if(e.target.tagName=="P"){
        e.preventDefault()
        e.target.parentNode.nextElementSibling.classList.toggle("active")
        e.target.nextElementSibling.classList.toggle("active")
    }
})

/*accordion uwu*/


const emailButton = document.getElementById("email_button")
const emailInput = document.getElementById("email_input")
const form = document.getElementById("form")

form.addEventListener("click", (e)=>{
    e.preventDefault()
})

emailButton.addEventListener("click", (e)=>{
    if(emailInput.value.length<10 || emailInput.value.length==0){
        emailInput.parentElement.classList.add("error")
        emailInput.parentElement.children[1].classList.add("error")
    }else{
        emailInput.parentElement.classList.remove("error")
        emailInput.parentElement.children[1].classList.remove("error")
    }
})

/*email check poor version xd*/