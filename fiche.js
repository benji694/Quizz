//---------------------------------//
//  Tester le js :
//---------------------------------//

alert("Hello world");

/*
 * Nous sommes ici directement en JavaScript, aucune balise <script> n'est nécessaire !
 *
 * Exactement comme pour les fichiers .css de feuilles de styles
 */

//Ceci est un commentaire qui est ignoré par le moteur JavaScript

let prenom = "François"; // Ceci stocke un prénom 

/* 
*   Ceci est un commentaire qui couvre plusieurs lignes,
*   il utilise la même syntaxe que le CSS
*/

alert('Bonjour tout le monde !');

// Afficher quelque chose dans la console
console.log('Bonjour tout le monde !');

// Déclaration de deux variables.
let age;
let firstName;


// Affectation d'une valeur à une variable.
firstName = 'Tom';

// Déclaration et affectation en une seule instruction.
let friend = 'Jerry';

// Execution 1
// Le navigateur va alerter le nombre 10
let score1  = 10;
alert(score1);

// Execution 2
// Le navigateur va alerter le nombre 10, et lorsque vous cliquer sur OK,
// le navigateur va alerter 100.
let score2  = 10;
alert(score2);

score2 = 100;
alert(score2);

// Execution 3
// Nous obtenons un message d'erreur ici,
// car "score3" avec "s" minuscule en ligne 1
// est différente de "Score3" avec "s" majuscule en ligne 2
let score3  = 10;
alert(Score3);

score3 = 100;
alert(score3);


// Execution 4
let phrase = "Bonjour tout le monde!";
alert(phrase);

/*
 * Concaténation d'un nombre avec une chaîne de caractères.
 * Le + ici est compris comme une concaténation car la valeur ' ans' n'est pas un nombre.
 *
 * Affectation du résultat à une variable.
 */
age = 30 + ' ans';

// La variable age vaut maintenant la chaîne de caractères '30 ans'.

// La barre oblique inversée suivie de guillemet ou d'apostrophe
// déclenche une interprétation alternative du guillemet ou de l'apostrophe,
// Cela signifie que JavaScript va supprimer la barre oblique inversée et ne va afficher que le guillemet 
// ou l'apostrophe à l'intérieur de la chaîne 
"un \"string\", c'est quoi?"

// Nous obtenons un message d'erreur ici,
// "un "string", c'est quoi?"


// douze de la ligne 1 et douze de la ligne 2
// sont deux choses différentes en ce qui concerne javascript.
"12"
12

// Le signe "+" va assembler le contenue de "monPrenom"
// avec l'espace entre les guillemets doubles,
// et le centenu de "monNomDeFamille",
// puis la fonction "alert" affichera le String "François Fremont"

var monPrenom = "François";
var monNomDeFamille = "Fremont";

var monNomComplet = monPrenom + " " + monNomDeFamille;
alert(monNomComplet);


/*
 * Les chaînes de caractères sont concaténées avec le +
 */
let paragraphe = "<p>Bonjour, je m'appelle " + firstName + '</p>';
paragraphe = '<p>J\'ai ' + age + '</p>';

/*
 * Comme vu precedemment
 * On utilise des guillemets doubles pour certaines chaînes de caractères car elles contiennent un
 * ou plusieurs caractères de guillemets simples.
 * On peut aussi echapper les caracteres qu'on veut afficher avec \
 */

// Déclaration d'une constante.
const TAUX_DE_TVA = 20.0;

// A la différence d'une varariable la constante ne pourra jamais être modifiée
// Une déclaration d'une constante et son affectation sont obligatoirement sur la même ligne

// Déclaration de trois variables.
let montantHT;
let montantTTC;
let montantTVA;


// Affectation d'une valeur à une variable.
montantHT = 100;

// Les valeurs de type nombre sont, comme vous l’aurez peut-être déduit, des valeurs numériques.
// Elles sont écrites de la manière dont sont habituellement écrits les nombres.
// Saisissez cela dans la console et la même chose est affichée dans la fenêtre de sortie
10

// Tout les chiffres en JavaScript sont des chiffres de  64 bits à virgule flotante,
// alors 10 en JavaScript est la même chose que 10.00
10.00

// Il y'a une limite de la précision des décimales en JavaScript,
// 1232.12321312312312312 deviendra 1232.1232131231232
1232.12321312312312312

// Vous pouvez avoir des numéros aux chiffre négatif
-10

//Infinity est une valeur numérique positive très large, très grand qu'une très grande limite supérieurs
Infinity

//-Infinity est l'opposé de Infinity
-Infinity

// Les opérateurs arithmétiques standards sont l'addition (+), la soustraction (-), 
// la multiplication (*), et la division (/). 
// Ces opérateurs fonctionnent comme pour la plupart des langages de programmation 
// lorsqu'ils sont utilisés avec des nombres décimaux 
// (on notera que la division par zéro a pour résultat Infinity est infaisable). 
6 + 4;
6 - 4;
6 * 4;
6 / 3;

// L'opérateur « modulo » renvoie le reste de la division du premier opérande par le second.
10 % 3;

// Comme dans les mathématiques traditionnelles, la multiplication se fait d'abord.
// La multiplication (*) et la division (/) ont une priorité plus élevée que l'addition (+) 
// et la soustraction (-).
40 - 6 * 4;

// Et comme dans les mathématiques traditionnelles, la priorité peut être modifiée en utilisant
// des parenthèse. Lors de l'utilisation de parenthèses, 
// les opérations entre parenthèses sont calculées en premier.
(40 - 6) * 4;

// Opération sur une valeur
montantHT += 10; // identique à  montantHT = montantHT + 10;
montantHT -= 10; // identique à  montantHT = montantHT - 10;
montantHT *= 10; // identique à  montantHT = montantHT * 10;
montantHT /= 10; // identique à  montantHT = montantHT / 10;

// Incrémentation d'une variable.
montantHT++;                        // Identique à montantHT = montantHT + 1;

/* A partir de cette ligne montantHT vaut 101. */


// Décrémentation d'une variable.
montantHT--;                        // Identique à montantHT = montantHT - 1;

/* A partir de cette ligne montantHT vaut 100 de nouveau. */


// Opérations arithmétiques sur des variables et constantes.
montantTVA = montantHT * TAUX_DE_TVA / 100;
montantTTC = montantHT + montantTVA;

// Déclaration de trois variables.
let number1;
let number2;
let sum;

// LA COMMANDE PROMPT

// execution 1
// "prompt" ouvre une boîte de dialogue où le visiteur peut taper sa réponse,
// mais de cette façons la réponse entrer par l'utilisateur et inutile,
// car on ne pas acceder à elle.
prompt("Comment vous appelez-vous?");


// execution 2
// Ligne 1 affiche une boîte de dialogue prompte,
// puis conserve la valeur entré par l'utilisateur dans la variable "nom",
// puis la fonction "alert" affiche le contenu de cette variable.
var nom = prompt("Comment vous appelez-vous?");
alert(nom);

/*
 * Affectation de la saisie de l'utilisateur aux variables.
 *
 * Les deux variables sont donc de type String.
 */
number1 = prompt('Veuillez saisir un premier nombre :');
number2 = prompt('Veuillez saisir un deuxième nombre :');

/*
 * prompt() a renvoyé une chaîne de caractère (type String) même si on a saisi un nombre.
 * On doit donc convertir nos variables en nombres avant de pouvoir les additionner.
 *
 * Les fonctions parseInt() et parseFloat() convertissent une variable de type String en une
 * variable de type Number.
 */
number1 = parseInt(number1);    // Pour les nombres entiers
number2 = parseFloat(number2);  // Pour les nombres à virgules


/*
 * Addition des deux variables.
 *
 * Ce n'est PAS une concaténation car les deux variables sont de type Number.
 */
sum = number1 + number2;

// Déclaration et affectation d'une variable.
let firstVariable;

// Affectation d'une valeur à la variable.
let firstVariable = 'Bonjour tout le monde !';

/**
 * Il est possible de regrouper les 2 opérations, déclaration et affectation dans la même instruction :
 *
 *      let firstVariable = 'Bonjour tout le monde !';
 */

// Une variable a la particularité de pouvoir faire l'objet de plusieurs affectations
firstVariable = 'Hello world !';

// Déclaration d'une constante et affectation immédiate d'une valeur.
const FIRST_CONSTANT = 'Ceci est une constante !';

// La ligne de code ci-dessous est une erreur car on NE PEUT PAS modifier une constante.
// FIRST_CONSTANT = 'Modification de la constante';


/*
 * En lisant le code d'un projet, le développeur peut se demander pourquoi telle ou telle valeur
 * obscure (un nombre à virgule compliqué par exemple) est utilisée.
 *
 * En remplaçant cette valeur par une constante avec un nom précis et clair on documente simplement
 * le code, au même titre que quand on nomme correctement une variable.
 *
 *
 * Règle d'or : on code pour des humains et pas pour des machines !
 */

/*
 * Demande à l'utilisateur de saisir quelque chose dans une popup, lorsque la popup se referme le
 * résultat sera affecté à la variable.
 */
let firstName = prompt('Comment vous appelez-vous ?');

// OPERATIONS SUR LES CHAINES DE CARACTERES

let maChaine = "C'est ma chaine, laissez-la tranquille !";

// La propriété length représente la longueur d'une chaine de caractères.
// Donc le resultat ici est: 40.
maChaine.length; 

// Retourne la valeur de la chaîne courante, convertie en majuscules
// Donc le resultat ici est: "C'EST MA CHAINE, LAISSEZ-LA TRANQUILLE !".
maChaine.toUpperCase(); 

// ATTENTION SI ON AFFICHE maChaine on remarque qu'elle est toujours en minuscule
// pour garder la version en majuscule il faudra la stocker dans une variable ou une constante
// on dit que la methode toUpperCase retourne la chaine de caractere passée en argument en majuscule

// Retourne la chaîne de caractères courante en minuscules
// Donc le resultat ici est: "c'est ma chaine, laissez-la tranquille !"
maChaine.toLowerCase();

// "indexOf" renvoie l'indice de la première occurence de la valeur cherchée 
// au sein de la chaîne courante (à partir de indexDébut). 
// Elle renvoie -1 si la valeur cherchée n'est pas trouvée.
// Donc le resultat ici est: 17
maChaine.indexOf("laissez-la"); 

// si le resultat de maChaine.indexOf("ABCD") est égal à -1
// l'instruction alert vas être exécuté,
// en d'autres mots si on trouve pas de "ABCD" dans maChaine
// l'instruction alert vas être exécuté.
if(maChaine.indexOf("ABCD") == -1) alert("ce mot n'existe pas");

// La méthode slice() extrait une section de la chaine de caractères 
// et renvoie une nouvelle chaine de caractères.
// Par exemple, phrase.slice(3, 10) extrait le quatrième caractère jusqu'au dixième caractère. 
// Donc le resultat ici est le string: "méthode"
let phrase = "La méthode slice() extrait une section de la chaine de caractères."
phrase.slice(3, 10); 

// La méthode substring() retourne une sous-chaîne de la chaîne courante,
// entre un indice de début et un indice de fin.
// il existe quelques différences
phrase.substring(3, 7);
