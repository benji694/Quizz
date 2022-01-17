// LES FONCTIONS

// Execution 1
// La déclaration function permet de définir une fonction.
// Le navigateur mémorise la fonction en mémoire et il est prêt à agir dès que nous l'appelons. 
function consoleAleatoire() {
    let nombreAleatoire = Math.floor(Math.randoom() * 100) + 1;
    console.log(nombreAleatoire);
}

// Afin d'appeler une fonction, il suffit da tapper le nom de la fonction suivit des parenthèse. 
// Les parenthèses c'est ce qui appelle la fonction. 

consoleAleatoire();

// Execution 3
// Pour utiliser une fontion à plusieurs reprises,
// il suffit de l'appeler à nouveau. 

consoleAleatoire();
consoleAleatoire();
consoleAleatoire();
consoleAleatoire();


// ARGUMENTS

// Execution 1
// Lorsqu'on appellera la fonction calculerScore(1), 
// cela aura pour effet de créer une letiable "points" avant d'exécuter la fonction, 
// et cette letiable aura pour valeur 1 et elle sera détruite une fois la fonction exécutée.
let monScore = 0;
function calculerScore(points) {
    points += 5;
    console.log(points);
}

calculerScore(1);
calculerScore(5);
calculerScore(1);
calculerScore(10);

// Execution 1
// Multiple arguments peuvent être passer à une fonction, 
// en les séparant par des virgules.
function calculerSuperficieRectangle(longueur, largeur) {
    let resultat = longueur * largeur;
    console.log(resultat);
}

calculerSuperficieRectangle(6, 5);

// Execution 2
// Nous avons ajouter un troisième argument pour inclure l’unité de mesure de la superficie, 
// comme le centimètre carré ou le mètre carré. 
function calculerSuperficieRectangle(longueur, largeur, unite) {
    let resultat = longueur * largeur;
    console.log(resultat + unite);
}

calculerSuperficieRectangle(6, 5, "m²");

// Execution 3
// Quand on appelle un fonction avec moins d'arguments que déclarer, 
// l'argument manquer est réglé à undefined
function calculerSuperficieRectangle(longueur, largeur, unite) {
    let resultat = longueur * largeur;
    console.log(resultat + unite);
}

calculerSuperficieRectangle(6, 5);

// Execution 4
// avec cette ecriture si je ne passe pas de troisieme argument.
// la valeur par defaut de l'argument "unite" est prise en compte.
// Les arguments optionnels doivent etre à la fin de la liste d'arguments 
// de sorte qu'ils peuvent être omis.
function calculerSuperficieRectangle(longueur, largeur, unite = "m²") {
    let resultat = longueur * largeur;
    console.log(resultat + unite);
}

calculerSuperficieRectangle(6, 5);
calculerSuperficieRectangle(6, 5, "cm²"); // ICI c'est bien la chaine "cm²" qui sera prise en compte

// Afecter une fonction a une constante
// Une expression de fonction est très similaire et a presque la même syntaxe qu'une déclaration de fonction. 
// Une expression de fonction vous permet d’affecter une fonction anonyme à une constante.
const consoleAleatoire2 = function () {
    let nombreAleatoire = Math.floor(Math.randoom() * 100) + 1;
    console.log(nombreAleatoire);
};

consoleAleatoire2();
consoleAleatoire2();
consoleAleatoire2();
consoleAleatoire2();

// Le return

// Execution 1
// Si nous executons cela, nous allons rien voire, car on n’a fait aucune instruction
// pour afficher n’importe quoi à partir de l’intérieur de la fonction, 
// comme nous l'avons fait précédemment avec console.log().
function calculerSomme(valeur1, valeur2) {
    let somme = valeur1 + valeur2;
}

calculerSomme(3, 4);

// Execution 2
// Si nous essayons d'alerter somme de l'extérieur de la fonction,
// nous allons avoir une erreur qui dit que la letiable somme est indéfinie,
// car " somme" est une letiable qui existe uniquement dans la fonction,
// il n'existe pas à l'extérieur de la fonction.
// On parle de portée de letiable
// on dis que somme est une letiable locale : elle n'existe pas en dehors de la fonction
// par contre text est une letiable globale : elle est accessible partout (ATTENTION CELA PEUT ETRE DANGEREUX !!!)

let text = "je suis un texte";

function calculerSomme(valeur1, valeur2) {
    console.log(text)
    let somme = valeur1 + valeur2;
}

alert(somme);
calculerSomme(3, 4);

// Execution 3
// L'instruction return met fin à l'exécution d'une fonction
// et définit une valeur à renvoyer à la fonction appelante.
// L'expression qu'on souhaite retourner, si elle est absente, 
// la valeur retourner par défaut sera undefined.

function calculerSomme(valeur1, valeur2) {
    let somme = valeur1 + valeur2;
    return somme;
}

let resultat = calculerSomme(3, 4);
alert(resultat);

// Execution 4
// Nous n'avons pas besoin d'alerter le premier resultat à l'écran. 
// Nous pourrions, à la place, faire plus d'opérations avec, 
// nous pourrions appeler «calculerSomme» encore une fois, prendre 3 et l’ajouter à "résultat1".
function calculerSomme(valeur1, valeur2) {
    let somme = valeur1 + valeur2;
    return somme;
}

let resultat1 = calculerSomme(3, 4);
let resultat2 = calculerSomme(3, resultat1);
alert(resultat2);


// Execution 5
// Lorsqu'une instruction return est utilisée dans une fonction, 
// l'exécution de la fonction se termine. 
// Donc dans cette exemple nous allons nous contenter de retourner la valeur, 
// au lieu d'utiliser l'instruction break.
// Une toute dernière chose a mentionné, c'est que nous pouvons pas sauter de ligne 
// entre le mot clé « return » et la valeur à retourner.
function obtenirJour(nbr) {
    switch (nbr) {
        case 0: return "Lundi";
        case 1: return "Mardi";
        case 2: return "Mercredi";
        case 3: return "Jeudi";
        case 4: return "Vendredi";
        case 5: return "Samedi";
        case 6: return "Dimanche";
    }
}

let jour = obtenirJour(2);
alert(jour);


