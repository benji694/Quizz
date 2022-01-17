// Les Boucles

// Execution 1
// La condition entre parenthèses sur la ligne 5 indique à la boucle de continuer à exécuter
// le code entre les accolades tant que « i » est inférieur à 10. 
let i = 0;

while(i <= 10) {
    console.log("log :" + i);
    i++;
}

console.log("La nouvelle valeur de i est :" + i);

// Execution 2
// Exemple de boucle while qui affiche uniquement les nombres pairs de 2 à 20

let i = 2;

while(i <= 20) {
    console.log("log :" + i);
    i += 2;
}

console.log("La nouvelle valeur de i est :" + i);

// Execution 3
// Exemple de boucle while qui fait un compte à rebours 
// qui part du chiffre le plus élevé et qui va vers zéro, 
// les nombres vont en décroissant. 

let i = 20;

while(i >= 0) {
    console.log("log :" + i);
    i--;
}

console.log("La nouvelle valeur de i est :" + i);

// Execution 4
// Exemple de boucle while infinie.

let i = 20;
while(i >= 0) {
    console.log("log :" + i);
}

// Execution 5
// Exemple d'instruction "if else" à l'intérieur d'une boucle while

let i = 20;

while(i >= 0) {
    
    if(i === 10) {
        console.log("Dix");
    }
    else{
        console.log("log :" + i);
    }

    i--;
}

console.log("La nouvelle valeur de i est :" + i);

// Execution 6
// Exemple de boucle while infinie accidentel
let i = 20;

while(i >= 0) {
    
    if(i === 10) {
        console.log("Dix");
    }
    else{
        console.log("log :" + i);
         i--;
    }
}

// Execution 7
// Dans une boucle do...while, la condition vient après le bloc de codes que vous souhaitez exécuter.
// Il est également important de terminer avec un point-virgule. 
// Noter que le code dans une boucle do... while 
// sera toujours exécutée une fois, même si la condition n'est jamais vraie.

let i = -1;

do {
  i--;
  console.log("log : ", i);
} while( i >= 0);

// Boucle for

// Execution 1
// Exemple de boucle for qui s'exécute tant que  i <= 10, 
// et où le compteur s'incrémente par un à chaque itération.

for(let i = 0; i <= 10; i++) {
    console.log("for : " + i);
}

// Execution 2
// Exemple de boucle for qui s'exécute tant que  i <= 10, 
// et où le compteur s'incrémente par deux à chaque itération.

for(let i = 0; i <= 10; i += 2) {
    console.log("for : " + i);
}

// Execution 3
// Exemple de boucle for qui fait un compte à rebours 
// qui part du chiffre le plus élevé et qui va vers zéro, 
// les nombres vont en décroissant. 

for(let i = 10; i >= 0; i--) {
    console.log("for : " + i);
}

// EXEMPLES

// Execution 1
// Ici quand i est égale a 5, le reste de l'itération va être ignoré, 
// et une nouvelle itération vas commencer.
for(var i = 0; i <= 10; i++) {
    if(i === 5) {
      continue;
    }
    console.log("for : " + i);
}

// Execution 2
// Ici quand i est paire, le reste de l'itération va être ignoré, 
// et une nouvelle itération vas commencer.
for(var i = 0; i <= 10; i++) {
    if(i % 2 === 0) { continue;}
    console.log("for : " + i);
}

// Execution 3
// Exemple de boucle while infinie accidentel avec continue
var i = 0;
while( i <= 10) {
  if(i === 5 ) { continue; } // quand i est à 5 l'iteration recommence le i++ n'est pas executé
  console.log(i);
  i++;
}

// Execution 4
// Nous avons ajouter un autre opérateur d'incrémentation quant i === 5 
// pour ne pas tomber dans une boucle infinie accidentellement.
while( i <= 10) {
  if(i === 5 ) { i++; continue; }
  console.log(i);
  i++;
}

// Execution 5
// Exemple de continue lors d'une boucle à l'intérieur d'une autre
for(var i = 0; i <= 5; i++) {
    if(i % 2 === 0) { continue; } 
    for(var j = 0; j <= 5; j++) {
        if(j === 3) {continue;}
        console.log(i + " - " + j);
    }
}

// Les tableaux
// Un tableau est un ensemble de valeur stocké dans la même variable

const tableau = [4, 7, 67, 2, 8, 9, 13, 46, 7, 89];

// pour afficher un element d'un tableau
// on procede comme ceci

// affiche le premier element => 4 // 0 est l'index de l'element // l'index du premier element est toujours 0;
console.log(tableau[0]);
// affiche le deuxieme element => 7 // 1 est l'index de l'element // l'index du deuxieme element est toujours 1;
console.log(tableau[1]);
// affiche le troisieme element => 67 // 2 est l'index de l'element // l'index du troisieme element est toujours 2;
console.log(tableau[2]);

// on continue comme ceci jusqu'a ce que l'index soit celui du dernier element du tableau
// pour trouver l'index du dernier element du tableau il suffit de compter le nombre d'element dans le tableau
// ET DE SOUSTRAIRE 1 CAR LE PREMIER INDEX EST A 0
// Pour connaitre le nombre d'element dans le tableau il suffit d'ecrire NOM_DU_TABLEAU.length
// dans notre cas : tableau.length

console.log(tableau[tableau.length - 1]); //affichera le dernier element du tableau

// Pour afficher tout les elements d'un tableau on pourra utiliser une 
// boucle qui par de 0, qui va jusqu'à la longueur du tableau - 1, avec un pas de 1

for (let index = 0; index < tableau.length; index++) {
    const element = tableau[index];
    console.log(element);
}

// Si nous n'avons pas besoin de l'index on peut ecrire cette boucle ainsi
for (const element of tableau) {
    console.log(element); // element va prendre comme valeur toutes les valeur du tableau une par une
    // PS CE SERA UTILE POUR LE DOM PAR EXEMPLE
}


// Les principales opérations sur les tableaux

const fruits = ["Apple", "Banana"];

// Ajouter à la fin du tableau

let newLength = fruits.push('Orange');
// ["Apple", "Banana", "Orange"]

// Supprimer le dernier élément du tableau

let last = fruits.pop(); // supprime Orange (à la fin)
// ["Apple", "Banana"];

// Supprimer le premier élément du tableau

let first = fruits.shift(); // supprime Apple (au début)
// ["Banana"];

// Ajouter au début du tableau

let newLength = fruits.unshift('Strawberry') // ajoute au début
// ["Strawberry", "Banana"];

// Trouver l'index d'un élément dans le tableau

fruits.push('Mango');
// ["Strawberry", "Banana", "Mango"]

let pos = fruits.indexOf('Banana');
// 1

// Supprimer un élément par son index

let removedItem = fruits.splice(pos, 1); // supprime 1 élément à la position pos

// ["Strawberry", "Mango"]