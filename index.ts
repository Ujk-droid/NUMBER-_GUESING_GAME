#!/usr/bin/env node

import inquirer from "inquirer";
import chalk, { chalkStderr } from "chalk";


console.log(chalk.bgGreen("==========*wellcome to the game*=========="));

const randomNumber = Math.floor(Math.random() *10  +1);
const answer =await inquirer.prompt([
    {
        name: "userGuessNumber",
        type:"number",
        message:"please gusse a number 1 to 10 ",
    },
]);
console.log(chalk.bgGreen("====================***===================="))
if (answer. userGuessNumber===randomNumber){
    console.log(chalk.bgGreen("====================congratulation you guess right nmber"))
}else{
    console.log(chalk.bgGreen("sorry you guess wrong number"))
}

