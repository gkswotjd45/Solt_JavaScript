// hoisting은 var, let, const 몽땅 일어나는 현상.

let myVar = 1;  // 전역변수(global variable)

{
    console.log(myVar);
    let myVar = 100;
}
