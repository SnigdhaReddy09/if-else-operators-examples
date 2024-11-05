//1
const score = 85;
const grade = (score >= 90) ? 'A' :
              (score >= 80) ? 'B' :
              (score >= 70) ? 'C' :
              (score >= 60) ? 'D' : 'F';

console.log(`Your grade is: ${grade}`);

// 2
const Age = 48;
const isAdult = (Age >= 18) ? 'You are an adult.' : 'You are not an adult.';
console.log(isAdult);

// 3
var day="monday"
if(day==="saturday" || day==="sunday"){
    console.log("It is a weekend")
}else{
    console.log("It is not a weekend")
}

// 4
var age=42
var citizenship=false
if(age>=18 && citizenship==true){
    console.log("Eligible to vote")
}else{
    console.log("Not eligible to vote")
}

// 5
var username="Admin"
var password=12345
if(username.toLowerCase()==="admin" && password===12345){
    console.log("Login Successfull")
}else{
    console.log("Login failed")
}