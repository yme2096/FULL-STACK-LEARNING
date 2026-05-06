//Trim method
/*
let msg="   hello   ";
console.log(msg);
console.log(msg.trim());
console.log(msg);
let password=prompt("enter password");
let newpass=password.trim();
console.log(newpass);
*/

//to uppercase and lowercase
let name="siva";
let fs=name.toUpperCase();
let ns=name.toLowerCase();
console.log(name);
console.log(fs);
console.log(ns);

//IndexOf
let str="JAi";
console.log(str.indexOf("J"));

//Method chaining
let msg="   HEllo  ";
let ms=msg.trim();
console.log(ms);
let capms=msg.toUpperCase();
console.log(capms);
//method chaining
let methodchaining=msg.trim().toUpperCase();
console.log(methodchaining);

//slice
let m="hello";
console.log(m.slice(0,4));
console.log(m.slice(-2));

//replace
let s="ilove coding";
let n=s.replace("love","do");
console.log(n);

//repeat
let r="fruit";
console.log(r.repeat(7));

