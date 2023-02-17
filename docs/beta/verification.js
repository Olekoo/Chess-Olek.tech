const ctrl = document.getElementsByClassName("cell");
const letter = document.getElementsByClassName("letter");
const svg = document.getElementsByTagName("path");
let pass = "";
let winInfo = "Poprawne hasło!";

function wPass(char) {
    let uoLetter = ["l", "q", "z", "x", "d", "f"];
    pass += uoLetter[(char + pass.length) % 6];
    if (pass === "lqflfqqxqq") {
        document.getElementById("control").innerHTML = winInfo;
        setTimeout(function () {
            localStorage.setItem("betaTester", true);
            location.href = "index.html";
        }, 750);
    }
}

for (let i = 0; i < 4; i++) {
    ctrl[i].addEventListener("mouseover", function () {
        svg[i].classList.add("hover");
    });
    ctrl[i].addEventListener("mouseleave", function () {
        svg[i].classList.remove("hover");
    });
    ctrl[i].addEventListener("click", function () {
        wPass(i);
    });
}

for (let i = 0; i < 2; i++) {
    letter[i].addEventListener("click", function () {
        wPass(i + 4);
    });
}
