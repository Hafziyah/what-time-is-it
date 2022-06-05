
let time = new Date () .getHours();
let greeting = "Bonjour";
let userName = prompt("What is your name?");
// alert(`${greeting} ${userName}!`);

if (time <= 12) {
   greeting="Good morning!";
   } else if (time <= 18) {
    greeting="Good afternoon!"; 
} else if (time <= 22) {
    greeting = "Good evening!";
} else {
    greeting = "Off to bed!";
}

alert(`${greeting} ${userName}`)