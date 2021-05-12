const f = x => 2*x + 1;

let a = 2 + f // parens from the next line will be attached and f(3+4) will be called
(3+4);

console.log(a)

