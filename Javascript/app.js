//console.log("hello world");
//console.log("apna college");
/*
let a=10;
let b=5;
let sum=a+b;
console.log(sum);*/

//Template Literals
/*
let pencilprice=10;
let eraserprice=5;
//let output="the total price is : "+(pencilprice+eraserprice)+"Rupees";
let output=`the total price is :${pencilprice+eraserprice} Rupees.`//backtick
console.log(output);*/

//Arithmetic Operators
let a=10;
let b=5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

//unary operators
console.log(a++);//10
console.log(++a);//12

//Assignment Operators
b=a;
console.log(b);

//Comparison Operator
//let age=18;
/*
console.log(age<18);
console.log(age>18);
console.log(age>=18);
console.log(age<=18);
console.log(age==18);
console.log(age!=18);
*/
//  == and !=


//Conditional Statemnets
//if-statement
console.log("before my if statement");
let age=14;
if(age>=18)
{
    console.log("you can vote");
}
if(age<18)
{
    console.log("you cannot vote");
}
console.log("after my if statement");
// 2
let fn="siva";
if(fn=="siva")
{
    console.log(`welcome ${fn}`);
}
//ps-1
let color="red";
if(color==="red")
{
    console.log("stop!");
}
if(color==="yellow")
{
    console.log("start to move");
}
if(color==="green")
{
    console.log("move");
}

//else-if statement
let ag=14;
if(ag>=18)
{
    console.log("you can vote");
}
else if(ag<18)
{
    console.log("you cannot vote");
}
//else statement
let ch="S";
if(ch=='XL')
{
    console.log("Price is is Rs.250");
}
else if(ch=="L")
{
    console.log("Price is is Rs.200");
}

else if(ch=="M")
{
    console.log("Price is is Rs.100");
}
else
{
    console.log("Price is is Rs.50");
}
//Nested if else
    let marks=10;
if(marks>=33)
{
    console.log("pass");
    if(marks>=80)
    {
        console.log("Grade : O");
    }
    else
    {
        console.log("Grade:A");
    }
}
else{
    console.log("fail");
}
//Logical operators
//AND operator
let mark=90;
if(mark>=33&&mark>=80)
{
    console.log("A+");
    console.log("pass");
}
//OR operator
let mak=75;
if(mark>=33||mark>=80)
{
    console.log("A+");
    console.log("pass");
}
//Not operator
// Logical operators example

let mar= 75;

if (!(marks < 33)) {
    console.log("pass");
    console.log("A+");
}
//Paractice qs
//qs-1
let str="ale";
if((str[0]=='a')&&(str.length>3))
{
    console.log("good string");
}
else
{
    console.log("not a good string");
}
//switch Statement
// Switch Statement Example

color = "red";

switch (color) {
    case "red":
        console.log("stop");
        break;

    case "yellow":
        console.log("slow down");
    break;

    case "green":
        console.log("GO");
        break;

    default:
        console.log("Broken Light");
}
console.log("after break");
//ps-2
let day=17;
switch(day)
{
    case 1:
        console.log("Mon");
        break;
        case 2:
        console.log("Tue");
        break;
        case 3:
        console.log("Wed");
        break;
        case 4:
        console.log("Thu");
        break;
        case 5:
        console.log("Fri");
        break;
        case 6:
        console.log("Sat");
        break;
        case 7:
        console.log("Sun");
        break;
        default :
        console.log("not a day");
}