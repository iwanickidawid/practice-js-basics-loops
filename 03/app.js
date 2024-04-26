const x = 5;
let iteration = 0;
let randomNumber = -1;


while(randomNumber !== x) {
  randomNumber = Math.round(Math.random() * 30);
  iteration++;
  console.log(randomNumber, iteration);
}

alert('Wylosowano ' + x + ' za ' + iteration + ' razem');
