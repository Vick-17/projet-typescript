/* Réaliser un programme qui affiche le résultat d'un calcul comprenant : 
- 2 nombre
- un opérateur (+, -, *,/ ou %)
*/

let nbr1: number = 15;
let nbr2: number = 5;

let somme: number = nbr1 + nbr2;
console.log(`Resulat de l'adition => ${somme}`);

somme = nbr1 - nbr2;
console.log(`Resulat de la soustraction => ${somme}`);

somme = nbr1 * nbr2;
console.log(`Resulat de la multiplication => ${somme}`);

somme = nbr1 / nbr2;
console.log(`Resulat de la division => ${somme}`);

somme = nbr1 % nbr2;
console.log(`Resulat du modulo => ${somme}`);

