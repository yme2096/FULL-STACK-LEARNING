//loops
/*
//for loop

for(let i=0;i<=5;i++)
{
    console.log(i);
}

for(let i=5;i>=0;i--)
{
    console.log(i);
}
let i=5;
console.log(i);

//print all odd numbers from 1 to 15
for(let j=0;j<=15;j++)
{
    if(j%2!=0)
    {
        console.log(j);
    }
}
for(let j=1;j<=15;j=j+2)
{
  console.log(j);
}

console.log("backwards");
for(let j=15;j>=1;j=j-2)
{
    console.log(j);
}
//print even numbers
console.log("even numberss")
for(let j=2;j<=15;j++)
{
    if(j%2==0)
    {
        console.log(j);
    }
}
for(let j=2;j<=15;j=j+2)
{
  console.log(j);
}
console.log("backwards");
for(let j=14;j>=2;j=j-2)
{
  console.log(j);
}
  */
//print multiplication table of 5
/*
for(let i=0;i<=10;i++)
{
    console.log("5"+"*"+i+"="+5*i+"");
}

let n=prompt("enter your number");
n=parseInt(n);
for(let i=n;i<=n*10;i=i+n)
{
    console.log(i);
}
    */
/*
//nested loops
for(let i=1;i<=3;i++)
{
    console.log(`outer loop ${i}`);
    for(let j=1;j<=3;j++)
    {
        console.log(j);
    }
}
//while loop
let i=0;
while(i<=5)
{
    console.log(i);
    i++;
}
i=10
while(i>=0)
{
    console.log(i);
    i--;
}
    */

/*
//favourite movie
let favmovie="baahubali";
let guess=prompt("guess the fav movie");
while((guess!=favmovie)&&(guess!="quit"))
{
    console.log("wrong");
    guess=prompt("guess again");
}
if(favmovie==guess)
{
    console.log("congrats");
}
else
{
    console.log("better luck next time");
}
*/
/*
//break keyword
let a=1;
while(i<=5)
{
    if(i==3)
    {
        break;
    }
    console.log(i);
    i++;
}
*/

/*
//loops with arrays
let fruits = ["mango", "apple", "banana", "litchi", "orange"];

for(let i=0; i<fruits.length; i++) {
    console.log(i, fruits[i]);
}
//even fruits
for(let i=0; i<fruits.length; i=i+2) {
    console.log(i, fruits[i]);
}
//reverse order
for(let i=fruits.length-1; i>=0; i--) {
    console.log(i, fruits[i]);
}

*/

//loops with Arrays
let heroes = [ ["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"] ];

for(let i=0; i<heroes.length; i++) {
    console.log(`List ${i}`);
    for(let j=0; j<heroes[i].length; j++) {
        console.log(heroes[i][j]);
    }
}

for(let i=0; i<heroes.length; i++) {
    console.log(i, heroes[i], heroes[i].length);
    for(let j=0; j<heroes[i].length; j++) {
        console.log(`j=${j}, ${heroes[i][j]}`);
    }
}

let student = [ ["aman", 95], ["shradha", 94.4], ["karan", 100] ];

for(let i=0; i<student.length; i++) {
    console.log(`info of student #${i+1}`);
    for(let j=0; j<student[i].length; j++) {
        console.log(student[i][j]);
    }
}

//for of loop
let fruits=["mango","apple","orange","banana","orange","litchi"];
for(fruit of fruits)
{
    console.log(fruit);
}

for(char of "sivakumar")
{
    console.log(char);
}
//in nested
for(list of heroes)
{
    console.log(list);
}

for(list of heroes)
{
    for(name of list)
    {
        console.log(name);
    }
}
