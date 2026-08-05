// Assignment -4 (Conditional Statements & Loops)

// Bank Transactions
// Positive value refers Credit and Negative refers Debit Transaction
// Transactions Amount
// 1 50000
// 2 -2000
// 3 3000
// 4 -15000
// 5 -200
// 6 -300
// 7 4000
// 8 -3000
// First Store all the transactions in any data structure of Your Choice from collections, and by using
// Loops and conditional statements
// 1. Print total number of credit and debit transactions completed
// 2. Print the total amount credited and debited in account
// 3. Print total amount remaining at the end in Bank Account
// 4. If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit
// Transaction with Amount” and also print total number of suspicious transactions

let transactions:number[] = [50000,-2000,3000,-15000,-200,-300,4000,-3000];

let creditTransactions:number=0;
let debitTransactions:number=0;
let creditAmount:number=0;
let debitAmount:number=0;
let remainingBalance:number=0;
let suspiciousTransactions:number=0;

for(let i:number =0; i<transactions.length; i++){

    if(transactions[i]! > 0){
        if(transactions[i]!>10000){
            suspiciousTransactions +=1;
            creditTransactions +=1;
            creditAmount += transactions[i]!;
            console.log(`Suspicious credit Transaction with Amount ${transactions[i]}`);
        }else{
            creditTransactions +=1;
            creditAmount += transactions[i]!;
        }

    }else{
        
            if(transactions[i]!<-10000){
            suspiciousTransactions +=1;
            debitTransactions +=1;
            debitAmount += transactions[i]!;
            console.log(`Suspicious debit Transaction with Amount ${transactions[i]}`);
        }else{
            debitTransactions +=1;
            debitAmount += transactions[i]!;
        }
    
    }
}
 remainingBalance = creditAmount+debitAmount;

 console.log(`total number of credit  transactions completed:${creditTransactions}`);
 console.log(`total number of  debit transactions completed:${debitTransactions}`);
 console.log(`the total amount credited  in account:${creditAmount}`);
 console.log(`the total amount  debited in account:${debitAmount}`);
 console.log(`total amount remaining at the end in Bank Account:${remainingBalance}`);
 console.log(`total number of suspicious transactions :${suspiciousTransactions}`);
 