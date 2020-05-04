let titleArr = document.querySelectorAll(".pics");

function titleHandler(ev) {
    ev.target.closest('.toggle').querySelector('.class-title').classList.toggle("visible");
    ev.target.closest('.toggle').querySelector('.class-title').classList.toggle("hidden");
}

titleArr.forEach((element) => {
    element.onclick = titleHandler;
});