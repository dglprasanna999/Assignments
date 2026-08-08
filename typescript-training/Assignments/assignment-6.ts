/*Given a number n, determine whether it is a prime number or not. A prime number is a
number greater than 1 that has no positive divisors other than 1 and itself.

Examples :
Input: n = 7
Output: true
Explanation: 7 has exactly two divisors: 1 and 7, making it a prime number.

Input: n = 25
Output: false
Explanation: 25 has more than two divisors: 1, 5, and 25, so it is not a prime number.

Input: n = 1
Output: false
Explanation: 1 has only one divisor (1 itself), which is not sufficient for it to be considered
prime.*/


function verifyPrimeNumber(
     input:number
):boolean {

    let isPrime:boolean = true;

    if(input > 1){
       
        for(let i=2; i<= input-1;i++){

            if(input%i===0){
             isPrime = false;
               break;   
            }  
        }return isPrime;
    }
    else{
       return false;  
    }
}
console.log(verifyPrimeNumber(169));
console.log(verifyPrimeNumber(7));
console.log(verifyPrimeNumber(25));
console.log(verifyPrimeNumber(1));

