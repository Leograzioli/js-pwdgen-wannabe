//chiedere nome cognome e colore preferito e aggungere tutto sulla page +21


//input
//ask name
const userName = prompt("What is your name?");
console.log(userName);

//ask sur name
const userSurName = prompt("What is your sur name?");
console.log(userSurName);


//ask favorite color
const userFavColor = prompt("what is your favorite color?");
console.log(userFavColor);

//elaborazione
//generate password by concatenate 
const weakPassword = `your weak password is: ${userName}${userSurName}${userFavColor}21`
console.log(weakPassword);

//output
//write the result(const weakPassword) on client
document.getElementById("password").innerHTML = weakPassword