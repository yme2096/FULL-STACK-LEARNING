//1
let num=10;
if(num%10==0)
{
    console.log("good");
}
else{
    console.log("bad");
}
//2
let name=prompt("ente your name");
let age=prompt("enter age");
alert(name+"my name"+age);
//3
let n=1;
switch(n)
{
    case 1:
        console.log("jan,feb,mar");
        break;
        case 2:
            console.log("apr,may,june");
            break;
            case 3:
            console.log("july,aug,sept");
            break;
             case 4:
            console.log("oct,nov,dec");
            break;
            default:
                console.log("invalid naumber");

}
//4
let op="asivakumar";
if((op[0]=='a'||'A')&&op.length>5)
{
    console.log("it is a golden String");
}
else{
    console.log("not");
}
//5
let a=12;
let b=45;
let c=78;
if(a>=b&&a>=c)
{
    console.log("a is largest");
}
else if(b>=c)
{
    console.log("b is largest");
}
else
{
    console.log("c is largest");
}
//6
let x=32;
let y=47850;
if(x%10===y%10)
{
    console.log("same digit");
}
else
{
    console.log("not same");
}
