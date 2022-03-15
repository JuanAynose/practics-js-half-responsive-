const button1 = document.querySelectorAll(".button_left");
const text = document.getElementById("text");
const name_person = document.getElementById("name");
const profession = document.getElementById("profession");
const picture = document.getElementById("image");


button1.forEach((buttonss)=>{
    buttonss.addEventListener("click", () =>{
    if(picture.src.includes("image-tanya.jpg")){
        console.log("holis");
        picture.src="assets/images/image-john.jpg"
        text.innerHTML="“ If you want to lay the best foundation<br> possible I’d recommend taking this<br> course.The depth the instructors go into<br> is incredible. I now feel so confident about<br>starting up as a professional developer. ”";
        name_person.textContent="John Tarkpor";
        profession.textContent="Junior Front-end Developer";
    }else{
        picture.src="assets/images/image-tanya.jpg";
        text.innerHTML="“ I’ve been interested in coding for a while<br> but never taken the jump, until now. I<br> couldn’t recommend this course enough.<br> I’m now in the job of my dreams and so<br>excited about the future. ”";
        name_person.textContent="Tanya Sinclair";
        profession.textContent="UX Engineer";
    }
});
});
