// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("jonas");
// console.log(23);

// let firstName = "Matilda";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// //variable name convection
// let jonas_matilda ="JM";
// let $funtion = 27;

// let person = "jonas";
// let PI = 3.1415;

// let myFirstJob = "Coder";
// let myCurrentJob = "Teacher";

// let job1 = "progrmmer";
// let job2 = "teacher";


// console.log(myFirstJob);


// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof `Jonas`);

// javascriptIsFun = `YES!`;
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year)
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);
// //bugs
// console.log(typeof null); 

// let age =30;
// age = 31;

// const birthyear = 1991;
// // birthyear = 1990;
// // const job;

// var job = `programmer`;
// job = `teacher`;

// lastName = `Maye`;
// console.log(lastName);

//math operators
// const now = 2037;
// const ageJones = now -1991;
// const ageSarah = now - 2020;
// console.log(ageJones, ageSarah); 
//  console.log(ageJones *2, ageJones / 10, 2 ** 3);
// // 2** 3 means to the power of 3 = 2 * 2 * 2


// const firstName = `Aj`;
// const  lastName = `Maye`;
// console.log(firstName+ ' ' +lastName);

// //Assignments operators
// let x = 10 + 5; //15
// x += 10; //x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++ // x = x+1 = 101
// x--; // x= 
// console.log(x);

// //comparison operators
// console.log(ageJones > ageSarah); // >,< >=, <=
// console.log(ageSarah >= 18);
// console.log(ageJones <= 55);

// const isFullAge = ageSarah >= 18; 

// console.log(now - 1991 > now - 2018);
 
// const now = 2037;
// const ageJones = now -1991;
//  const ageSarah = now - 2018;

//  console.log(now - 1991 > now - 2018);

//  console.log(25 - 10 - 5);

//  console.log(5 - 10 - 20);

//  let x, y; 
//  x = y = 25 - 10 - 5; // x = y = 10 x =10
//  console.log (x, y); 

//  const averageAge = (ageJones + ageSarah) / 2
//  console.log(ageJones, ageSarah, averageAge);

// Coding Challenge 1
//patrt one challenge

// //john and mark variables
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// // Caculation
// const BMIMark = massMark / heightMark **2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

//part2 challenge
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76; 

// const BMIMark = massMark /(heightMark * heightMark);
// const BMIJohn = massJohn/heightJohn **2;  
// const JohnHigherBMI= BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, JohnHigherBMI);

// //Strings and Template Literals
// const firstName = `Anthony`;
// const job = `Coding`;
// const birthyear = 1999;
// const year =2037;

// const Anthony = "I'm " + firstName + ' , a  ' + ( year - birthyear ) + ' years old ' + job + '!';
// console.log(Anthony);  

// const anthonyNew = `I'm ${firstName}, a ${year - birthyear} year old ${job}!`;
// console.log(anthonyNew);

// console.log(`Just a regular String ...`);

// console.log('String with \n\
// multiple \n\
// lines')
// console.log( `Sting
// multiple
// lines`);

// Taking Decisions: if / else Statements

const age = 15; 
const isOldEnough = age >= 18;

if(age >= 18) {
console.log('Sarah can start driving license 🚗');
} else{
    const yearsleft = 18 - age;
    console.log(`Sarah too young wait another ${yearsleft} years :)`);
}
//if esle control stucture

// if() {

// } else {

// }

// const birthyear = 2010; 
// let century;
// if(birthyear <= 2000){
//      century = 20; 
// } else{
//     century = 21;
// }
// console.log(century);

// const oldage = 35;
// const oldenough = age >= 35;

// if(oldage >= 35){
// console.log ('welcome to the party');
// } else{
// const ageleft = 35 - oldenough
// console.log(`Sorry you're not old enough`);
// 

//challenge 2
//john and mark variables
//  const massMark = 78;
// const heightMark = 1.69;
//  const massJohn = 92;
//  const heightJohn = 1.95;

// //  Caculation
//  const BMIMark = massMark / heightMark **2;
//  const BMIJohn = massJohn / (heightJohn * heightJohn);
// //  const markHigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark , BMIJohn);

// if (BMIMark > BMIJohn){
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
// } else {
//     console.log(`Mark's BMI (${BMIMark}) is not higher than John's (${BMIJohn})!`);
// } 

// Type Conversion 
// const inputYear = '1991'
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number(`jonas`));
// console.log(typeof NaN);

// console.log(String(23),23);

// // type of coercion
// console.log('I am ' + 23 + 'years old');
// console.log('I am ' + '23' + 'years old');
// console.log('I am ' + (23) + 'years old');

// console.log('23' - '10' - 3);
// console.log('23' + '10' + 3); // This confused beginners because of the + 
// console.log('23' * '2');
// console.log('23' / '2');
// console.log('23' > '18');
// let n = '1' + 1; // '11' 
// n= n - 1;
// console.log(n);
 