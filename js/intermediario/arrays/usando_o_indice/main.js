let fruits = ["Apple", "Watermelon", "Lemon", "Strawberry"];
console.log(fruits);

// Encontra e retorna o índice do elemento.
let position = fruits.indexOf("Lemon");
console.log(position);

// Remove um item pela posição do índice (1 é o número de itens para remover).
// fruits.splice(1, 3);
fruits.splice(position, 1);

console.log(fruits);
