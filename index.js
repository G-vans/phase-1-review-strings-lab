// Write your code in this file!

//Current User variable
let currentUser = "Jevans Otieno";

let welcomeMessage = `Welcome to Flatbook, ${currentUser}` + '!';

// const welcomeMessage = 'Welcome to Flatbook, ' + currentUser + '!';

console.log( welcomeMessage );


//Excited Welcome Message Variable

const excitedWelcomeMessage = welcomeMessage.toUpperCase();

let upperCaseCurrentUser = currentUser.toUpperCase();

console.log(upperCaseCurrentUser);



//Short Greeting variable
let shortGreeting = 'Welcome, ';

const firstInitial = currentUser[0];
const restOfName = currentUser.slice(0,1);

// console.log(firstInitial);
console.log(restOfName)

shortGreeting = `Welcome, ${restOfName}!`;

console.log(shortGreeting);
