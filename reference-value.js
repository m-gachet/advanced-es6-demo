let a = 0;
let b = a;
a++;

// console.log('+------------------------------+');
// console.log(a, b);
// console.log('+------------------------------+');

let c = [1, 2, 3];  //33
let d = c;
c[0]++;
// console.log('+------------------------------+');
// console.log(c, d);
// console.log('+------------------------------+');

let e = {                        //108
    name: "Web Developer",
    age: 53
};
let f = {...e, name:"Web Designer"};                 //128
e.age++;
console.log('+------------------------------+');
console.log(e, f);
console.log('+------------------------------+');