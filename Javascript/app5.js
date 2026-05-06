//functions in js
function hello()
{
    console.log("hello world");
}
function printname()
{
    console.log("jai");
}
function print1to5()
{
    for(let i=1;i<=5;i++)
    {
        console.log(i);
    }
}
function isAdult()
{
    let age=13;
    if(age>=18)
    {
        console.log("adult");
    }
    else{
        console.log("not adult");
    }
}
hello();
hello();
hello();
hello();
print1to5();
isAdult();

//functions with Arguments
function pname(name)
{
    console.log(name);
}
pname("jai");

function marks(name,mark)
{
    console.log(`${name}'s marks is ${mark}.`);
}
marks("jai",16);
marks("jai",89);
marks("jai");
//sum
function sum(a,b)
{
    console.log(a+b);
}
sum(1,2);
//functions using arguments
function sump(a,b)
{
    return a+b;
}
console.log(sump((sump(2,3)),4));


//function expressions
let name = "shradha";

let suma = function(a, b) {
    return a + b;
}

hello = function() {
    console.log("hello");
}
 hello = function() {
    console.log("namsate");
}


//takes one or multiple functions as arguments
function multiplegreet(func,n)//higher order function
{
    for(i=0;i<=n;i++)
    {
        func();
    }
}
let greet=function()
{
    console.log("hello");
}
multiplegreet(greet,3);

//higher order functions return
function oddOrEvenFactory(request) {
    if (request == "odd") {
        return function(n) {
            console.log(!(n % 2 == 0));
        }
    } 
    else if (request == "even") {
        return function(n) {
            console.log(n % 2 == 0);
        }
    } 
    else {
        console.log("wrong request");
    }
}

let request = "odd"; // even

//methods
const calculator=
{
    v:55,

    add:function(a,b)
    {
        return a+b;
    },
    sub:function(a,b)
    {
        return a-b;
    },
    mul: function(a,b)
    {
        return a*b;
    }
}

const calculato = {
  add(a, b) {
    return a + b;
  },

  sub(a, b) {
    return a - b;
  },

  mul(a, b) {
    return a * b;
  }
};
