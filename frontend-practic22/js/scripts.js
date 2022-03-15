const check = document.getElementById("check");
const price_1 = document.getElementById("price_1")
const price_2 = document.getElementById("price_2")
const price_3 = document.getElementById("price_3")

check.addEventListener("click", () =>{
    if(check.checked){
        price_1.innerHTML="&dollar;19.99"
        price_2.innerHTML="&dollar;24.99"
        price_3.innerHTML="&dollar;39.99"
    }else{
        price_1.innerHTML="&dollar;199.99"
        price_2.innerHTML="&dollar;249.99"
        price_3.innerHTML="&dollar;399.99"
    }
})




// check.addEventListener("click", () =>{
//     console.log(check.value)
//     if(check.checked==true){

//     }else{
//         price.forEach((card_price)=>{
//             card_price.textContent="holis"
//         })
//     }
// })
// console.log(check.value)