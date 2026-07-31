

// Create common function and then based on below details, print whether user is eligible to get the loan
// or not
// customerName = "John Doe";
// creditScore = 720;
// income = 55000.0;
// isEmployed = true;
// debtToIncomeRatio = 35.0;

const customerName:String = "John Doe";
let creditScore:number =720;
let income:number = 55000.0;
let isEmployed :boolean = true;
let debtToIncomeRatio :number = 35.0;

// A bank evaluates loan applicants based on the following criteria:
// 1. Credit Score:
// o If the credit score is above 750, the loan is automatically approved.
// o If the credit score is between 650 and 750, additional checks are performed.
// o If the credit score is below 650, the loan is denied.
// 2. Income:
// o For credit scores between 650 and 750, the customer’s income must be at least $50,000
// for the loan to be considered.
// 3. Employment Status:
// o If the customer’s income is at least 50,000, the system checks whether the customer is
// employed.
// o If the customer is unemployed, the loan is denied.
// 4. Debt-to-Income Ratio:
// o If the customer is employed, the system checks the debt-to-income (DTI) ratio.
// o If the DTI ratio is less than 40%, the loan is approved.
// o If the DTI ratio is 40% or greater, the loan is denied.

if(creditScore>750){
    console.log(`customer :${customerName} is eligible`);
}
    else if(creditScore<=750 && creditScore>=650){
        if(income>=50000 && isEmployed == true && debtToIncomeRatio<40){
            console.log(`customer :${customerName} is eligible`);
    }
}else{
    console.log(`customer :${customerName} is not eligible`);

}


//method two

let excellentCreditScore:boolean = creditScore> 750;
let goodCreditAndGoodFinance:boolean = (creditScore<=750 && creditScore>=650) && (income>=50000 && isEmployed && debtToIncomeRatio<40);

if(excellentCreditScore || goodCreditAndGoodFinance){
    console.log(`customer :${customerName} is eligible`);
}else{
    console.log(`customer :${customerName} is not eligible`);
}