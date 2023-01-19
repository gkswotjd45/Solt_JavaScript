/*
var x = "hello"; // 전역변수 = global scope


function aa() {

    // 로컬 scope 
    // 단 foo와 aa 함수는 별로로 나눠져 있기 때문에, scope chain이 연결되어 있지 않음.
}

// 함수 선언문
function foo() {
    var x ="World" // local Variable, 지역 변수
    console.log(x); // x ? 

    function bar() {        
        var x = "haha"
        // 함수 안에 함수가 있음.
        // 함수 마다 사용하는 변수의 scope 있음.

        console.log(x);
        // 기본적으로 scope 포함관계임. (foo가 bar를 포함.)
        // y를 먼저 bar() 함수에서 찾고, 없으면 foo()에서 찾고 없으면, 전역 필드에서 찾음. 
        // scope chain (자바 스크립트는 변수 서로 연결)
        // 변수를 찾을 때 현재 scope로 부터 상위 scope로 올라가면서 변수를 찾아요!
        // scope는 서로 포함관계에 있을 수 있음.

    } 
    // javascript engine이 이 x는 과연 어떤 것인지 판단.
    // 식별자 결정. (indentifier resolution(식별자 결정) => Scope)
    // 변수를 사용할 수 있는 유효 범위.
    // 두 개의 x는 이름은 같지만, scope가 다름.
    // 이 두개 x는 서로 다른 변수
    // scope => namespace "이름을 구분하는 공간"
    // 
    bar();
}

foo();
console.log(x);
*/



/*
// 렉시칼 scope
var x =1;
function foo (){
    var x  =10;
    bar();
}

function bar() {
    console.log(x); // 실행되는 위치로 변수 찾기 = 10 
                    // but) 만들어지는 위치를 기준으로 찾으면 x = 1; 
                    // 대부분 호출되는 시점으로 변수 찾기 => bar() global 범위에 선언되어 있으므로 global에 선언된 x값을 호출
                    // bar() 상위 scope는 전역 scope 이므로 x =1;
}

foo(); 
 */

// 객체 literal
// 객체를 만들 때 const
// let과 const의 차이는 없지만, 똑같다. but 1가지만 제외하고 const는 재할당이 안됨. // constant(상수) - 할당 자체 고정, 안에 있는 값의 변경은 가능함. (내용의 재할당 가능)

/*
const obj = {
    // property 
    myName : '홍길동',
    myAge : 20
};

// 또다른 객체를 재정의. // 재할당 X //
//obj = {}; // Error -> 객체 재정의 X
//const obj = 10; // 일반 primitive value를 저장하기 위한 용도로 const를 사용하지 않음. => let, var로 많이 쓰임.
//const 객체선언시 사용..

console.log(obj);
//console.log(obj.[[prototype]]);// 중요한 내부슬롯, but 개발자가 접근 X // prototype 모든 객체가 다 들고 있는 객체, 
console.log(obj.__proto__); // 프로토 타입을 위해 특별히 제공된 것. // 간접적인 제공 방법.

*/

/*
const person = { 
  name : '홍길동',
  age : 20   
}
console.log(person);
console.log(Object.getOwnPropertyDescriptors(person)); // ptors - 특정 프로퍼티의 모든 프러퍼티 정보를 알려줌
*/

// 객체를 다른방식으로 만들어 봄.

/*
const person = {};

Object.defineProperty(person,'firstName',{ 

    value : '홍',
    writable :true, //수정할 수 있음.
    enumerable : true, // 나열될 수 있는가? // for문으로 키값을 도출할 수 있는가?
    configurable : true
    // 4가지 내부 슬롯의 attribute 재설정 // attriubute에 의해 바꿀수 있다고 인식. // 항상 value값을 바꿀수 있다고 생각하지 않기.
}); // 프로퍼티를 정의한다. // 내가 가지고있는 객체의 프러퍼티를 정의한다. // firstName 프러퍼티 키

// 내부슬롯을 object함수로 제어한다. (내부의 attribute를 수정,)
// 
*/

// 위 방식과 아래 방식과 동일.
/*
console.log(person.firstName);
person.firstName = '최';
console.log(person.firstName);
*/

/*
console.log(person);

// for ( Book vo : list ){}
for(let key in person){ // person의 객체를 1개씩 뽑아냄.
    console.log(key);
    // 프로퍼티의 키값을 불러서 열거할 수 있음.
}
*/

/*
const person1 = {

    firstName : '홍'
}
*/

/*
const person = new Object(); // new키워드를 이용해서 생성자 함수 호출. // 빈객체를 만듬 // {  } // 내부적인 구조는 다르지만, 의미적으로 동일.

person.neame = '홍길동';
person.age = 20;

console.log(person);

const strObj = new String('소리없는 아우성!'); // new 를 통핵 객체로 만들었으므로 object로 띄움.
console.log(typeof strObj); // Object (const로 생성자 함수를 통해 생성한 Object이므로)
console.log(strObj); // 생성자함수로 만든 객체안에 ('소리없는 아우성!')임 => // 객체로 만들어지고 글자마다 프러퍼티 value값으로 설정 
//  => "유사 배열 객체" (배열처럼 보이지만, 배열의 기능은 없음.)
// strobj도 객체이므로 prototype을 가지고 있음. 특정내부값이 박힘 (진짜 문자열은 별도 보관) -> but PrimitiveValue는 직접접근 X
// new 생성자 함수로 String으로 만들면 위 방식으로 만듬. (아예 primitive을 value화 시킴)

// 유사배열객체는 진짜배열과 동일한데 대신, 함수를 가지고 있지 않아, 사용하는데 제약이 있음. 대신 indext 같은 기능을 있어 배열처럼 사용할 수 있음.

const strobj1 = {
    name : '홍길동'
}

console.log(typeof strobj1); // Object
console.log(strObj1);  // 내용은 name 은 '홍길동' 이 있다고 나타냄. (문자열을 객체화 시킴 name) 

*/

/*
const numObj = new Number(100); // primitive 100을 객체 100로 만듬.
console.log(numObj); // PrimitiveValue 100은 직접 엑세스 X ,  표현은 다르게 나타낸다. = > bulit in 방식 //문자를 String 객체로 만들때  숫자를 number객체를 만들때
*/

/*
const dateObj = new Date(); // 현재시간을 Date 객체로 만듬. (시간을 객체화).
console.log(dateObj.toLocaleString()); */

//동일한 형태 객체를 만들려면 
// 1. 노동 집약적 형태.
let obj1 = {
    name : '홍길동',
    age : 20
}
let obj2 = {
    name : '신사임당',
    age : 30
}
let obj3 = {
    name : '최길동',
    age : 40
}

/*
// 사용자 정의 생성자 함수
// 생성자 함수는 관용적으로 첫글자를 대문자를로 씀.

// 2가지 형태로 사용이 가능
// 1. 일반 함수로..
// 2. 생성자 함수로..

// 함수 선언문
function Person(){
    
}
const person1 = new Person(); //생성자 함수로 생성
const person2 = {} // 리터럴로 함수 생성

console.log(person1);
console.log(person2);*/


//일반적인 "생성자 함수"의 형태를 알아봄.

// 1." this. 키워드가 나옴"
// this의 의미는 이 "생성자 함수"로 만들어진 객체를 지칭.

// 2."" return 구문이 없음.""
// 묵시적으로 생성된 객체를 리턴해요. 그래서 return을 쓰지 않아요.

/*
function Circle(raduus){
this.raduus = raduus; // this 로 반환되는 값을 매개 변수에 옮김. => 생성자 함수로 사용될 가능성 높음 this.필드, 함수 첫글자 대문자로 선언
//radius = 파라퍼티 

this.getDiameter = function () {
    return 2 * 3.14* raduus;
}
}
let Circle1 = new Circle(5); // 생성자 함수로 객체 생성.
let Circle2 = new Circle(10);

console.log(Circle1); // Circle1 객체를생성하여 정보 출력 = Circle {5, 함수} 선언된 형태.
console.log(Circle1.getDiameter());
*/

/*
// 함수선언문
function foo(){
    console.log(this);
}
// 내가 어떻게 불리는 형태에 따라 생성자 함수, 일반함수로 경정.

foo() ; //1) 일반함수로 호출 -> this 의미 전역객체 (window 객체) (우리가 가지고 최상위 객체, 자바스크립트 호출에 대해 모든 것을 들고 있는 객체.)

const obj = {

    
        // foo : function() {
        // console.log(this);
        //}
    
    // 내가 직접 생성한 foo 파라마티 커 // 내가 위에서 선언한 함수 foo 의미 

    foo, // 키와 value 쌍이 아닌 프라퍼티, 축약된 형태 foo : foo 의미 // 해당 객체의 함수 (메서드) // 객체가 가지고 있는 함수, es6의 축약표현
    // 이렇게 축약 표현으로 되어 있는 함수를 메섣,
    // es6 메서드는 객체 안의 함수가 있다고 해서 전부다 메서드가 아님.
    // 이 형태는 메서드 형태로 함수를 표현.
    name : '홍길동'
}



obj.foo(); //2) 이때 this, 현재 메서드를 실행하는 객체 obj 의미. (메서드 형태로 되어 있을 때 this 해당 객체를 부른 객체을 의미)

const obj4 = new foo(); // 3) 생성자 함수로 만들어진 객체를 리턴 // foo에 의해서 만든 객체

//this라는 키워드를 불리는 3가지 의 다른 형태
*/
// //////////////////////////////////////////////////////////////////
//생성자 함수는 new keyword와 함께 사용 되고
// 그리고 생성자 함수는 그 안에 return 구문이 없어요!
// 그럼에도 불구하고 만들어진 객체가 묵시적으로 리턴됨
/*
function Circle(radius){
    this.raduus = this.radius
}

const Circle3 = new Circle(10); // 생성자 함수, Circle이라는 객체가 리턴됨.
console.log(Circle3);

// 함수가 호출 되었는데, 리턴값이 리턴이 없으면, 묵시적으로 undefine 리턴.
const Circle4 = Circle(10); // 1) 일반함수 형태 호출 //q1) 윈도우 객체 프러퍼티를 갖다 붙인거 this
// 리턴 값이 없으므로 undefine으로 출력.
*/

/*
function Circle(radius){
    this.raduus = this.radius
    
}

const Circle3 = new Circle(10); // 2) 생성자 함수, 

console.log(Circle3); // { } //  생성자 함수는 리턴 함수를 쓰면 안됨. //생성자에서 3) primitive type이면 해당 항목은 무시되며, 원래 this을 반환
                            // 생성자 함수는 객체를 함수 반환.

*/
/*
// 함수가 호출 되었는데, 리턴값이 리턴이 없으면, 묵시적으로 undefine 리턴. (일반함수)
const Circle4 = Circle(10); // 일반함수 호출 //q1) 윈도우 객체 프러퍼티를 갖다 붙인거 this
// 리턴 값이 없으므로 undefine으로 출력.
*/

/*
function Circle(radius){
    this.raduus = this.radius
    return 100;
}
const Circle4 = new Circle(10); //3) primitive type 반환

console.log(Circle3); // { } //  생성자 함수는 리턴 함수를 쓰면 안됨. //생성자에서 3) primitive type이면 해당 항목은 무시되며, 원래 this을 반환
// 생성자 함수는 객체를 함수 반환.


//전역객체 에서는 let 사용불가 var 사용가능
let myAge = 20; // window 객체에 등록 X, but 전역변수는 (scope가 전역설정되어 있음) 맞음.
var myName = '홍길동'; // 전역객체 이므로 전역객체의 winddow에 접근. // winddow 객체의 property 등록.

console.log(myName);
console.log(window.myName); // 홍길동
console.log(window.myAge); // undefined

function foo () {
    console.log(this); // winddow 객체를 지칭. 
}

foo();


*/

/*
//q2)   
function Circle(radius){
    this.radius = radius
    // Circle의 프러퍼티 radius에 생성하고 10을 삽입.
    // 이때 
}

const Circle1 = Circle(10); // 2) 일반함수, 

console.log(radius); // 10

// 함수 선언문
function foo (){

}

// 첫번째 phase에서 foo라는 변수가 생성(묵시적으로)
foo.myName = '홍길동'; // 함수도 객체니까 프로퍼티를 붙일 수 있음.
foo.myFunc = function() {
    console.log(this);
}
// 특정객체 프러퍼티 호출하는 경우.->
// 이때 this는 foo라는 함수이고, 

console.log(foo.myName); // 홍길동
foo.myFunc; // foo라는 함수를 객체로 반환
// 함수에도 프러퍼티가 붙일 수 있다.
*/

/*
// 함수형태로 되어있는 형태만 , 함수선언문, funcotion 생성자, Aroow 화살표 정의.. 만이 [[call]]이 붙음
function foo() {

}
// 일반 함수로 호출이 가능하기 때문에, 기본적으로 [[call]]를 가지고 있는 함수
// callable

foo(); // 이렇게 호출하면. 내부적으로 [[call]]이 호출 됨.

var myVar = 100; // 일반변수.
myVar(); // 내부적으로 [[call]]이 없기 때문에 오류가 발생.


var my = {}; // 일반객체
my(); // 에러가 발생. // 내부 메서드가 없음.
*/

// [[Construct]] = > 함수객체에 붙을 수 있어요.

// 1. [[Construct]] 내부 메서드가 붙는 경우 => 함수 선언문으로 만들었을 때 붙음.
// "함수 선언문, 함수 표현식, 클래스"  => Constructor 
// 이 3개는 "객체를 생헝할 수 있는 함수" 형태, new 키워드와 함께 객체를 생성 사용.
/*
// constructor 라고 불림 
function myFunc() {

}
// 함수 표현식 
var myfunc = function() {}

// 자바와 했던 클래스와 동일 -> 실제로는 myFunc 생성자 함수와 만든거랑 동일. // 클래스 형태로 표현을 전환.
class MyFunc {

}

function myfunc(){

}
myFunc(); // [[call]] 호출 // 일반적인 일을 함.
new myFunc(); // [[construct]] 호출

// 2.  [[Construct]] 내부 메서드가 없는 경우 => 1) 메서드인 경우 (ES6 메서드 표현식) /2) Arrow - Function => 객체를 만들어 낼 수 없음.
// non-scostructor

// 함수선언문. callable [[call]] 가지고 있음.
// new 키워드로 생성 가능 = Constructor도 가지고 있음.

function foo() { // 일반함수
    
}

foo(); // callable 
new foo; // constructor 이기 때문에 가능.

const bar  = function(){

}

bar(); // callable
new bar(); //constructor
*/

/*
const obj  = {
    x : function() { } //  q3) method라고 하지 않음.
    // 이게 생성자 함수\
}
new obj.x(); // method가 아니기 떄문에 객체생성이 가능 
            // construct 가능

//const myfunc(a,b) => {return a+ b};
//myfunc() ;//zhf

//new myfunc(); // Error!

var pbj = {
   // myfunc : function() {}

        // 이 형태가 축약전이고 메소드라 불림
        myfunc(){
        },
         // 얘만 메서드
    
    
   
    name : '홍길동'
}
new pbj.myfunc(); // 객체의 생성이 안됨.*/

// 함수선언문 // 생성자 함수 보다는 return 문이 나오므로 일반 함수.
// construct : 객체를 만들어 냄.
/*
function add(x,y){
    return x+y;
}

let instance = new add(); // 이름만 맞으면 가능.
console.log(instance); // add (생성자 함수로 부터 만든 객체) {} -> 생성자 함수로 만들었기 때문에 일단은 객체를 반환
*/

/*
// 함수 선언문
function createuser(name, age){
    //return {name, age}; // 프로그램 틱하게 만든 형태
    //return {name : name (key,value), age: age}


    // this.name = name; 
    //this.age = age; // 생성자 함수이름이 붙임.
}

let inst = new createuser('홍길동',20);
console.log(inst);
*/

// 함수선언문 - 생성자 함수 (첫글자생성자 함수)
/*
function Circle (radius){
    this.radius = radius;
    this.getDiamerer  = function() {} // 메서드가 아닌, 함수의 프러퍼티가 붙여 있는 형태.
    console.log('haha');
}

const circle1  = Circle(10); //
console.log(circle1); // undefined  (why undefine >) // 일반함수는 return 값이 반환되는데, 아무것도 받아낸게 없음.

console.log(radius); // 10

circle1.getDiamerer(); // Error // circle1에는 아무 객체도 엇ㅂ음.

*/
/*
var obj = {
    name : '홍길동'
}
console.log(obj);
// ㅣog 내용을 문자열로 표시하는 것이 주.
console.dir(obj); //
*/

/*
function square(number) {
    return number * number;
}
//console.log(square); // 함수의 내용의 문자열을 보여줌 , 함수 객체 내부를 보는데 한계 O
console.dir(square); // 함수객체를 까서 볼수 있게끔 기능을 제공.


*/