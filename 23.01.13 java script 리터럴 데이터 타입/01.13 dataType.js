// primitive type 

// 1.number 정수와 실수를 구분하지 않음
// 
let myVar = 1.0 // 실수 -> number
console.log(myVar == 1); // true why? 같은 number형 이므로.
console.log(3/2);  // 1.5 
console.log(10 / 0); // 숫자를 0으로 나누면 원래는 무한대  => infinity(무한대)
console.log(10 * 'Hello'); // NaN(not a number) -> 산술연산불가.   // 자바는 아예 에러.


// 2. String type // 문자열 타입. //자바 스크립트는 싱글 ' ' 사용.
var myStr = '아우성!!' // 일반적인 형태.
myStr = "소리없는" // 이것도 사용이 가능 

mystr = '이것은 \n 소리없는 \n 아우성!' // 줄바끔기호 \n 
mystr = `이것은 
소리 
없는 
아우성!` //이렇게도 사용  // \` 행태로 여러 줄 사용

let test = 100
mystr = `현재 test의 값은 ${test}입니다.` // 특정 값을 가져오고 나서 문자열로 나타냄.
myStr = '현재 test의 값은 ' + test + '입니다.'
console.log(mystr);

// 3. boolean type = true, false 두 개의 값만 제공.
var test1 = true;

// 4. undefined type = 사용할 수 있는 값이 undefined 만이 있음.
// 이 값은 우리가 사용하는 값이 아님.
// javaScript engine에 의해서 사용이 됨.

// 5. null type - 사용할 수 있는 값이 null만 있음.
// 이 값은 우리가 사용는 값이예요.
test = null;

// 6. Symbol type
// es6 (ECMAscript 2015)에 추가된 타입임. 
// primitive type 
// 다른 값과 중복되지 않는 unique한 값을 표현.

let mySymbol = Symbol();
console.log(mySymbol); // Symbol() // 유일한 값은 맞는데 진짜 그 값이 무엇인지 확인할 수 없음.

let mySymbol1 =Symbol("소리 없는 아우성!");
let mySymbol2 = Symbol("소리 없는 아우성!");

console.log(mySymbol1 == mySymbol2); // symbol 값은 서로 다른 값으로 나옴. // false s// symbol로 만들어진 값들은 겹치지 않음.

// Reference type () 함수, 객체, 배열은 수업이 진행되면서 알아봄.
// 

/*
let str ='hello'; // 문자열은 primitive 값
console.log(str[0]); // h // 배열은 객체 -> 문자열은 객체 X // 문자열을 객체로 형태로 임의로 수행.
console.log(str.length); // 5 // lentgh 필드 => str을 인스턴스 형태로 쓰임.
console.log(str.toUpperCase()); // HELLO => to 메서드 형태 => str 인스턴스 형태로 쓰임.
// 자바스크립트는 primitive value에 대해 객체 처럼 사용함.
// primitvie value를 감싸는 wrapper object가 생성.
*/


/*
let str = 'hello';
str[0] = 'H'; // -> 이 순간 배열형태 처럼 만들어짐 => Hello 바뀜 => 이 명령이 끝나면  str = hello로 회귀 (그 라인이 끝나면)
console.log(str); // Hello (X) hello(O)

10; 
// myobj 객체 생성.
let myObj = {
    'name' : '홍길동',
    'age' : 20,
    'address' : '서울',
    'myInfo' : function (){
        console.log('소리없는 아우성!');
    
    }  //함수 리터럴로 쓰임 // 함수의 이름이 없는 형태 익명의 함수 일반적으로 쓰임.
} // 

console.log(myObj.name);
console.log(myObj.myInfo); // myinfo는 함수로 가르킴
myObj.myInfo();

*/
// 객체 literal로 객체를 살펴보고 있어요.
let obj = {
    'name' : '홍길동',
    10 : 200, // 10을 문자열로 10로 표현
    address : '인천'
}
console.log(obj); // key는 문자열 형태 인식 ''형태로 안써도 문자열로 인식 = key 문자열이구나.

obj.address = '서울'; // 실제로 가서 address가 없으면 추가함. obj안의 객체안의 내용(필드) 추가하거나 삭제를 가능함 (동적으로 제어 가능)
// 철자 하나만 틀려도 필드 값이 없다고 생각하여 새롭게 필드 생성.
// 필드 값이 변할 수 있어서 => mutable 형태 임.
console.log(obj.name); // 객체를 사용하는 방식.
console.log(obj['10']); // 자바스크립트는 배열 형태로 사용할 수 있음. // key 값이 반드시 문자열 형태로 사용함.

// 들 다 많이 쓰임.
console.log(obj.address)
// javaScript 객체 literal 어떤 방식으로 표현하는지, 사용하는 방식 알아야 함. '기본내용'



// typeof 라는 연산자가 있어요.  +, -, *
// 이 연산자는 값의 데이터 타입을 알려주는 역할
/*
console.log(typeof 100); // Number // primitive 
console.log(typeof 'Hello'); //String 
console.log(typeof undefined); // undefine 
console.log(typeof true);
console.log(typeof Symbol()); // symbol
console.log(typeof [1,2,3]); // array Reference type  => object

console.log(typeof null); // 원래 null이 나와야하는 데 object => wyy? 자바 스크립트의 대표적인 오류 -> 알지만 이전 자바스크립트이 실행이 안됨 

let myFunc = function() {
    // 함수에 대한 리터럴 
    // 함수 값 형태.
    // 특별히 이름을 붙이지 않아서 굳이 이름 안씀.
}

console.log(typeof myFunc); // object이 나와야하는데(Refernece이므로) function이 나옴. => 이런 데이터 타입은 없음... 
function 
*/

// 함수를 만드는 자바스크립트 내용 .. // 리터럴이 아님,

/*
function myFunc(a, b){
    return  a+b;
};
*/
/*
let a = function() {  }


// 함수 선언문.
function myFunc(a,b){
    return a+ b;
}
// 함수 표현식.
let aa = function () {
    
}   

// Function 생성자 함수를 이용한 함수 생성방식.
let bb = new Function ('x', 'y', 'return x + y');


// 화살표 함수 (ArrowFunction)
let cc = (x,y) =>  { return x + y } // 2개 받아서 ㄱㄱ


// 함수 선언문
function myfunc1(a,b) {
    return a+b;
}
console.log(myfunc1(10,20)); //30



(function myfunc2(a,b) {
    return a+b;
}) // 값으로 나타냄 => 이게 리터럴 형태로 됨. => 값을 asign에서 쓰임.

console.log(myfunc2(10,20)); // 에러 발생.

*/


console.log(myfunc1(10,20)); //30
console.log(myfunc2); // errors // 함수 이름도 식별자 이기 때문에 호이스팅이 발생.
// 함수 선언문
function  myfunc1(a,b){ //myfunc1은 이안에서 여기에서만 쓰임 => myfunc1을 호출하기 위해서 이것을 가르키는 변수를 가져옴.
    return a+ b;
}

// 함수 표현식
let myfunc2  = function (a,b) {
    return a + b;
}

// 함수 이름을 호출하는 것이 아니라, 함수 이름을 본딴 변수을 호출하는 것.

// 함수 선언

function add(x,y) {
    // 모든 함수는 눈에 보이지 않은 내장 배열이 하나씩 있음.
    // 그 이름은 arguments => 넘어온  
    // arguments[] => [10,20,30,40]
    return x +y;
}

console.log(add(10,20)); //30
console.log(add(10));  // javascript는 이름만 맞으면 인자의 개수에 상관없이 무조건 호출. => NAN 10과 undefine 결합이므로 => NaN

console.log(add(10,20,30,40)); // 결과는 30이 리턴, // 넘어온 인자를 싹으리 받음.

function add() {
    // 모든 함수는 눈에 보이지 않은 내장 배열이 하나씩 있음.
    // 그 이름은 arguments => 일단 넘어온 값들은 다 받아옴.  
    // arguments[] => [10,20,30,40]
    return arguments[0] + arguments [1];
}

// 인자의 개수를 
// IIFE(즉시 실행 함수)
(function add() {
    let x =10;
    let y = 20;
    console.log(x + y);
}()); // 함수를 만들자마자 바로 실행

add(); // 원래는 실행하는 함수 , add 이름을 따온 변수. => 따라서 해당 이름의 변수를 찾아서 function add() { ~~} 찾아서 실행.

// 일반적으로 익명으로 수행.
// 즉시실행함수는 - 일반적으로 anonymous 만들어요.
// 함수 선언하면서 바로 실행하는 용도.
// 함수를 만들고 바로 호출하여 끝냄. -> 함수를 한번 사용하고 버려짐.

(function add() {
    let x =10;
    let y = 20;
    console.log(x + y);
}());

add(); // 바로 에러 뜸 위에서 만들자마자 날려서 .
// 함수는 일련의코드를 만들고 간결하게 유지보수 하려는 목적. -> 1번사용하고 2번째 사용 X 
// 생각해보면 이걸 왜 만들고 쓰는 건지? 
// 글쎄. 아 다른이유가 있음.
// 전역 scope를 공유하는 게 아니라 특정 scope를 공유할 수 있음.
// 즉시실행함수를 이용하면 함수 scope 내로 함수 scope를 제한할 수 있음.
// 변수의 scope를 제어할 수 있음. 
// 자바 스크립트의 특성인 전역 scope의 공유 문제를 해결할 수 있음.

// 중첩 함수에 대해 알아봄.
// 선언적 함수
function outer() {
    let x = 1;
    
    // 이게 중첩 함수임.
    function inner() {
        let y = 2; 
        console.log(x+y);
    }
    inner(); 
}

// inner(); // 실행 안됨 범위 벗어남
outer();

// 프로그램을 하나 만듬

// 숫자를 하나 입력을 줘서, 0부터 해당 숫자까지 console에 출력하는 아주 간단한 프로그램을 작성,

function repeat(n){

    for (let i = 0; i<n ; i++){
        console.log(i);
    }
}; 
repeat(3);

// 다 만듬 .
// 시간이 자나서, 새로운 기능이 필요하게 되었음. 
// 숫자를 하나 입력을 둬서 
// 0부터 해당 숫자까지 console에 홀수만 출력하는 기능을 추가해야 함.


function repeat_odd(n){

    for (let i = 0; i<n ; i++){
        if(i % 2 == 1){
            console.log(i);
        }
    }
}; 

repeat_odd(10); //노동 집약적 기술 -> 기존의 함수의 중복 발생.
repeat
// 프로그래밍 언어에서 일급시민 용어가 있음.
// first class citizen

// 일급 객체라는 표현을 더 많이 사용 
// first class object

// 4가지 특성을 만족하는 객체를 우리는 1급 객체라고 함. (프로그래밍언어에서 나온는 객체 해당항목에 충족하면)
// 1.익명의 literal로 생성이 가능. (리터럴로 이름이 없게끔 만들수 있음.)
// 2. 변수에 저장될 수 있음. -> 객체이기 때문에 특정 객체로 인식 (값으로 판단될 수 있음.)
// 3. 함수의 인자로 전달될 수 있어야함.
// 4. 함수의 리턴값으로 사용할 수 있어야 함.

// 함수는 리터럴로 만들 수 있음. 이름 없이도 만들 수 있음. (익명으로 리터럴을 만들 수 있음.)
// 2. 변수에 저장도 가능. => 값으로 사용할 수 있음. "리터럴은 값/value"
// 3. 함수를 호출할때 불러오를 값이 있음. (인자로 전달이 가능)
// 4. 함수의 리턴 값으로 사용이 가능 (값이니까 )

// 자바스크립트 함수는 1급객체의 만족함/

//일급객체의 특성을 이용해서 위쪽에 공통된 요소를 많이 가지고 있는 두개의 함수 구현을 하나로 합성 해볼 꺼임.

// 함수를인자로 받음 (내가 수행할 함수에 대해 )
// 공통된 로직을 작성하고 경우에 따라서 변화되는 로직을 추상화해서 외부 함수로 대체


function repeat(n,f) { // 얘를 호출할 때 호출하는 다른 함수를 호출 
    for(let i = 0; i< n ; i++){
        f(i); // 함수를 받아서 함수를 실행시킴.
    }   
    
}
 // higher, oudrer function (교차 함수)
let printAll = function(i){ // 내가 수행할 추가할 특성을 추가.
    console.log(i);
} // collback function 
let printOdd = function(i){
    if (i% 2 == 1) console.log(i);
}

let printEven = function(i){
if (i% 2 == 0)  console.log(i)
};

repeat(10,printEven);
    


var myArray = [1,2,3,4]


myArray.forEach(function(){})

// 이미 콜백 매커니즘임

// 자바의 모든함수 처리는 콜백처리임. 
// 자바스크립트는 1급 람수 형태로 처리 (어떤 함수를 수행하는 지에 따라서.)