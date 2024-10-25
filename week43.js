// Hello.
// This is a set of exercises.
// The idea is to practice a few things at a time.
// You do this by writing your answer after a task is given (see the example).
// Use the concepts from our sylabus. 

// DO NOT change the provided code unless the task specifically says to do so.

/* -----------------------------------------------------------------------------
    Task: Example
    Write code to print all the names in the list, one name per line
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"]

for (let index = 0; index < people.length; index++) {
    let person = people[index];
    console.log(person);
}

/* -----------------------------------------------------------------------------
    Task: A
    create a function that "draws" a tree of a given height.
    Example the following is a tree of height 5

           5        *
           4       ***
           3      *****
           2     *******
           1        x
*/
console.log("Task: A");

function drawTree(height) {
    for (let i = height; i > 1; i--) {
        let rowNumber = i + " "; 
        let spaces = " ".repeat(height - i);
        let stars = "*".repeat(2 * (height - i) + 1);
        console.log(rowNumber + spaces + stars);
    }
    console.log("1 " + " ".repeat(height - 1) + "x");
}

drawTree(5);
/* -----------------------------------------------------------------------------
    Task: B

    Write a function that "draws" an arrow of a given size.
    Example: This is an arrow of size 3.

    *
    * *
    * * *
    * *
    * 
*/
console.log("Task: B");

function drawArrow(size) {
    for (let i = 1; i <= size; i++) {
        let line = "* ".repeat(i);
        console.log(line);
    }
    for (let i = size - 1; i > 0; i--) {
        let line = "* ".repeat(i);
        console.log(line);
    }
}

drawArrow(3);






/* -----------------------------------------------------------------------------
    Task: C
    Write a function that draws a box of n by m dimensions. Take into acount the diffrence in aspectratio.

    Example: This is a aproximatly a 2 by 2 box. 
    +--------+
    |        |
    |        |
    +--------+
*/
console.log("Task: C");

function drawBox(height, width) {
    let topAndBottom = "+" + "-".repeat(width) + "+";
    let sides = "|" + " ".repeat(width) + "|";
    
    console.log(topAndBottom);
    for (let i = 0; i < height; i++) {
        console.log(sides);
    }
    console.log(topAndBottom);
}

drawBox(2, 8);




/* -----------------------------------------------------------------------------
    Task: D
    Write a function that returns true if a word is a Heterogram.   
*/
console.log("Task: D");

function isHeterogram(word) {
    let letters = new Set();
    for (let i = 0; i < word.length; i++) {
        let char = word[i].toLowerCase();
        if (/[a-z]/.test(char)) {
            if (letters.has(char)) {
                return false;
            }
            letters.add(char);
        }
    }
    return true;
}

console.log(isHeterogram("lamp"));   // true
console.log(isHeterogram("letter")); // false



/* -----------------------------------------------------------------------------
    Task: E
    Write a function that returns true if two words are Anagrams.
*/
console.log("Task: E");

function areAnagrams(word1, word2) {
    let sortedWord1 = word1.toLowerCase().split("").sort().join("");
    let sortedWord2 = word2.toLowerCase().split("").sort().join("");
    return sortedWord1 === sortedWord2;
}

console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));   // false
