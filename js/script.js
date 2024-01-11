const divSquare = document.getElementById("block-container");
// ciclo per creare i numeri

for (let i = 1; i < 101; i++){
    console.log(i)
    const square = document.createElement("div");
    square.classList.add("square");
    console.log(square);
};