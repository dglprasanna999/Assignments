// Assignment 1 – Data Types

// 1. Temperature of a city in degrees Celsius: 25.5

let temparature:String = "25.5°C";
console.log(`Temperature of a city in degrees Celsius:${temparature}`);

// 2. Whether a customer has placed an order: true or false

let orderStatus:boolean = true;
console.log(`customer has placed an order:${orderStatus}`);

// 3. Person's phone number: "123-456-7890"

const phoneNumber:String = "123-456-7890";
console.log(`Person's phone number: ${phoneNumber}`);

// 4. Amount of money in a customer's bank account: 1000.50

let accountBalance:number = 1000.50;
console.log(`Amount of money in a customer's bank account:${accountBalance}`);

// 5. Person's email address: "john.doe@example.com"

const email:String = "john.doe@example.com";
console.log(`Person's email address: ${email}`);

// 6. Coordinates of a location (latitude, longitude): 37.7749, -122.4194

interface coordinates{
    latitude :number;
    longitude : number;
}

const location :coordinates ={
    latitude : 37.7749 ,
    longitude : -122.4194
};

console.log(`latitude :${location.latitude},longitude :${location.longitude}`);

let coordinatesLoaction:number[]=[37.7749, -122.4194];
console.log(`Coordinates of a location (latitude, longitude):${coordinatesLoaction}`);


// 7. Person's marital status: true or false

const maritalStatus:boolean = true;
console.log(`Person's marital status:${maritalStatus}`);

// 8. Person's occupation: "Software Engineer"

let occupation:String = "Software Engineer";
console.log(`Person's occupation: ${"occupation"}`);

// 9. Person's favourite colour: "Blue"

const favouriteColour:String = "Blue";
console.log(`Person's favourite colour:${favouriteColour}`);

// 10.Current year: 2023

let currentYear = new Date()
console.log(currentYear.getFullYear())

let customerJoinYear:number = 2023;
console.log(`customer join year :${customerJoinYear}`);

// 11.Number of followers on a social media platform: 1,000,000

let followes:String = "1,000,000";
console.log(`Number of followers on a social media platform:${followes} `);

// 12.Rating of a movie: 7.5

let RatingOfMovie:number = 7.5;
console.log(`Rating of a movie:${RatingOfMovie} `);

// 13.Person's blood type: 'A'

const bloodGroup:String ="'A'"
console.log(`Person's blood type:${bloodGroup}`);

// 14.Title of a book: "To Kill a Mockingbird"

const TitleOFBook:String = "To Kill a Mockingbird";
console.log(`Title of a book:${TitleOFBook}`);

// 15.Number of employees in a company: 500

let numberOfEmployees:number = 500;
console.log(`Number of employees in a company:${numberOfEmployees}`);

// 16.Time of an event: 2:30 PM

let time:String = "2:30 PM";
console.log(`Time of an event: ${time}`);

// 17.Name of a country: "United States"

let country:String = "United States";
console.log(`Name of a country:${country}`);

// 18.Person's eye color: "Brown"

const eyeColor:String = "Brown";
console.log(`Person's eye color:${eyeColor}`);

// 19.Person's birthplace: "New York City"

const birthplace:String = "New York City";
console.log(`Person's birthplace:${birthplace}`);

// 20. Distance between two cities: 200.5

let distanceBetweenTwoCities:number = 200.5
console.log(`Distance between two cities:${distanceBetweenTwoCities}`);