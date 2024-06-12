#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
// import choices from 'inquirer/lib/objects/choices.js';
// import { toASCII } from 'punycode';
console.log(chalk.redBright.bold("<<<===========++++++=======================================+++++++++============>>>"));
console.log(chalk.blueBright.bold("^^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^"));
console.log(chalk.blue.bold("<<<<<<<<<<<<<<----Welcome To G.RAUF----Quiz Home---->>>>>>>>>>>>>>"));
console.log(chalk.redBright.bold("<<<===========++++++=======================================+++++++++============>>>"));
console.log(chalk.blueBright.bold("^^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^"));
console.log(chalk.blueBright.bold("\n"));
let point = 2;
//question1
console.log(chalk.redBright.bold("<<<===========++++++=======================================+++++++++============>>>"));
console.log(chalk.blueBright.bold("^^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^"));
console.log(chalk.blueBright.bold("\n"));
console.log(chalk.greenBright.bold("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< GOOD >>> LUCK <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<"));
let question1 = await inquirer.prompt([
    {
        type: 'list',
        name: 'question1',
        message: 'what is typescript file name?',
        choices: [
            '.js',
            '.html',
            '.ts',
            '.node'
        ]
    }
]);
if (question1.question1 == ".ts") {
    console.log(chalk.bgGreenBright.bold("RIGHT ANSWER", "Congratulations"));
    point++;
}
else {
    console.log(chalk.bgRed.bold("Oops! YOU LOST", "Try Again!"));
}
let point2 = 2;
//question 2
console.log(chalk.redBright.bold("<<<===========++++++=======================================+++++++++============>>>"));
console.log(chalk.blueBright.bold("^^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^"));
console.log(chalk.blueBright.bold("\n"));
let question2 = await inquirer.prompt([
    {
        type: 'list',
        name: 'question2',
        message: 'how to compile your code?',
        choices: [
            'node.js',
            '.tsc',
            'main.tsc',
            "node.ts",
        ]
    }
]);
if (question2.question2 == "main.tsc", ".tsc") {
    console.log(chalk.bgGreenBright.bold("RIGHT ANSWER", "Congratulations"));
    point++;
}
else {
    console.log(chalk.bgRed.bold("Oops! YOU LOST", "Try Again!"));
}
let point3 = 2;
//question 3
console.log(chalk.redBright.bold("<<<===========++++++=======================================+++++++++============>>>"));
console.log(chalk.blueBright.bold("^^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^"));
console.log(chalk.blueBright.bold("\n"));
let question3 = await inquirer.prompt([
    {
        type: 'list',
        name: 'question3',
        message: 'which one is variables?,see?',
        choices: [
            'let',
            'not',
            '$',
            'code'
        ]
    }
]);
if (question3.question3 == "let") {
    console.log(chalk.bgGreenBright.bold("RIGHT ANSWER", "Congratulations"));
    point++;
}
else {
    console.log(chalk.bgRed.bold("Oops! YOU LOST", "Try Again!"));
}
//question 4
console.log(chalk.redBright.bold("<<<===========++++++=======================================+++++++++============>>>"));
console.log(chalk.blueBright.bold("^^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^"));
console.log(chalk.blueBright.bold("\n"));
let question4 = await inquirer.prompt([
    {
        type: 'list',
        name: 'question4',
        message: 'TypeScript is an open-source object-oriented language?',
        choices: [
            'False',
            'True',
        ]
    }
]);
if (question4.question4 == "True") {
    console.log(chalk.bgGreenBright.bold("RIGHT ANSWER", "Congratulations"));
    point++;
}
else {
    console.log(chalk.bgRed.bold("Oops! YOU LOST", "Try Again!"));
}
//question5
console.log(chalk.redBright.bold("<<<===========++++++=======================================+++++++++============>>>"));
console.log(chalk.blueBright.bold("^^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^"));
console.log(chalk.blueBright.bold("\n"));
let question5 = await inquirer.prompt([
    {
        type: 'list',
        name: 'question5',
        message: ' Variables can be declared using: var, let, NOT, and const.\n which one is not variable?\n',
        choices: [
            'var',
            'const',
            'let',
            'NOT',
        ]
    }
]);
if (question5.question5 == "NOT") {
    console.log(chalk.bgGreenBright.bold("RIGHT ANSWER", "Congratulations"));
    point++;
}
else {
    console.log(chalk.bgRed.bold("Oops! YOU LOST", "Try Again!"));
}
//Question6
console.log(chalk.redBright.bold("<<<===========++++++=======================================+++++++++============>>>"));
console.log(chalk.blueBright.bold("^^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^"));
console.log(chalk.blueBright.bold("\n"));
let question6 = await inquirer.prompt([
    {
        type: 'list',
        name: 'question6',
        message: 'String is primitive data type that is not used for store text data? ',
        choices: [
            'True',
            'False',
        ]
    }
]);
if (question6.question6 == "False") {
    console.log(chalk.bgGreenBright.bold("RIGHT ANSWER", "Congratulations"));
    point++;
}
else {
    console.log(chalk.bgRed.bold("Oops! YOU LOST", "Try Again!"));
}
//question7
console.log(chalk.redBright.bold("<<<===========++++++=======================================+++++++++============>>>"));
console.log(chalk.blueBright.bold("^^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^"));
console.log(chalk.blueBright.bold("\n"));
let question7 = await inquirer.prompt([
    {
        type: 'list',
        name: 'question7',
        message: 'Which of the following is not a JavaScript data type?',
        choices: [
            'String',
            'Number',
            'Boolean',
            'Object',
        ]
    }
]);
if (question7.question7 == "Object") {
    console.log(chalk.bgGreenBright.bold("RIGHT ANSWER", "Congratulations"));
    point++;
}
else {
    console.log(chalk.bgRed.bold("Oops! YOU LOST", "Try Again!"));
}
//question8
console.log(chalk.redBright.bold("<<<===========++++++=======================================+++++++++============>>>"));
console.log(chalk.blueBright.bold("^^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^"));
console.log(chalk.blueBright.bold("\n"));
let question8 = await inquirer.prompt([
    {
        type: 'list',
        name: 'question8',
        message: 'let fruits: string[] = Name of this function?',
        choices: [
            'if',
            'else if',
            'array',
            'All is use',
            `Not a above`,
        ]
    }
]);
if (question8.question8 == "array") {
    console.log(chalk.bgGreenBright.bold("RIGHT ANSWER", "Congratulations"));
    point++;
}
else {
    console.log(chalk.bgRed.bold("Oops! YOU LOST", "Try Again!"));
}
//question9
console.log(chalk.redBright.bold("<<<===========++++++=======================================+++++++++============>>>"));
console.log(chalk.blueBright.bold("^^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^"));
console.log(chalk.blueBright.bold("\n"));
let question9 = await inquirer.prompt([
    {
        type: 'list',
        name: 'question9',
        message: 'The for loop is used to execute a block of code a given number of times, thats right?',
        choices: [
            'True',
            'False',
        ]
    }
]);
if (question9.question9 == "True") {
    console.log(chalk.bgGreenBright.bold("RIGHT ANSWER", "Congratulations"));
    point++;
}
else {
    console.log(chalk.bgRed.bold("Oops! YOU LOST", "Try Again!"));
}
//question10
console.log(chalk.redBright.bold("<<<===========++++++=======================================+++++++++============>>>"));
console.log(chalk.blueBright.bold("^^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^"));
console.log(chalk.blueBright.bold("\n"));
let question10 = await inquirer.prompt([
    {
        type: 'list',
        name: 'question10',
        message: '("Hello ", "Steve"); // returns ??? "..." ',
        choices: [
            'SteveHello',
            'Hello',
            'Hello-steve',
            'Hello Steve',
        ]
    }
]);
if (question10.question10 == "Hello Steve") {
    console.log(chalk.bgGreenBright.bold("RIGHT ANSWER", "Congratulations"));
    point++;
}
else {
    console.log(chalk.bgRed.bold("Oops! YOU LOST", "Try Again!"));
}
console.log(chalk.redBright.bold("<<<===========++++++=======================================+++++++++============>>>"));
console.log(chalk.blueBright.bold("^^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^"));
console.log(chalk.redBright.bold("<<<===========++++++=======================================+++++++++============>>>"));
console.log(chalk.blueBright.bold("^^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^"));
//question11
console.log(chalk.blueBright.bold("\n"));
let question11 = await inquirer.prompt([
    {
        type: 'list',
        name: 'question11',
        message: 'Which of the following is a valid TypeScript primitive data type?',
        choices: [
            'array',
            'tuple ',
            'undefined',
            ' object',
        ]
    }
]);
if (question11.question11 == "undefined") {
    console.log(chalk.bgGreenBright.bold("RIGHT ANSWER", "Congratulations"));
    point++;
}
else {
    console.log(chalk.bgRed.bold("Oops! YOU LOST", "Try Again!"));
}
console.log(chalk.redBright.bold("<<<===========++++++=======================================+++++++++============>>>"));
console.log(chalk.blueBright.bold("^^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^"));
//QUESTION 12
console.log(chalk.blueBright.bold("\n"));
let question12 = await inquirer.prompt([
    {
        type: 'list',
        name: 'question12',
        message: 'What is the purpose of the else clause in an if-else statement?',
        choices: [
            '(a) To specify an alternative block of code to execute if the condition',
            '(b) To specify an alternative block of code to execute if the condition',
            '(c) To repeat the same block of code d) To exit the program',
            '(d) To exit the program',
        ]
    }
]);
if (question12.question12 == "(b) To specify an alternative block of code to execute if the condition") {
    console.log(chalk.bgGreenBright.bold("RIGHT ANSWER", "Congratulations"));
    point++;
}
else {
    console.log(chalk.bgRed.bold("Oops! YOU LOST", "Try Again!"));
}
console.log(chalk.redBright.bold("<<<===========++++++=======================================+++++++++============>>>"));
console.log(chalk.blueBright.bold("^^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^"));
//QUESTION 13
console.log(chalk.blueBright.bold("\n"));
let question13 = await inquirer.prompt([
    {
        type: 'list',
        name: 'question13',
        message: ' What is the syntax for an if statement in TypeScript?',
        choices: [
            '(a) if (condition) => { code }',
            '(b) if [condition] { code }',
            '(c) if (condition) { code }',
            '(d) if = (condition) { code }',
        ]
    }
]);
if (question13.question13 == "(c) if (condition) { code }") {
    console.log(chalk.bgGreenBright.bold("RIGHT ANSWER", "Congratulations"));
    point++;
}
else {
    console.log(chalk.bgRed.bold("Oops! YOU LOST", "Try Again!"));
}
console.log(chalk.redBright.bold("<<<===========++++++=======================================+++++++++============>>>"));
console.log(chalk.blueBright.bold("^^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^"));
//QUESTION 14
console.log(chalk.blueBright.bold("\n"));
let question14 = await inquirer.prompt([
    {
        type: 'list',
        name: 'question14',
        message: ' What is the purpose of the if-else statement in TypeScript?',
        choices: [
            '(a) To declare variables',
            '(b) To loop through arrays',
            '(c) To make decisions based on conditions',
            '(d) To throw errors',
        ]
    }
]);
if (question14.question14 == "(c) To make decisions based on conditions") {
    console.log(chalk.bgGreenBright.bold("RIGHT ANSWER", "Congratulations"));
    point++;
}
else {
    console.log(chalk.bgRed.bold("Oops! YOU LOST", "Try Again!"));
}
console.log(chalk.redBright.bold("<<<===========++++++=======================================+++++++++============>>>"));
console.log(chalk.blueBright.bold("^^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^"));
//QUESTION 15
console.log(chalk.blueBright.bold("\n"));
let question15 = await inquirer.prompt([
    {
        type: 'list',
        name: 'question15',
        message: 'What is the purpose of the break statement in a loop in TypeScript?',
        choices: [
            '(a) To exit the loop immediately',
            '(b) To execute the loop body again',
            '(c) To end the program',
            '(d) To skip to the next iteration of the loop',
        ]
    }
]);
if (question15.question15 == "(d) To skip to the next iteration of the loop") {
    console.log(chalk.bgGreenBright.bold("RIGHT ANSWER", "Congratulations"));
    point++;
}
else {
    console.log(chalk.bgRed.bold("Oops! YOU LOST", "Try Again!"));
}
console.log(chalk.redBright.bold("<<<===========++++++=======================================+++++++++============>>>"));
console.log(chalk.blueBright.bold("^^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^"));
//QUESTION 16
console.log(chalk.blueBright.bold("\n"));
let question16 = await inquirer.prompt([
    {
        type: 'list',
        name: 'question16',
        message: 'What is the purpose of the for loop in TypeScript?',
        choices: [
            '(a) To execute a block of code repeatedly for a specified number of iterations',
            '(b) To execute a block of code only once',
            '(c) To skip a block of code',
            '(d) To end a program',
        ]
    }
]);
if (question16.question16 == "(a) To execute a block of code repeatedly for a specified number of iterations") {
    console.log(chalk.bgGreenBright.bold("RIGHT ANSWER", "Congratulations"));
    point++;
}
else {
    console.log(chalk.bgRed.bold("Oops! YOU LOST", "Try Again!"));
}
console.log(chalk.redBright.bold("<<<===========++++++=======================================+++++++++============>>>"));
console.log(chalk.blueBright.bold("^^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^"));
// QUESTION 17
console.log(chalk.blueBright.bold("\n"));
let question17 = await inquirer.prompt([
    {
        type: 'list',
        name: 'question17',
        message: 'What is the purpose of the while loop in TypeScript?',
        choices: [
            '(A) To execute a block of code repeatedly while a condition is true',
            '(B) To execute a block of code only once',
            '(C) To skip a block of code',
            '(D) To end a program',
        ]
    }
]);
if (question17.question17 == "(A) To execute a block of code repeatedly while a condition is true") {
    console.log(chalk.bgGreenBright.bold("RIGHT ANSWER", "Congratulations"));
    point++;
}
else {
    console.log(chalk.bgRed.bold("Oops! YOU LOST", "Try Again!"));
}
console.log(chalk.redBright.bold("<<<===========++++++=======================================+++++++++============>>>"));
console.log(chalk.blueBright.bold("^^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^"));
//QUESTION 18
console.log(chalk.blueBright.bold("\n"));
let question18 = await inquirer.prompt([
    {
        type: 'list',
        name: 'question18',
        message: ' How many conditions can an if-else statement have?',
        choices: [
            '(a) Only one',
            '(b) Two',
            '(c) Multiple',
            '(d) None',
        ]
    }
]);
if (question18.question18 == "(c) Multiple") {
    console.log(chalk.bgGreenBright.bold("RIGHT ANSWER", "Congratulations"));
    point++;
}
else {
    console.log(chalk.bgRed.bold("Oops! YOU LOST", "Try Again!"));
}
console.log(chalk.redBright.bold("<<<===========++++++=======================================+++++++++============>>>"));
console.log(chalk.blueBright.bold("^^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^"));
//QUESTION 19
console.log(chalk.blueBright.bold("\n"));
let question19 = await inquirer.prompt([
    {
        type: 'list',
        name: 'question19',
        message: ' What is the difference between if-else and switch statements?',
        choices: [
            '(a) If-else is used for conditions, switch is used for values',
            '(b) If-else is used for values, switch is used for conditions',
            '(c) If-else is used for arrays, switch is used for objects',
            '(d) If-else is used for objects, switch is used for arrays',
        ]
    }
]);
if (question19.question19 == "(a) If-else is used for conditions, switch is used for values") {
    console.log(chalk.bgGreenBright.bold("RIGHT ANSWER", "Congratulations"));
    point++;
}
else {
    console.log(chalk.bgRed.bold("Oops! YOU LOST", "Try Again!"));
}
console.log(chalk.redBright.bold("<<<===========++++++=======================================+++++++++============>>>"));
console.log(chalk.blueBright.bold("^^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^"));
//QUESTION 20
console.log(chalk.blueBright.bold("\n"));
let question20 = await inquirer.prompt([
    {
        type: 'list',
        name: 'question20',
        message: '  Can an if-else statement be nested? it`s possible ?',
        choices: [
            '(a) Only if the conditions are different',
            '(b) Only if the conditions are the same',
            '(c) No',
            '(d) Yes',
        ]
    }
]);
if (question20.question20 == "(d) Yes") {
    console.log(chalk.bgGreenBright.bold("RIGHT ANSWER", "Congratulations"));
    point++;
}
else {
    console.log(chalk.bgRed.bold("Oops! YOU LOST", "Try Again!"));
}
console.log(chalk.redBright.bold("<<<===========++++++=======================================+++++++++============>>>"));
console.log(chalk.blueBright.bold("^^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^"));
//QUESTION 21
console.log(chalk.blueBright.bold("\n"));
let question21 = await inquirer.prompt([
    {
        type: 'list',
        name: 'question21',
        message: '  What happens if the condition in an if statement is not a boolean value?',
        choices: [
            '(a) It throws an error',
            '(b) It converts the value to a boolean',
            '(c) It executes the code anyway',
            '(d) It skips the code',
        ]
    }
]);
if (question21.question21 == "(b) It converts the value to a boolean") {
    console.log(chalk.bgGreenBright.bold("RIGHT ANSWER", "Congratulations"));
    point++;
}
else {
    console.log(chalk.bgRed.bold("Oops! YOU LOST", "Try Again!"));
}
console.log(chalk.redBright.bold("<<<===========++++++=======================================+++++++++============>>>"));
console.log(chalk.blueBright.bold("^^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^"));
//QUESTION 22
console.log(chalk.blueBright.bold("\n"));
let question22 = await inquirer.prompt([
    {
        type: 'list',
        name: 'question22',
        message: ' Can an if-else statement be used with a ternary operator?',
        choices: [
            '(a) Yes',
            '(b) No',
            '(c) Only if the conditions are the same',
            '(d) Only if the conditions are different',
        ]
    }
]);
if (question22.question22 == "(a) Yes") {
    console.log(chalk.bgGreenBright.bold("RIGHT ANSWER", "Congratulations"));
    point++;
}
else {
    console.log(chalk.bgRed.bold("Oops! YOU LOST", "Try Again!"));
}
console.log(chalk.redBright.bold("<<<===========++++++=======================================+++++++++============>>>"));
console.log(chalk.blueBright.bold("^^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^"));
//QUESTION 23
console.log(chalk.blueBright.bold("\n"));
let question23 = await inquirer.prompt([
    {
        type: 'list',
        name: 'question23',
        message: ' What is the purpose of the else if clause in an if-else statement?',
        choices: [
            '(a) To exit the program',
            '(b) To specify an alternative block of code to execute if the first condition is false',
            '(c) To repeat the same block of code',
            '(d) To specify an alternative block of code to execute if the first condition is true',
        ]
    }
]);
if (question23.question23 == "(b) To specify an alternative block of code to execute if the first condition is false") {
    console.log(chalk.bgGreenBright.bold("RIGHT ANSWER", "Congratulations"));
    point++;
}
else {
    console.log(chalk.bgRed.bold("Oops! YOU LOST", "Try Again!"));
}
console.log(chalk.redBright.bold("<<<===========++++++=======================================+++++++++============>>>"));
console.log(chalk.blueBright.bold("^^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^"));
//QUESTION 24
console.log(chalk.blueBright.bold("\n"));
let question24 = await inquirer.prompt([
    {
        type: 'list',
        name: 'question24',
        message: ' What is the benefit of using type annotations for function parameters and return values?',
        choices: [
            '(A) Makes functions more complex to write.',
            '(B) Improves code readability, maintainability, and catches potential errors early.',
            '(C) TypeScript requires type annotations for all functions. ',
            '(D) Provides no significant benefits.',
        ]
    }
]);
if (question24.question24 == "(B) Improves code readability, maintainability, and catches potential errors early.") {
    console.log(chalk.bgGreenBright.bold("RIGHT ANSWER", "Congratulations"));
    point++;
}
else {
    console.log(chalk.bgRed.bold("Oops! YOU LOST", "Try Again!"));
}
console.log(chalk.redBright.bold("<<<===========++++++=======================================+++++++++============>>>"));
console.log(chalk.blueBright.bold("^^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^"));
//QUESTION 25
console.log(chalk.blueBright.bold("\n"));
let question25 = await inquirer.prompt([
    {
        type: 'list',
        name: 'question25',
        message: ' 	What are the purposes of parameters in a function?',
        choices: [
            '(A) To define the names of variables used within the function.',
            '(B) To specify the return value of the function. ',
            '(C) To control the flow of execution within the function.',
            '(D) Parameters are not necessary for all functions.',
        ]
    }
]);
if (question25.question25 == "(A) To define the names of variables used within the function.") {
    console.log(chalk.bgGreenBright.bold("RIGHT ANSWER", "Congratulations"));
    point++;
}
else {
    console.log(chalk.bgRed.bold("Oops! YOU LOST", "Try Again!"));
}
console.log(chalk.redBright.bold("<<<===========++++++=======================================+++++++++============>>>"));
console.log(chalk.blueBright.bold("^^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^"));
//QUESTION 26
console.log(chalk.blueBright.bold("\n"));
let question26 = await inquirer.prompt([
    {
        type: 'list',
        name: 'question26',
        message: ' Can you define optional parameters in TypeScript functions?',
        choices: [
            '(A) No, all parameters must be mandatory.',
            '(B) Yes, by adding a question mark (?) after the parameter name.',
            '(C) NO, by adding a question mark (?) after the parameter name',
            '(D) None of these',
        ]
    }
]);
if (question26.question26 == "(B) Yes, by adding a question mark (?) after the parameter name.") {
    console.log(chalk.bgGreenBright.bold("RIGHT ANSWER", "Congratulations"));
    point++;
}
else {
    console.log(chalk.bgRed.bold("Oops! YOU LOST", "Try Again!"));
}
console.log(chalk.redBright.bold("<<<===========++++++=======================================+++++++++============>>>"));
console.log(chalk.blueBright.bold("^^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^"));
//QUESTION 27
console.log(chalk.blueBright.bold("\n"));
let question27 = await inquirer.prompt([
    {
        type: 'list',
        name: 'question27',
        message: ' 	What is the syntax for defining a function in TypeScript?',
        // >>>>>>>>>>>>>>>>>>>>>>>>>TypeScript>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        //          function functionName(parameters: parameterTypes): returnType {
        //                            Function body }
        choices: [
            'A. All of the above.',
            'B. Only option A is correct.',
            'C. Only options A and B are correct.',
            'D. Only options B and C are correct.',
        ]
    }
]);
if (question27.question27 == "A. All of the above.") {
    console.log(chalk.bgGreenBright.bold("RIGHT ANSWER", "Congratulations"));
    point++;
}
else {
    console.log(chalk.bgRed.bold("Oops! YOU LOST", "Try Again!"));
}
console.log(chalk.redBright.bold("<<<===========++++++=======================================+++++++++============>>>"));
console.log(chalk.blueBright.bold("^^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^"));
//output condition
console.log(chalk.blueBright.bold("\n"));
console.log(chalk.blueBright.bold("your score is: " + point));
console.log(chalk.blueBright.bold("\n"));
if (point >= 25) {
    console.log(chalk.bgGreenBright.bold("congratulation! you Win"));
}
else {
    console.log(chalk.bgRed.bold("sorry!!! you are not qualified!"));
}
console.log(chalk.redBright.bold("<<<===========++++++=======================================+++++++++============>>>"));
console.log(chalk.blueBright.bold("^^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^"));
console.log(chalk.redBright.bold("<<<===========++++++=======================================+++++++++============>>>"));
console.log(chalk.blueBright.bold("^^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^^^^^^||||^^^^^^^^^^^^^^"));
console.log(chalk.blueBright.bold("\n"));
console.log(chalk.blueBright.bold("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< GOOD >>> BYE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<"));
console.log("<<<<<  quiz answers key  >>>>>>>>)");
console.log(chalk.greenBright.bold("\n"));
console.log(chalk.greenBright.bold("QUESTION 1: .ts "));
console.log(chalk.greenBright.bold("QUESTION 2: .main.ts, .ts "));
console.log(chalk.greenBright.bold("QUESTION 3: let "));
console.log(chalk.greenBright.bold("QUESTION 4: true "));
console.log(chalk.greenBright.bold("QUESTION 5: NOT "));
console.log(chalk.greenBright.bold("QUESTION 6: False "));
console.log(chalk.greenBright.bold("QUESTION 7: Object "));
console.log(chalk.greenBright.bold("QUESTION 8: Array "));
console.log(chalk.greenBright.bold("QUESTION 9: true "));
console.log(chalk.greenBright.bold("QUESTION 10: HELLO STEVE "));
console.log(chalk.greenBright.bold("QUESTION 11: undefined "));
console.log(chalk.greenBright.bold("QUESTION 12: (b) "));
console.log(chalk.greenBright.bold("QUESTION 13: (c) "));
console.log(chalk.greenBright.bold("QUESTION 14: (c) "));
console.log(chalk.greenBright.bold("QUESTION 15: (d) "));
console.log(chalk.greenBright.bold("QUESTION 16: (a) "));
console.log(chalk.greenBright.bold("QUESTION 17: (A) "));
console.log(chalk.greenBright.bold("QUESTION 18: (C) "));
console.log(chalk.greenBright.bold("QUESTION 19: (a) "));
console.log(chalk.greenBright.bold("QUESTION 20: (d) "));
console.log(chalk.greenBright.bold("QUESTION 21: (b) "));
console.log(chalk.greenBright.bold("QUESTION 22: (a) "));
console.log(chalk.greenBright.bold("QUESTION 23: (b) "));
console.log(chalk.greenBright.bold("QUESTION 24: (B) "));
console.log(chalk.greenBright.bold("QUESTION 25: (A) "));
console.log(chalk.greenBright.bold("QUESTION 26: (B) "));
console.log(chalk.greenBright.bold("QUESTION 27: (A) "));
