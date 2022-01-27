
const btnValider = document.querySelector("#BtnValider");
const result = document.querySelector("#note");
let p1 = document.querySelector("#p1");
let p2 = document.querySelector("#p2");
let p3 = document.querySelector("#p3");
let Color = document.querySelectorAll(".questions");
let note = 0;


btnValider.addEventListener('click', function () {
    let goodRep = document.querySelectorAll(".GoodRep");
    note = 0;
    for (let i = 0; i < goodRep.length; i++) {
        if (goodRep[i].checked) {
            Color[i].style.background = "#75DA5A";
            note++;
        }
        else {
            Color[i].style.background = "#FF5555";
        }
    }
    results();
})

function results() {
    if (note < 5) {
        p1.textContent = "Encore pas mal d'erreurs, il faut apprendre ta leçon !!!"
        p2.textContent = "Retente une autre réponse dans les cases rouges, puis re-valide !";
    }
    else if (note <= 7) {
        p1.textContent = "Encore quelques erreurs, il faut réviser !"
        p2.textContent = "Retente une autre réponse dans les cases rouges, puis re-valide !";
    }
    else if (note < 10) {
        p1.textContent = "Pas mal !"
        p2.textContent = "Retente une autre réponse dans les cases rouges, puis re-valide !";
    }
    else {
        p1.textContent = "Exellent, un parcour sans fautes !!!";
        p2.textContent = ""
    }
    p3.textContent = note + "/" + Color.length;
}
