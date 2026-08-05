// Assignment -3 (Arrays/Datatypes/Operators)

// 1. Create two arrays to store student names ["Suresh","Mahesh","Naresh"] and
// marks [75, 80, 82] Add 10 marks to each students using assignment operators and
// store it into another array, after adding 10 marks identify the average marks of all
// students

// Expected Output:
// Updated Marks:
// Suresh: 85
// Mahesh: 90
// Naresh: 92
// Average Marks: 89.0

const names:String[]=["Suresh","Mahesh","Naresh"];
let marks:number[]=[75, 80, 82];

let updatedMarks:number[] =[];
for(let i:number =0 ; i<marks.length; i++){

  let tempMark:number = marks[i]!;
  tempMark += 10;
  updatedMarks[i]= tempMark;
}

let totalMarks:number =0;

for(let i:number=0; i<updatedMarks.length; i++){

    totalMarks +=updatedMarks[i]!;
}

let averageMarks:number =totalMarks/updatedMarks.length;

console.log("Updated Marks :");
for(let i:number=0; i<updatedMarks.length; i++){

    console.log(`${names[i]}:${updatedMarks[i]}`);
}

console.log(averageMarks);


