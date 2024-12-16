// Déclaration et initialisation de variables typées en TypeScript
let n1: number = 5; // n1 est un nombre (number)
let n2: number = 55; // n2 est également un nombre

// Opérations arithmétiques de base
let result: number = n1 + n2; // Addition
console.log(`${n1} + ${n2} = ${n1 + n2}`); // Utilisé ici pour calculer la somme de deux nombres.

console.log(`${n1} - ${n2} = ${n1 - n2}`); // Soustraction
console.log(`${n1} * ${n2} = ${n1 * n2}`); // Multiplication
console.log(`${n2} / ${n1} = ${n2 / n1}`); // Division

// Modulo : reste de la division entière
console.log(`${7} % ${2} = ${7 % 2}`); // 7 / 2 = 3 reste 1 => 7 % 2 = 1

// Assignation (initialisation et réassignation de variables)
result = n1 + n2;
console.log(`result => ${result}`);

// Opérateurs d'assignation combinée
result += n2; // Équivaut à result = result + n2
console.log(`result += ${n2} => result = ${result}`);

result -= n1; // Équivaut à result = result - n1
console.log(`result -= ${n1} => result = ${result}`);

result *= 2; // Équivaut à result = result * 2
console.log(`result *= 2 => result = ${result}`);

result /= 2; // Équivaut à result = result / 2
console.log(`result /= 2 => result = ${result}`);

result %= 3; // Équivaut à result = result % 3
console.log(`result %= 3 => result = ${result}`);

// Comparaison logique (renvoient des booléens : true ou false)
console.log(`${n1} == ${n2} => ${n1 == n2}`); // Égalité
console.log(`${n1} != ${n2} => ${n1 != n2}`); // Différence
console.log(`${n1} > ${n2} => ${n1 > n2}`); // Supérieur
console.log(`${n1} < ${n2} => ${n1 < n2}`); // Inférieur
console.log(`${n1} >= ${n1} => ${n1 >= n1}`); // Supérieur ou égal
console.log(`${n2} <= ${n1} => ${n2 <= n1}`); // Inférieur ou égal

// Comparaison stricte (type et valeur)
console.log(`${n1} === 5 => ${n1 === 5}`); // Vrai : même type et même valeur
console.log(`${n1} !== 5 => ${n1 !== 5}`); // Faux : même type et même valeur

// Opérateurs logiques
let isTrue: boolean = true;
let isFalse: boolean = false;
console.log(`isTrue && isFalse => ${isTrue && isFalse}`); // ET logique (false)
console.log(`isTrue || isFalse => ${isTrue || isFalse}`); // OU logique (true)
console.log(`!isTrue => ${!isTrue}`); // NON logique (false)

// Opérateur ternaire (if simplifié)
const age: number = 18;
// b = X ?(si) condition vraie :(sinon) condition fausse
const canVote: string = age >= 18 ? "Oui, peut voter" : "Non, trop jeune";
console.log(`Age: ${age} => Peut voter ? ${canVote}`);

// Opérateurs bit à bit
let bit1: number = 5; // En binaire : 101
let bit2: number = 3; // En binaire : 011
console.log(`${bit1} & ${bit2} => ${bit1 & bit2}`); // ET bit à bit (001 => 1)
console.log(`${bit1} | ${bit2} => ${bit1 | bit2}`); // OU bit à bit (111 => 7)
console.log(`${bit1} ^ ${bit2} => ${bit1 ^ bit2}`); // XOR bit à bit (110 => 6)
console.log(`~${bit1} => ${~bit1}`); // NON bit à bit (inverse de tous les bits)

// Opérateurs de décalage
console.log(`${bit1} << 1 => ${bit1 << 1}`); // Décalage à gauche (1010 => 10)
console.log(`${bit2} >> 1 => ${bit2 >> 1}`); // Décalage à droite (001 => 1)

// Exemples supplémentaires d'assignations combinées
let counter: number = 10;
counter++; // Incrémente de 1 (counter = counter + 1)
console.log(`counter++ => ${counter}`);

counter--; // Décrémente de 1 (counter = counter - 1)
console.log(`counter-- => ${counter}`);

const a: any = 5;
const b: number = 5;

const resultat: number = a ?? b; // resultat = a si a !== null, sinon b
console.log(resultat);

// Conditions (if/else, for, while, etc.)

// Exemple de condition if/else
let ages: number = 20;
if (ages >= 18) {
  console.log("L'utilisateur est majeur.");
} else {
  console.log("L'utilisateur est mineur.");
}

// Exemple de structure de boucle for
for (let i = 0; i < 5; i++) {
  // i commence à 0, s'arrête avant 5, incrémenté de 1 à chaque itération
  console.log(`Iteration ${i}`);
}

// Exemple de boucle while
let counters: number = 0;
while (counters < 3) {
  // Tant que le compteur est inférieur à 3
  console.log(`Counters value: ${counters}`);
  counters++;
}

// Exemple de boucle do-while
let index: number = 0;
do {
  // Exécute d'abord le code, puis vérifie la condition
  console.log(`Index value: ${index}`);
  index++;
} while (index < 3);

// Exemple de la structure switch
let dayOfWeek: string = "Wednesday";

switch (dayOfWeek) {
  case "Monday":
    console.log("C'est lundi.");
    break;
  case "Tuesday":
    console.log("C'est mardi.");
    break;
  case "Wednesday":
    console.log("C'est mercredi.");
    break;
  case "Thursday":
    console.log("C'est jeudi.");
    break;
  case "Friday":
    console.log("C'est vendredi.");
    break;
  case "Saturday":
    console.log("C'est samedi.");
    break;
  case "Sunday":
    console.log("C'est dimanche.");
    break;
  default:
    console.log("Jour inconnu.");
    break;
}
