/*const prompt = require('prompt-sync')();*/
const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

field = [
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
];

//Print instructions

console.log('Welcome to "Find your Hat". Move the asterisk to find the hat hidden in the field. Press "r" to move right, "l" to move left, "u" to move up and "d" to move down.');


let asteriskPosition = [0, 0];
console.log("Position: " + asteriskPosition);
console.log(field.length);
console.log(field[0].length);
//console.log(field[].length);
let condition = true;
//Prompt move (while loop)
while (true) {
    for (let i = 0; i < field.length; i++) {
        console.log(field[i].join(''));
    };
    const direction = prompt('Choose a direction: ');
    //Move Right
    if (direction == 'r' || direction == 'R') {
        //Update asterisk position and check
        //1. Update asterisk position
        asteriskPosition[1] += 1;
            //1.1 Check new position
        console.log("Position: " + asteriskPosition);
            
        //2. Check if valid move
            //2.1 It's a hole
            if (asteriskPosition[0] >= field.length || asteriskPosition[0] < 0 || asteriskPosition[1] >= field[0].length || asteriskPosition[1] < 0) {
                console.log("Invalid move. You cannot leave the field. Please try again.");
                asteriskPosition[1] -= 1;
                continue;
            } else if (field[asteriskPosition[0]][asteriskPosition[1]] == pathCharacter) {
                console.log("Invalid move. You cannot backtrack. Please try again.");
                asteriskPosition[1] -= 1;
                continue;
            }else if (field[asteriskPosition[0]][asteriskPosition[1]] == hole) {
                console.log("You fell into a hole. GAME OVER");
                break;
            } else if (field[asteriskPosition[0]][asteriskPosition[1]] == hat) {
                console.log("You found the hat! YOU WIN");
                break;
            } else if (field[asteriskPosition[0]][asteriskPosition[1]] == fieldCharacter) {
                field[asteriskPosition[0]][asteriskPosition[1]] = "*";
            }
    } else if (direction == 'l' || direction == 'L') {
        //Update asterisk position and check
        //1. Update asterisk position
        asteriskPosition[1] -= 1;
            //1.1 Check new position
        console.log("Position: " + asteriskPosition);
            
        //2. Check if valid move
            //2.1 It's a hole
            if (asteriskPosition[0] >= field.length || asteriskPosition[0] < 0 || asteriskPosition[1] >= field[0].length || asteriskPosition[1] < 0) {
                console.log("Invalid move. You cannot leave the field. Please try again.");
                asteriskPosition[1] += 1;
                continue;
            } else if (field[asteriskPosition[0]][asteriskPosition[1]] == pathCharacter) {
                console.log("Invalid move. You cannot backtrack. Please try again.");
                asteriskPosition[1] += 1;
                continue;
            }else if (field[asteriskPosition[0]][asteriskPosition[1]] == hole) {
                console.log("You fell into a hole. GAME OVER");
                break;
            } else if (field[asteriskPosition[0]][asteriskPosition[1]] == hat) {
                console.log("You found the hat! YOU WIN");
                break;
            } else if (field[asteriskPosition[0]][asteriskPosition[1]] == fieldCharacter) {
                field[asteriskPosition[0]][asteriskPosition[1]] = "*";
            }
    } else if (direction == 'u' || direction == 'U') {
        //Update asterisk position and check
        //1. Update asterisk position
        asteriskPosition[0] -= 1;
            //1.1 Check new position
        console.log("Position: " + asteriskPosition);
            
        //2. Check if valid move
            //2.1 It's a hole
            if (asteriskPosition[0] >= field.length || asteriskPosition[0] < 0 || asteriskPosition[1] >= field[0].length || asteriskPosition[1] < 0) {
                console.log("Invalid move. You cannot leave the field. Please try again.");
                asteriskPosition[0] += 1;
                continue;
            } else if (field[asteriskPosition[0]][asteriskPosition[1]] == pathCharacter) {
                console.log("Invalid move. You cannot backtrack. Please try again.");
                asteriskPosition[0] += 1;
                continue;
            } else if (field[asteriskPosition[0]][asteriskPosition[1]] == hole) {
                console.log("You fell into a hole. GAME OVER");
                break;
            } else if (field[asteriskPosition[0]][asteriskPosition[1]] == hat) {
                console.log("You found the hat! YOU WIN");
                break;
            } else if (field[asteriskPosition[0]][asteriskPosition[1]] == fieldCharacter) {
                field[asteriskPosition[0]][asteriskPosition[1]] = "*";
            }
    } else if (direction == 'd' || direction == 'D') {
        //Update asterisk position and check
        //1. Update asterisk position
        asteriskPosition[0] += 1;
            //1.1 Check new position
        console.log("Position: " + asteriskPosition);
            
        //2. Check if valid move
            //2.1 It's a hole
            if (asteriskPosition[0] >= field.length || asteriskPosition[0] < 0 || asteriskPosition[1] >= field[0].length || asteriskPosition[1] < 0) {
                console.log("Invalid move. You cannot leave the field. Please try again.");
                asteriskPosition[0] -= 1;
                continue;
            } else if (field[asteriskPosition[0]][asteriskPosition[1]] == pathCharacter) {
                console.log("Invalid move. You cannot backtrack. Please try again.");
                asteriskPosition[0] -= 1;
                continue;
            }else if (field[asteriskPosition[0]][asteriskPosition[1]] == hole) {
                console.log("You fell into a hole. GAME OVER");
                break;
            } else if (field[asteriskPosition[0]][asteriskPosition[1]] == hat) {
                console.log("You found the hat! YOU WIN");
                break;
            } else if (field[asteriskPosition[0]][asteriskPosition[1]] == fieldCharacter) {
                field[asteriskPosition[0]][asteriskPosition[1]] = "*";
            }
    } else {
        console.log('Invalid choice. Choose "r", "l", "u" or "d".')
        newField.prompt()
    }
}



// console.log(`Hey there ${direction}`);

// "Press CTRL+C to exit"

/*
Print instructions
Print field
Prompt move (while loop)
Calculate new position of asterisk
Check if new position of asterisk is hole -> lose
Check if new position of asterisk is hat -> win
Check if new position of asterisk is fieldCharacter
Update field
Loop*/
