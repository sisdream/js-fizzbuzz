const divSquare = document.getElementById('block-container');

// creazione di ciclo

for (let i = 1; i <=100; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    divSquare.append(square);

    if(i % 15 === 0) {
        square.classList.add('fizzBuzz');
        square.append("FizzBuzz");
    }else if(i % 5 === 0) {
        square.classList.add('divBuzz');
        square.append("Buzz")
    }else if (i % 3 === 0) {
        square.classList.add('divFizz');
        square.append("Fizz");
    }else {
        square.append(i);
    }
}