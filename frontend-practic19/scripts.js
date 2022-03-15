const black_theme = document.getElementById("check");
const theme_dark2 = document.querySelectorAll(".theme_dark");


black_theme.addEventListener("click", () =>{
    theme_dark2.forEach((theme_dark) =>{
        theme_dark.classList.toggle("light");
    });
});