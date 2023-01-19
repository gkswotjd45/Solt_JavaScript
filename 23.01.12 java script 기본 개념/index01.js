// 이번에는 let에 대해서 알아봄
// let은 var 똑같이 변수를 선언하기 위한 키워드
// es6 block level scope이고 우리가 알고 있는 변수 선언 방식 이용 


/*
// 같은 scope내에서 중복 선언이 안됨. // let을 사용시 직관적이고 오류 사용을 방지.
let result = 100;
// let result = 50; // 동일한 변수 이름으로 선언하면 안됨

// block level scope (다른 scope 인경우는 가능)
let score = 50; // 프로그램이 끝날 까지 계속 생존
{
    let scope = 100; 
    let myVar = 10;

} // 내가 선언된 scope에서만 생존.

console.log(score);
console.log(myVar); // error scope 범위 벗어난 상태여서 
*/

/*
let i = 100; // i는 scope는 시작 부터 끝까지 영향을 미침. 전역변수 (global variable) // 자바는 전역변수란 개녕이 없음 // 단 자바는 전역 grobal variable
function myfunc(){
    let i = 10; // i는 지역변수(local variable) {}이 설정되어 있음.
    for(let i = 0 ; i<10; i++){ // i는 지역변수(local variable) for문에서 수행되는 i
        
    }
    console.log(i); // 10 출력.
}

myfunc();
console.log(i); // 100 출력


*/

console.log(x); // 2번째 에서 undefined 가 아닌 error //why 자바스크립트는 무조건 1번째에서 hosting 식별자 과정을 거침 // 단 let으로 hosting 은 일어나짐. 
// 실제 x를 사용할 수 있게 되는 시점은 x를 초기화 한 이후부터 사용할 수 있음. 따라서 
// 이 영역을 temporal Dead zon(TDZ)라고 불음. 2번째에서 console.log 이후 부터 let x = 100; 공간 사이에서는 x를 사용할 수 없는 상태.
let x = 100; // 변수 선언 후 x라는 공간을 만들고 undefined 갖춤 


// hosting은 var, let, const 몽땅 일어나는 현상.

let myVar = 1; // 전역변수 (global varable ) // 어디에서나 사용할 수 있음.

{
    console.log(myVar); // hoisting 발생 하지 않지암.ㄴ
    //let myVar =100;
} 

{
    console.log(myVar); // 1. 여기안에서 다시 hoisting 수행 
    let myVar =100; // 2. hoisting이 별도로 일어나서 => 에러가 다시 발생.
} 


var result = 100;
var myvar = 100;
myVar = '홍'
myVar = 3.14;

