var img = document.getElementById("bg");
var txt = document.getElementById("text");
var social = document.getElementById("social");

img.addEventListener("mouseover", () => {
    img.classList.remove("new");
    img.classList.add("main");

    txt.classList.remove("d-none");
    txt.classList.add("show");

    social.classList.remove("d-none");
    social.classList.add("s-s")

})
img.addEventListener("mouseout", () => {
    img.classList.remove("main");
    img.classList.add("new");

    txt.classList.remove("show");
    txt.classList.add("d-none");

    social.classList.remove("s-s");
    social.classList.add("d-none")

})