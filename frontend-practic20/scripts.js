// const faqs = document.querySelectorAll("");


// faqs.forEach((container_faq) => {
//      container_faq.addEventListener("click" , (e) =>{
//          container_faq.classList.toggle("active");
//      });
// });

// faqs.addEventListener("click", (e) =>{
//     faqs.classList.toggle("active");
// } 

const faqs = document.querySelectorAll(".container_faq");

faqs.forEach((container_faq) =>{
    container_faq.addEventListener("click", () =>{
        container_faq.classList.toggle("heightuwu");
    })
})

// faqs.addEventListener("click", () =>{
//     console.log("uwu presionado")
//     if(faqs.classList.contains("heightuwu")){
//         console.log("tiene clase uwu")
//         faqs.classList.remove("heightuwu");
//     }
//     else{
//         faqs.classList.add("heightuwu");
//     }
// });


console.log("holis");