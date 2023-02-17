let click = 0;
let noBeta = false;
const chessIcon = document.querySelector("#chess-icon");

chessIcon.addEventListener("click", function () {
    click += 1;
    if ((click >= 8 && !noBeta) || (click >= 4 && !noBeta && localStorage.getItem("betaTester"))) {
        if (
            confirm("Czy chcesz włączyć tryb Beta?\nCzęść funkcji może w niej jeszcze nie działać prawidłowo.") === true
        ) {
            if (localStorage.getItem("betaTester")) {
                location.href = "beta/index.html";
            } else {
                location.href = "beta/verif.html";
            }
        } else {
            noBeta = true;
        }
    }
});
