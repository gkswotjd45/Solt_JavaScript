/*
// 일반 객체 
var obj  = {
    name : '홍길동'
}
console.dir(obj); // 일반 객체


// 함수 선언문
function myFunc(number){
    return 2 * number;
} // myfunc라는 이름을 가르킴.

console.dir(myFunc); // myfunc 라는 래퍼런스 // 함수 객체

// => 모든 객체는 prototype을 가지고 있음

*/

/*
function myfunc(a,b){
    // arguments 유사 배열 객체가 있음 
     // return a+ b;
     // argument 함수 객체의 property
     // 가변인자함수를 구현하기 위해서 사용. (인자의 상관없이 특정한 작업을 하기위해 ex)sum)
     return arguments[0] + arguments[1];
}

// 가변인자함수
function sum(){
    // "arguments 유사 배열 객체가 있음" 
     // return a+ b;
    // 유사배열객체는 배열과 유사한 객체.
    // 배열과 생긴게 똑같고, 사용도 비슷하게 할 수 있음.
    // 진짜배열이 아님, 배열이 가지고 있는 기능을 다 가지고 있지 않음.
     // argument 함수 객체의 property
     // 가변인자함수를 구현하기 위해서 사용. (인자의 상관없이 특정한 작업을 하기위해 ex)xum)
    let result = 0;
    for(let i=0; i<arguments.length; i++){
        result += arguments[i];
    }
     return result;
}
//myfunc(10,20,30,40); // 이름만 맞으면 무조건 호출
console.log(sum(10,20));
console.log(sum(10,20,30));
console.log(sum(10,20,30,40,50));
*/

/*
// es6에 들어오면서,  
// 별도의 Rest Parameter라는 것을 도입. => ..args (나머지 파라미터를 싹 다 받음)
// 특히 Arrow function은 argumnets가 없음.
// => 그래서 Arrow function은 RestParameter만 사용할 수 있음.
function sum(...args) {
    // args에 표현되는 Rest Parameter는 진짜 Array 객체.

    let result = 0;
    for(let i=0; i<args.length; i++){
        result += args[i];
    }
     return result;
}

console.log(sum(10,20));
console.log(sum(10,20,30));
console.log(sum(10,20,30,40,50));

// 함수 선언문 - 생성자 함수 
function Circle(radius){
    this.radius = radius; 
    // 프러퍼티 //  지역변수
    this.getArea = function(){
        return Math.PI * this.radius ** 2;
        // 메스 함수의 PI라는 프라퍼티
    }
}

const circle1 = new Circle(2);
const circle2 = new Circle(5);
*/


/*
function Circle(radius){
    this.radius = radius; 
    // 프러퍼티 //  지역변수
    Circle.prototype.getArea = function(){
        return Math.PI * this.radius ** 2;
        // 메스 함수의 PI라는 프라퍼티
    }

    // Circle 객체의 포로토 타입의 프러퍼티는 = 별도로 생성된 prototype객체를 연결시킴.
}

const Circle1 = new Circle(2);
const Circle2 = new Circle(5);

// 같다. => == "내용이 같은 지 비교." 단, 타입이 다르면 일단 타입을 맞추고 같은지 비교.
// => === "타입이 같고 내용이 같은 지 비교."

console.log(Circle1.radius === Circle2.radius); //faluse 반지름 값이 2,5 이므로
console.log(Circle1.getArea === Circle2.getArea); //true 프로퍼티 객체는 동일한 객체를 가르킴므로 동일.

// 따라서, Circle의 prototype 객체를 상속을 받는 구조로 생각하면 됨.

*/
///////////////////
/*
function Circle(radius){
    this.radius = radius; 

    Circle.prototype.getArea = function(){
        return Math.PI * this.radius ** 2;
      
    }
    Circle.prototype.name = '홍길동'

}

const circle1  = new Circle(2);
const circle2 = new Circle(5);
/*
console.log(circle1.name, circle2.name);



circle1.name = '신사임당' // name 프라퍼티가 없므므로 새롭게 만듬.
 // 프로퍼티가 동적으로 추가 삭제 수행.

console.log(circle1.name, circle2.name); //신사임당, 홍길동

Circle1.__proto__.name = '신사임당'; // 객체의 프로토타입으로 접근하기위해서 사용,

console.log(circle1.name, circle2.name);


console.log(circle1.constructor === Circle); // true
// 상위 프로토 타입의 consrtur == Circle이라는 생성자 함수.
console.log(circle1.__proto__.constructor === Circle); // true

*/
/*
console.dir(circle1);

*/
////////////////
//prototype은 결국 상속구조를 나타내기 위한 방법.


/*
const obj = {}
const parent = {x: 1}
obj.__proto__ = parent; // 내 상위 프로토 타입을 지칭. // 객체 기반으로 상속 구조를 변경.
// 상속구조를 동적으로 변경.
console.log(obj.x); // 상위 객체의 x의 변수를 사용. // 자바에는 상위에서 이미 지정. */


// 리터럴을 이용한 객체 생성.
/*
var obj = {
    name : '홍길동'
}
console.dir(obj);
*/
//////////////

/*
// 생성자 함수을 이용한 객체 생성.
function Circle (radius){
    this.radius = radius;
}

const circle1 = new Circle(1);

console.dir(circle1);

/////////
// 유일한 예외 1개 //[[prototype]] 없음 // 객체를 만들때 상위 프로토 타입이 없음.
// 객체 만들 때 이렇게도 만들 수 있음.
Object.create // Object 생성자 함수이면서, 객체임 // 프러퍼티를 가짐

const obj1 =Object.create(null); // 이런 방식으로 만듬, //객체를 만뜰 때 내가 상위프로토타입을 직접 지정.

// null을 주면, 상위 prototype 객체를 사용하지 않는다는 의미
// 이렇게 되면 __proto__를 아에 사용할 수 없음. (내위에 아무것도 없으므로)
// 따라서 가능하난 사용을 금함.
// 그래서 __proto__를 코드에 직접적으로 사용하는 건은 바람직하지 않아요.
// 권장하지 않음. // 위 같은 예외 상황이 있으므로.
// 다른 방법으로 사용 -> 다른 방안을 제공.

// 원래는 [[prototype]] 코드에서 사용이 안되는 것.

// 상위 프로토 타입객체를 지정해서 만들 수 있음.
const obj2 = new Object();
*/
// 객체 리터럴로 생성

/*
const obj = {};

const parent = {
    x : 1
}


// 상위 prototype 객체를 얻어오기 위해서 아래처럼 하는 것은 좋지 않음
//obj.__proto__ // object 상위 함수를 상속 못하는 경우 있음.

Object.getPrototypeOf(obj); // get 프로토 타입을 가져옴

//상위 객체를 상속
//Object.setPrototypeOf(obj.parent); // obj의 prototype객체를 parent로 설정.
Object.setPrototypeOf(obj,parent); 
console.log(obj.x); //1

*/

// non-constructor인 arrow function를 하나 만들어서
// 진짜 이 함수객체의 prototype객체가 생성되지 않는지 확인

/*
// 화살표 함수 // 생성자 함수 X
const person = (name) =>{
    this.name = name;
}
// person은 함수객체.
console.log(person.prototype); // 실제로 person의 prototype(상위) 프로퍼티 X = prototype 없음.

*/

//지금까지 한 내용을 바탕으로 전체적인 그림을 그려보아요.
/*
function Circle(radius){
    this.radius = radius;
} // (그림 5)

Circle.age = 20; // Circle(함수객체)+t새로운 프러퍼티 추가.

// 생성자 함수로 객체 생성.
const circle1 = new Circle(5);
console.log(circle1);
console.log(circle1.age);// undefine ==> why? 상속받은 체인이 다름.

*/

// 일반적인 규칙 없이 막쓰면 유지 보수에도 도움이 안됨.
// 좀 정상적으로 규칙있게 써보자.
// 전역에서 제일 위에 or 함수 위에서 제일 위에 => 문자열 사용.
//'use strict'; // 암묵적 전역이 에러 표시. // 전역적으로 모든 함수에 적용.

/*
function foo() {
    'use strict'; // 함수 안에 쓰면, 해당 함수안에서만 적용.
    x = 10; // 자바스크립트는 변수 선언을 안해서, error가 아니라 전역변수로 만듬.
            // window 객체의 property로 등록.
            // 암묵적 전역 (implicit global ) 이라고 함
            // 자바 스크립트의 특유의 특징
            // 자바스크립트는 변수선언을 하지 않아도 됨.

}

foo();

console.log(x); // 10


*/

/*
var x = 100; //전역 코드
if(true){
    let x = '홍길동'  //전역영역에 있으므로 전역 코드
}
function myfunc(){
    // 함수는 코드별로 따로 분류 함
    // 함수를 선언한 부분은 전역이지먼 // 함수를 수행하는 코드는 전역 코드와 별도로 존재.
    console.log('hello');
    function aa(){
        console.log('gaga');
    }
    // 함수 코드는 함수별로 함수 안에 있는 영역이 다르게 존재함.
}
*/

/*

const x =1; // 전역 실행 컨텍스트 -> 전역 렉시컬 

function foo ( ) {
    const x =2;

    function bar(){
        const z = 3;
        console.log(x+y+z);
    }
    bar();
}

foo();
*/
/*
const x = 1;
function outer() {
    const x  = 10; // 자기 상위 위치한 레파타 변수로 수행.

    // 함수 표현식으로 함수 만듬 (리터럴로.)
    const inner = function() { // 우리의 렉시컬
        console.log(x); // x 는 10
    }
    return inner; // 함수가 함수를 리턴하고 있음.
    // 일급객체에 해당 // 함수를 리턴. (함수가 함수를 리턴)
} 

const result = outer(); // 함수할당 해제 // 리턴되는 순간 함수가 끝남 - 아웃터 환경이 끝날(벗어나는) 형태.
result(); //따라서 1이 돼야 우리가 알고있는 정상적인 형태.
// 렉시컬은 stack에서는 빠지는. 렉시칼 환경은 그대로 남겨줌.
//execution context stack의 동작.
// 그런데 10이 찍힘 why? 이 현상을 클로저라고 불음. 

// 클로저 ㅅ

// 해당 렉시컬 환경을 그대로 유지.
*/

// 함수가 함수로 리턴하기때문에 해당 변수가 남을 수 있음.

/*
function foo (){
    const x = 1; 
    const y = 2;

    function bar(){
        const z =3;

        console.log(z);
    }
    return bar; // bar는 x,y를 사용하지 않으므로 클로저 형태가 아님 따라서 리턴하면 같이 x,y가 같이 날아감.
}

const result =foo();
result();

*/
/*
//let num = 0;
const increase =  function(){
    let num = 0;
    return ++num;
}
console.log(increase()); // 1 //1
console.log(increase()); // 2 //1
console.log(increase()); // 3 //1

num = 10;
*/
/*
const increase = function(){
    let num = 0;
    return function(){
        return ++num;
    }
}
console.log(increase()()); // 1
console.log(increase()()); // 1
console.log(increase()()); // 1

*/
/*
const increase =  (function(){
    let num = 0;
    return function(){
        return ++num;
    }
}());
console.log(increase());
console.log(increase());
console.log(increase());
*/