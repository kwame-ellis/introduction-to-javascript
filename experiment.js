/* 
Every time you call a function, it has its own scope. Other things can't peek into it; it just has it's own little workspace for it to work with. Once it's done, any variable that you haven't explicitly held on to or returned at the end is discarded. 
 */

//example 1
function addFive(number) {
    const someVariable = "you can't see me outside this function";
    return number + 5;
  }

 // This is not going to work. someVariable is inside of the addFive scope and once addFive completes, it throws someVariable away since it's now out-of-scope.
  addFive(10);
  console.log(someVariable);

  //example 2

  let friendsAtYourParty = 0;
for (let i = 0; i <= 10; i++) {
  friendsAtYourParty++;
}
console.log(i);

//RESULT:  ReferenceError: i is not defined
/*
Even this doesn't work since i is only in scope for the loop and then after that it's thrown away. This can be a difficult one to deal with as someone new to coding because you'll go to log something or use a variable and it's out of scope so it's not there. Just know if that happens, this is probably the problem.

Scope is hard. And scope is particularly strange in JavaScript (it varies by programming language.) If it feels hard it's because it is. A general, imperfect way for you to think about it right now is that a variable is "alive" (in scope) in between whatever the closest { is until that { closes its corresponding }. A few examples below, see if you can get it right. Keep in mind that the variable will stay in scope as long as any scope it exists in still exists. If I declare a variable in an outter scope and modify a variable in an inner scope, that variable will survive as long as the outter scope does. It matters where the variable is declared.
*/
//example 3 

const A = "A";
let F;

function doStuff(B) {
  console.log(B); // works, B parameter is still in scope
  const C = "C";
  let H = "H";
  if (1 + 1 === 2) {
    const D = "D";
    H = "something else";
  }
  console.log(D); // does not work, D was declared in that if statement block
  console.log(H); // works, H was declared outside the if statement
  F = "F";
}

let E = 0;
while (E < 3) {
  E++;
  console.log(A); // works, the outter block (called the global scope) is still in scope
  const G = "G";
}
console.log(E); // works, E was declared outside the whie loop
console.log(G); // does not work, declared inside the while loop and it's over

doStuff("B");
console.log(B); // does not work, the B parameter expires after the function call
console.log(C); // does not work, C was declared inside the function and the function is over
console.log(F); // works, F was declared in the global scope