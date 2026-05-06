let students=["aman","ajay","jai"];
console.log(students);

//Array Methods
//push pop
let car=["audi","ferrari","maruthi","suzuki"];
console.log(car);
car.push("toyota");
console.log(car);
car.pop();
console.log(car);
//shift unshift
car.unshift("toyota");
console.log(car);
car.shift();
console.log(car);

//indexof
let n=["audi","maruthi","suzuki"];
let a=n.indexOf("audi");
console.log(a);
b=n.indexOf("bmw");
console.log(b);
//includes
let c=n.includes("audi");
console.log(c);
let d=n.includes("bmw");
console.log(d);

//concat
let primary=["apple","orange","may"];
console.log(primary);
let secondary=["ajay","vijay","jai"];
console.log(secondary);
let final=primary.concat(secondary);
console.log(final);
let sec=secondary.concat(primary);
console.log(sec);

//reverse
car.reverse();
console.log(car);

//splice
let siva=["jai","deepu","sri","sweety"];
siva.splice(3);
console.log(siva);
siva.splice(0,1);
console.log(siva);
siva.splice(0,2);
console.log(siva);
siva.splice(0,1,"subbu","deepu","hara");
console.log(siva);
siva.splice(1,0,"jai");
console.log(siva);
siva.splice(1,1,"sivakumar");
console.log(siva);
