// Prompt call with "sigint: true" to allow exit from the app using the "CTRL+C" command
const prompt = require('prompt-sync')({ sigint: true });

// Setting the character types
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

// Declare game field
field = [
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
];

//Clear console
console.clear();

//Print instructions
console.log('Welcome to "Find your Hat". Move the asterisk to find the hat hidden in the field. Press "r" to move right, "l" to move left, "u" to move up and "d" to move down.');

// Initialise asterisk position and check field settings
let asteriskPosition = [0, 0];
console.log("Position: " + asteriskPosition);
console.log(field.length);
console.log(field[0].length);

// Initialise prompt loop
while (true) {
    // Clear console
    console.clear();
    //Print instructions
    console.log('Welcome to "Find your Hat". Move the asterisk to find the hat hidden in the field. Press "r" to move right, "l" to move left, "u" to move up and "d" to move down.');
    // Print game field
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
            
        //2. Check new positon
            //2.1 If the new position is outside the field
            if (asteriskPosition[0] >= field.length || asteriskPosition[0] < 0 || asteriskPosition[1] >= field[0].length || asteriskPosition[1] < 0) {
                console.log("Invalid move. You cannot leave the field. Please try again.");
                // Return asterisk to previous position
                asteriskPosition[1] -= 1;
                continue;
            } 
            //2.2 If the new position is on a position that has already been used
            else if (field[asteriskPosition[0]][asteriskPosition[1]] == pathCharacter) {
                console.log("Invalid move. You cannot backtrack. Please try again.");
                // Return asterisk to previous position
                asteriskPosition[1] -= 1;
                continue;
            }
            //2.3 If the new position fall on a hole
            else if (field[asteriskPosition[0]][asteriskPosition[1]] == hole) {
                console.log("You fell into a hole. GAME OVER");
                break;
            } 
            //2.4 If the new position has the hat
            else if (field[asteriskPosition[0]][asteriskPosition[1]] == hat) {
                console.log("You found the hat! YOU WIN");
                break;
            }
            //2.5 If new position is a valid move
            else if (field[asteriskPosition[0]][asteriskPosition[1]] == fieldCharacter) {
                field[asteriskPosition[0]][asteriskPosition[1]] = "*";
            }
    }
    //Move Left
    else if (direction == 'l' || direction == 'L') {
        //Update asterisk position and check
        //1. Update asterisk position
        asteriskPosition[1] -= 1;
            //1.1 Check new position
        console.log("Position: " + asteriskPosition);
            
        //2. Check if valid move
            //2.1 If the new position is outside the field
            if (asteriskPosition[0] >= field.length || asteriskPosition[0] < 0 || asteriskPosition[1] >= field[0].length || asteriskPosition[1] < 0) {
                console.log("Invalid move. You cannot leave the field. Please try again.");
                asteriskPosition[1] += 1;
                continue;
            } 
            //2.2 If the new position is on a position that has already been used
            else if (field[asteriskPosition[0]][asteriskPosition[1]] == pathCharacter) {
                console.log("Invalid move. You cannot backtrack. Please try again.");
                asteriskPosition[1] += 1;
                continue;
            }
            //2.3 If the new position fall on a hole
            else if (field[asteriskPosition[0]][asteriskPosition[1]] == hole) {
                console.log("You fell into a hole. GAME OVER");
                break;
            }
            //2.4 If the new position has the hat
            else if (field[asteriskPosition[0]][asteriskPosition[1]] == hat) {
                console.log("You found the hat! YOU WIN");
                break;
            }
            //2.5 If new position is a valid move
            else if (field[asteriskPosition[0]][asteriskPosition[1]] == fieldCharacter) {
                field[asteriskPosition[0]][asteriskPosition[1]] = "*";
            }
    }
    //Move Up
    else if (direction == 'u' || direction == 'U') {
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
            }
            //2.2 If the new position is on a position that has already been used
            else if (field[asteriskPosition[0]][asteriskPosition[1]] == pathCharacter) {
                console.log("Invalid move. You cannot backtrack. Please try again.");
                asteriskPosition[0] += 1;
                continue;
            } 
            //2.3 If the new position fall on a hole
            else if (field[asteriskPosition[0]][asteriskPosition[1]] == hole) {
                console.log("You fell into a hole. GAME OVER");
                break;
            } 
            //2.4 If the new position has the hat
            else if (field[asteriskPosition[0]][asteriskPosition[1]] == hat) {
                console.log("You found the hat! YOU WIN");
                break;
            } 
            //2.5 If new position is a valid move
            else if (field[asteriskPosition[0]][asteriskPosition[1]] == fieldCharacter) {
                field[asteriskPosition[0]][asteriskPosition[1]] = "*";
            }
    }
    //Move Down
    else if (direction == 'd' || direction == 'D') {
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
            }
            //2.2 If the new position is on a position that has already been used
            else if (field[asteriskPosition[0]][asteriskPosition[1]] == pathCharacter) {
                console.log("Invalid move. You cannot backtrack. Please try again.");
                asteriskPosition[0] -= 1;
                continue;
            }
            //2.3 If the new position fall on a hole
            else if (field[asteriskPosition[0]][asteriskPosition[1]] == hole) {
                console.log("You fell into a hole. GAME OVER");
                break;
            } 
            //2.4 If the new position has the hat
            else if (field[asteriskPosition[0]][asteriskPosition[1]] == hat) {
                console.log("You found the hat! YOU WIN");
                break;
            } 
            //2.5 If new position is a valid move
            else if (field[asteriskPosition[0]][asteriskPosition[1]] == fieldCharacter) {
                field[asteriskPosition[0]][asteriskPosition[1]] = "*";
            }
    }
    // Invalid input
    else {
        console.log('Invalid choice. Choose "r", "l", "u" or "d".')
        newField.prompt()
    }
}