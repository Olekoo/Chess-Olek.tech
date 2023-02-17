function adjustHeight() {
    document.querySelector("#board").style.height = document.querySelector("#board").clientWidth + "px";
}

window.onresize = adjustHeight;

adjustHeight();

setTimeout(() => {
    adjustHeight();
}, 2500);
