// LES CONDITIONS

let age = prompt("quel est votre age ?");

// Dans cette condition "vous etes majeur" s'affichera si age est supérieur ou égal à 18
if(age >= 18) {
    console.log("vous etes majeur");
}


// Pour afficher quelque chose si la condition n'est pas remplie on utilisera le bloc else
if(age >= 18) {
    console.log("vous etes majeur");
} else {
    console.log("vous etes mineur");
}

// Dans le cas de plusieurs conditions on pourra utiliser le bloc else if
// ATTENTION L ODRE EST IMPORTANT
// dans cet exemple si age est egal à 25 on affichera "vous etes majeur"

if(age >= 21){
    console.log("vous etes majeur");
} else if (age >= 18){
    console.log("vous etes majeur mais pas aux USA");
} else {
    console.log("vous etes mineur");
}

// dans cet exemple si age est egal à 25 on affichera "vous etes majeur mais pas aux USA"
if (age >= 18){
    console.log("vous etes majeur mais pas aux USA");
} else if(age >= 21){
    console.log("vous etes majeur");
} else{
    console.log("vous etes mineur");
}

// Les opérateurs de comparaison
if (age >= 18){} // supérieur ou égal
if (age > 18){} // strictement supérieur
if (age <= 18){} // inférieur ou égal
if (age < 18){} // strictement inférieur
if (age === 18){} // égalité (le double == étant moins précis que le triple ==)
if (age !== 18){} // non égal


// Les opérateur booléens
if(age === 18 || age === 19){} // sera vrai si age egal 18 ou age egal 19
if(age > 18 && age < 21){} // sera vrai si age superieur 18 et age inferieur 21
let isActive = true
if(isActive){} // sera vrai si isActive est vrai (true)
if(!isActive){} // sera vrai si isActive est faux (false)

// Le switch aura le meme role qu'un bloc if else if
// ecrit differement
// on test une variable et un agit en fonction de la valeur de celle-ci
// Le break permet de ne pas passer dans les autre case et le default servira
// si aucune valeur ne correspond
switch (age){
    case 12:
        console.log("c 'est à 12");
        break;
    case 15:
        console.log("c'est 15");
        break;
    case 19:
        console.log("c'est 19");
        break;
    default:
        console.log("Une autre valeur")
}

// Les conditions ternaires

// Syntaxe : CONDITION ? VALEUR SI VRAI : VALEUR SI FAUX
const texteAffiche = age >= 18 ? "vous etes majeur" : "vous etes mineur";