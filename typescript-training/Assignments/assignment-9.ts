// Assignment: Write a program to print * in triangle pattern
// 1. If I will pass int rows = 5 then it should print triangle with 5 Rows
//     *
//    **
//   ***
//  ****
// *****

function printRightAngleTriangle(rows:number):void{

    for(let i=1; i<=rows; i++){
        
        let star:string ="";
        for(let j=1; j<=i; j++){
           star +="*"; 
        }
        console.log(star);
    }

}printRightAngleTriangle(5)

function printLeftAngleTraingle(rows:number):void{

    for(let i =1; i<=rows; i++){

        let star : string ="";
        for(let j=1; j<=i; j++){
            star +="*";
        }
        let space :string="";
        for(let k=1; k<=rows-i; k++){
            space += " ";
        }
      console.log(space+star);
    }
}printLeftAngleTraingle(5)

