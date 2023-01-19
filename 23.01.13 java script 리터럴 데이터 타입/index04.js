
let i = 100;    // i는 전역변수(global variable)

function myFunc() {
    let i = 10;   // i는 지역변수(local variable)
    
    for(let i=0; i<3; i++) {
        console.log(i);  // 0 1 2 
    }
    console.log(i);  // 10
}

myFunc();

console.log(i);  // 100