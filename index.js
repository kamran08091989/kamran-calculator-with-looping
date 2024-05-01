#! /usr/bin/env node
import inquirer from "inquirer";
let loop = true;
while (loop) {
    const answer = await inquirer.prompt([{
            name: "firstNumber",
            type: "number",
            message: "Enter first number:"
        },
        {
            name: "secondNumber",
            type: "number",
            message: "Enter second number:"
        },
        {
            name: "operator",
            type: "list",
            message: "seclect one of the number to perform the action",
            choices: ["Addition", "subtraction", "multiplication", "Division", "exponenciation"],
        }
    ]);
    if (answer.operator === "Addition") {
        console.log(answer.firstNumber + answer.secondNumber);
    }
    else if (answer.operator === "subtraction") {
        console.log(answer.firstNumber - answer.secondNumber);
    }
    else if (answer.operator === "multiplication") {
        console.log(answer.firstNumber * answer.secondNumber);
    }
    else if (answer.operator === "Division") {
        console.log(answer.firstNumber / answer.secondNumber);
    }
    else if (answer.operator === "exponenciation") {
        console.log(answer.firstNumber ** answer.secondNumber);
    }
    else {
        console.log("please select a valid operator");
    }
    const calculateMore = await inquirer.prompt({
        name: "more",
        type: "confirm",
        message: "Do you want more calculation"
    });
    if (!calculateMore.more) {
        loop = false;
        console.log(`Thank you`);
    }
}
