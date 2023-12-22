const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const quantity = document.querySelector('#quantity');
const b1 = document.querySelector('#b1');

console.log(add, subtract, quantity);

add.addEventListener('click',() => quantity.value = Number(quantity.value) + 1);
subtract.addEventListener('click',() => {
    quantity.value = Number(quantity.value) - 1
    
});

