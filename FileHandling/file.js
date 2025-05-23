const fs = require("fs");
const os = require("os");

console.log(os.cpus().length)

//Sync write- blocking request
//fs.writeFileSync('./test.txt', 'Hey there');

//Async write- non-blocking request
//fs.writeFile('./test.txt', 'Hello World', (err) => {});


//Sync read

/* console.log("1");

const result = fs.readFileSync("./contacts.txt", "utf-8");
console.log(result);

console.log("2"); */


//Async read - doesn't return anything ans expect a callback

/* console.log("1");
const result = fs.readFile("./contacts.txt", "utf-8", (err, result) => {
    if(err){
        console.log("Error", err);
    } else {
        console.log(result);
    }
}); 

console.log("2");

*/

//Default Thread Pool Size = 4
//Max? - 8 core cpu- 8 thread only

//utf-8 is a encoding file that means our file could be in binary or a video file and more
//UTF-8 (Unicode Transformation Format - 8-bit) is a variable-width character encoding system designed to encode all possible characters (code points) in the Unicode character set using one to four bytes. It is one of the most commonly used encoding formats for text data on the internet and in various software applications due to its efficiency and compatibility with ASCII.


//append
//fs.appendFileSync("./test.txt", `${Date.now()} Hey There\n`);


//copy file
//fs.cpSync("./test.txt", "./copy.txt");


//delete file
//fs.unlinkSync("./copy.txt");


//statics
//console.log(fs.statSync("./test.txt"));


//create directory
//fs.mkdirSync("my-docs/a/b", {recursive: true});
