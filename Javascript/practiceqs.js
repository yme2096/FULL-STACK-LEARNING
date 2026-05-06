/*
let msg="hello!";
let m=msg.trim().toUpperCase();
console.log(m);

//2
let name="ApnaCollege";
console.log(name.slice(4,9));
console.log(name.indexOf("na"));
console.log(name.replace("Apna","Our"));

//3
let start=["january","july","march","august"];
console.log(start);
start.shift();
start.shift();
start.unshift("june");
start.unshift("july");
console.log(start);

//4
let st=["january","july","march","august"];
console.log(st);
st.splice(0,2,"july","june");
console.log(st);

//5
let c=['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];
console.log(c);
c.reverse();
console.log(c);
console.log(c.indexOf("javascript"));
*/
/*
//todo app
let todo=[];
let req=prompt("enter your request");
while(true)
{
    if(req=="quit")
    {
        console.log("quitting app");
        break;
    }
    if(req=="list")
    {
        console.log("-----------");
        for(task of todo)
        {
         console.log(task);

        }
        console.log("-----------");
        
    }
    else if(req=="add")
    {
        let task=prompt("please eneter the task you need to add");
        todo.push(task);
        console.log("task added");
    }
    else if(req=="delete")
    {
        let idx=prompt("please enter the task index to delte");
        todo.splice(idx,1);
        console.log("task deleted");
    }
    else
    {
        console.log("wrong request");
    }
    req=prompt("enter your next request");
}
    */

/*
//guessing game
const max = prompt("enter the max number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");

while(true) {
    if(guess == "quit") {
        console.log("user quit");
        break;
    }

    if(guess == random) {
        console.log("you are right! congrats!!");
        break;
    } else {
        guess = prompt("your guess was wrong. please try again");
    }
}
    */
   

//js-6 -->ps-1
function printpoem()
{
    console.log("twinkle twingkke little star");
    console.log("lord ram is a good boy");
}
printpoem();

//ps-2
function dicenumber()
{
let rand=Math.floor((Math.random()*6))+1
console.log(rand);
}
dicenumber();

//ps-3
//average of three numbers
function averageof3numbers(a,b,c)
{
    let avg=(a+b+c)/3;
    console.log(avg);
}
averageof3numbers(3,3,3);
//ps-4
//create an function to print a multiplication of a table
function print(n)
{
    for(let i=n;i<=n*10;i=i+n)
    {
        console.log(i);
    }
}
print(10);

//ps-5
//create an function that returns the sum of numbers from 1 to n
function sumofnnumbers(n)
{
    for(let i=0;i<=n;i++)
    {
        sum=sum+i;
    }
    return sum;
}
sumofnnumbers(5);

//ps-6
//create an function that returns the concatenation of all strings in an array
let str = ["hi", "hello", "bye", "!"];

function concat(str) {
    let result = "";

    for(let i=0; i<str.length; i++) {
        result += str[i];
    }

    return result;
}