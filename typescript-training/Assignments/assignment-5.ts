// Assignment (Conditional Statements & Loops)

// Employee Table
// S.No Name Base Salary Experience (Years) Year-End Rating (Out of

// 5)

// 1
// Alice
// Johnson 75000.0 5.1 4.2
// 2 Bob Smith 68000.0 3.2 3.8
// 3 Carol Davis 82000.0 7.1 4.5
// 4 David Brown 90000.0 10.2 2.5
// 5 Eva Green 60000.0 2.4 3.5

// Hike
// Rating % of base Salary as variable pay Bonus
// > =4.0 15.0 1500
// >=3 && < 4 10.0 1200
// < 3.0 3.0 300

// Extra Perks
// Employees with Experience >= 5 Years get extra Reward of 5000;

// There are 5 Employee records. Now Calculate the Hike percentage of each Employee and store the
// Values in Map with EmployeeName and HikePercentagevalue and Print them.

// Hike = ( Base Salary * variable pay % ) + Bonus + Reward ;
// Hike % = Hike / Base Salary .

let employeeName:string[]= ["Alice Johnson", "Bob Smith", "Carol Davis", "David Brown", "Eva Green"];
let baseSalary:number[]= [75000, 68000, 82000, 90000, 60000];
let experience:number[]=[5.1, 3.2, 7.1, 10.2, 2.4];
let rating:number[]=[4.2, 3.8, 4.5, 2.5, 3.5];

let hikeMap:Map<string,number> = new Map();

let variablePayPercent = 0;
let bonus = 0;
let reward = 0;

for(let i:number =0; i<rating.length; i++){
    
    if(rating[i]! >= 4.0){
     bonus = 1500;
     variablePayPercent = 15;
    }else if(rating[i]!>=3){
      bonus = 1200;
     variablePayPercent = 10 ; 
    }else{
        bonus = 300;
     variablePayPercent = 3 ;
    }
    (experience[i]!)>=5? reward=5000 : reward=0;

    let hike = ( baseSalary[i]! * (variablePayPercent/100 ) + bonus + reward) ;

    let HikePercentagevalue = (hike / baseSalary[i]!) * 100;

   hikeMap.set(employeeName[i]!,HikePercentagevalue);

   console.log(`${employeeName[i]}: ${HikePercentagevalue}`);
}

for(const [name,hikePercentagevalue] of hikeMap){
    console.log(`${name}'s Hike Percentage: ${hikePercentagevalue.toFixed(2)}%`);
}
