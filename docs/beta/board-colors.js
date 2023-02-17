const elemClass = [
    ".square.white",
    ".square.black",
    "#board svg.white path",
    "#board svg.black path",
];

const inputClass = [
    "#style input#white-border-color",
    "#style input#black-border-color",
    "#style input#white-piece-color",
    "#style input#black-piece-color",
];

for (let i = 0; i < 4; i++) {
    /* "s" for square, "p" for piece */

    if (i === 0 || i === 1) {
        document
            .querySelector(inputClass[i])
            .addEventListener("change", function () {
                let elem = document.querySelectorAll(elemClass[i]);

                for (
                    let j = 0;
                    j < document.querySelectorAll(elemClass[i]).length;
                    j++
                ) {
                    document.querySelectorAll(elemClass[i])[
                        j
                    ].style.backgroundColor = document.querySelector(
                        inputClass[i]
                    ).value;
                    refShereSheme();
                }
            });
    }

    if (i === 2 || i === 3) {
        document
            .querySelector(inputClass[i])
            .addEventListener("change", function () {
                let elem = document.querySelectorAll(elemClass[i]);

                for (
                    let j = 0;
                    j < document.querySelectorAll(elemClass[i]).length;
                    j++
                ) {
                    document.querySelectorAll(elemClass[i])[j].style.fill =
                        document.querySelector(inputClass[i]).value;
                    refShereSheme();
                }
            });
    }
}

let shere = false;

function refShereSheme() {
    if (shere === true) {
        let elem = "0";
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 6; j++) {
                elem += document.querySelector(inputClass[i]).value.charAt(j + 1);
            }
        }
        
        document.querySelector('#shere-sheme input[type="text"]').value = elem;
    }
}

function shereSheme() {
    shere = true;
    document.querySelector("#shere-sheme").innerHTML ='<input type="text" /><input type="button" value="Kopiuj" />';
    refShereSheme()

    document.querySelector('#shere-sheme input[type="button"]').addEventListener("click", function() {
        let content = document.querySelector('#shere-sheme input[type="text"]');
        content.select();
        content.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(content.value);    
    })
}

function enterSheme() {
    document.querySelector("#enter-sheme").innerHTML ='<input type="text" /><input type="button" value="Użyj" />';

    document.querySelector('#enter-sheme input[type="button"]').addEventListener("click", function() {
        console.log("wprowadzono");
        let elem = document.querySelector('#enter-sheme input[type="text"]').value;

        if (elem.charAt(0) === "0" && elem.length === 25) {
            for (let i = 0; i < 4; i++) {

                if (i === 0 || i === 1) {
    
                    for (let j = 0; j < document.querySelectorAll(elemClass[i]).length; j++) {
                        let value = "";
                        for (let k = 0; k < 6; k++) {
                            value += elem.charAt(i * 6 + k + 1)
                        }
                        document.querySelectorAll(elemClass[i])[j].style.backgroundColor = "#" + value;
                        document.querySelector(inputClass[i]).value = "#" + value;
                        console.log("wartość " + i + ": " + value);
                    }
                
                }

                if (i === 2 || i === 3) {
    
                    for (let j = 0; j < document.querySelectorAll(elemClass[i]).length; j++) {
                        let value = "";
                        for (let k = 0; k < 6; k++) {
                            value += elem.charAt(i * 6 + k + 1)
                        }
                        document.querySelectorAll(elemClass[i])[j].style.fill = "#" + value;
                        document.querySelector(inputClass[i]).value = "#" + value;
                        console.log("wartość " + i + ": " + value);
                    }
                
                }
            }
        } else {
            alert("Błędny kod schematu!");
        }

    });
}