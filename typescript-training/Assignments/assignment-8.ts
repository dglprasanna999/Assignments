// Assignment: Write a program to search for all occurrences of a “Java” word in the paragraph and print their
// indexes.
// 1. Find total number of occurrences
// 2. Print count and Indexes of the word

// String paragraph = "Java is a popular programming language. Java is used for web
// development, mobile applications, and more.";

let paragraph:string = "Java is a popular programming language. Java is used for web development, mobile applications, and more.";
let indexes:number[]= [];
let searchIndex :number =0;
let lowerCaseParagraph:string = paragraph.toLowerCase()
let foundIndex:number =lowerCaseParagraph.indexOf("java",searchIndex);

while(foundIndex !== -1){
   indexes.push(foundIndex)
   searchIndex = foundIndex + 1;
   foundIndex = lowerCaseParagraph.indexOf("java", searchIndex);
}

console.log(`Total occurrences: ${indexes.length}`);
console.log(`Indexes: ${indexes}`);