#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer well generate a random number
// 2) User input for guessing number 
// 3) Compare user input with computer generated and show result
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10:",
    },
]);
console.log(answers);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulatoins! you guessed right number.");
}
else {
    console.log("You guessed wrong number.");
}
