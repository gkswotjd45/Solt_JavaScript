/*
let myVar = 1; // 전역변수 (global varable ) // 어디에서나 사용할 수 있음.


{  
    
    //console.log(myVar); 
    myVar = 100;
    console.log(myVar); 
    let myVar;
} 

console.log(myVar);

*/


/*
const obj1  = {
    x : function() {} //  q1) method라고 하지 않음. why? 자바스크립트에서는 일반적으로 객체 안의 프러퍼티로 정의된 함수를 method라 일컫음.
    //해당 function은 생성자 함수로서 
    //
    // 프로퍼티 x라는 키에 value 값으로  function() 선언한 상태이므로 ,
}
new obj1.x(); 
            // 생성자 함수.
            // method가 아니기 떄문에 객체생성이 가능 
            // construct 가능

const myFunc = (a,b) => {return a+b}
//myFunc();  // 가능 [[Call]]이 있어요!
// new myFunc();  // Error!



 var obj = {
        //myFunc : function() {} /q2) 위 선언한 함수의 차이
            //이 형태가 축약형이고 메소드라고 불러요!
        myFunc() {  
            //메서드 형태
        },
        name : '홍길동'
}

 new obj.myFunc();  // 객체생성이 안되요!   
 

*/

function Circle(radius){
    this.radius = radius;
} // (그림 5)

Circle.age = 20; // Circle(함수객체)+t새로운 프러퍼티 추가.

// 생성자 함수로 객체 생성.
const circle1 = new Circle(5);
console.log(circle1);
console.dir(Circle);
//console.log(circle1.age);// undefine ==> why? 상속받은 체인이 다름. q5) 왜 undefine

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
console.log(result);

*/