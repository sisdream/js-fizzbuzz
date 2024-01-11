const divSquare = document.getElementById("block-container");

// ciclo per creare i numeri

for (let i = 1; i < 101; i++){
    const square = document.createElement("div");
    square.classList.add("square");
    divSquare.append("square");
    
    if(i % 15 == 0){
        console.log("FizzBuzz");
    }else if(i % 3 == 0){
        console.log("Fizz");
    }else if(i % 5 == 0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
};