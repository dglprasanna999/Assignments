/*Assignment: Write a program to perform the following tasks:
1. Count the total number of words in the sentence.
2. Print the sentence words in reverse order.
3. Convert the first character of each word to uppercase and print original sentence

String sentence = "Java programming is fun and challenging";*/

//input
let sentence:string="Java programming is fun and challenging";

//spliting sentence into words by space and store in variable
let words:string[] =sentence.split(" ");

//print no of words availble
console.log(`Number of words in sentence ${words.length}`);

//reverse words
let reverseWords:string[]= words.reverse();

//join the reverse words
let reversesentence:string = reverseWords.join(" ");
console.log(reversesentence);

let capitalWords:string[]=[];
let newWords:string[]=sentence.split(" ");

for(let word of newWords){

   let capitalWord:string = word[0]!.toUpperCase()+word.slice(1);
   capitalWords.push(capitalWord);
}
let capitalSentence:string = capitalWords.join(" ")
console.log(capitalSentence);