#! /usr/bin/env node

import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";

let myBalance = 10000;
let myPin = 1234;

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your Pin# ",
        type: "number"
    }
]);

if (pinAnswer.pin === myPin) {
    console.log("Correct Pin");

    let operationAns = await inquirer.prompt([{
        name: "Operation",
        message: "Please Select your desired option",
        type: "list",
        choices: ["withdraw", "check balance", "Fast Cash"]
    }]);

    if (operationAns.Operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your desired amount",
                type: "number"
            }
        ]);

        myBalance -= amountAns.amount;
        console.log(`Your remaining balance is: ${myBalance}`);
        
    } else if (operationAns.Operation === "check balance") {
        console.log(`Your balance is: ${myBalance}`);
        
    } else if (operationAns.Operation === "Fast Cash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Select a Fast Cash amount",
                type: "list",
                choices: [
                    { name: "1000", value: 1000 },
                    { name: "2000", value: 2000 },
                    { name: "5000", value: 5000 },
                    { name: "10000", value: 10000 }
                ]
            }
        ]);

        myBalance -= fastCashAns.amount;
        console.log(`Your remaining balance is: ${myBalance}`);
    }
} else {
    console.log("Incorrect Pin");
}
