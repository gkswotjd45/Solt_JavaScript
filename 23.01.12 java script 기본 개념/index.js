
//일단 먼저 node.js을 설치해서 이걸 이용해서 우리가 작성한 코드를 실행.
// 서버쪽 자바스크립트 코드
// 자바 스크립트는 Arraylist가 없음. 
// 자바 스크립트의 기본 자료 구조는 Array(배열)임.

/*
const myArray = [1,2,3,4]

// 기본 for 구문
for(var i =0 ; i<10; i++){

}
*/

// 기본 for 구문대신에 foreach를 이용.
/*
myArray.forEach(function(data){
    console.log(data)
    //system.out.print = console.log
})
// 배열 항목들을 각각 반복하여 수행. => ()안에서 어떤 작업을 수행할 지를 정함 data = 1 2 3 4 의미
*/


// 경고창을 띄움
// alert()은 브라우저가 가지고 있는 API

//alert('소리없는 아우성')

// nosw.ja 를 이용해서 javascript 코드를 실행시키며
// 변수 선언
console.log(result); // 에러가 아님 
// 당연히 에러가 나와야 정상인데. error가 아님 그 이유는 hoisting 때문
// 자바 스크립트의 실행은 2개의 phase로 실행
// 1번째 페이지는 -> Creating phase 라고 함 (위에서 아래로 선언한 항목을 먼저 수행.)
// 모든 선언구문을 찾아서 식별자를 메모리에 매핑 (변수화 시킴)
// 이 과정이 끝나면, 처음으로 돌아가서, 코드를 실행함.
// 2번째 phase execution phase 라고 함
var result = 100 // 해당 변수를 100으로 바뀜.


// 자바 스크립트 변수는 특이한 성질을 가지고 있음.
//  hoisting이라는 특성이 있음.

// var keyword는 같은 scope내에서 중복 선언이 가능함

/*
var x =100;                             //x 선언 및 초기화
var y =200;                             // y 선언 및 초기화            

var x =300; // VAR가 없는 걸로 간주
// X = 300 값 도출
var y; // 이 값은 아예 이구문은 없는 형태로 간주.  무시.
*/

/*
// VAR KEYWORD는 FUNCTION LEVEL SCOPE만을 
// local scope를 인정. (함수 기반(메서드))
// 함수의 코드 블록만을 스코프로 인정한다. 따라서 전역 함수 외부에서 생성한 변수는 모두 전역 변수이다
var x = 1;

if(true){
    var x = 100; // 상위 x와 현재 x는 같은 scope OO

    //block level scope는 상위 x와 현재 x는 이름은 같지만, 위치가 다르므로 동일한 것이 아님.
}

console.log(x); // function level scope 라서
*/

/*
var y = 1;  // 메모리 상에 undefiend로 정의 // undefined는 primitive type "기본 값" = 값이 불변함. 
// undefined 값을 날리고 1 대체 불가. immotable

// 자바는 함수가 없지만, 대신 메서드가 있음.
// 자바의 메서드는 class 안에 위치.
//자바 스크립트는 함수형 기반이라서, 함수가 많이 쓰임 (함수가 존재)
// 일반적으로 메서드와 같은 기능을 함. 그런데 이놈은 독립적으로 존재.
// 함수를 만들때는 function 키워드를 반드시 써여함.
// 당연히 함수 이름이 있어야 하니, 식별자로 붙여줌
// 인자오 살행코드가 biock으로 표현.
function myfunc(){ //함수 function // 메모리 상에 my func 라는 변수 공간 생성. 메모리 상에 undefiend로 정의
    //자주 사용하는 코드를 메서드형태로 나타냄.
    var y = 200;
    console.log(y);
    
}// 함수레벨 scope "함수에서 생성되어 있으므로." // 메모리 다른부분에 할당 시킴 => undefiend도 다ㅡㅡ로
console.log(y); // 1
myfunc();// 그안에 있는 코드를 실행 // myfunc을 찾아가서 코드를 실행. // 함수 안에서 유효한 지역 변수. // 찍히고 나서 끝.// 200 
console.log(y); // 1
*/


console.log(x); // 실행문이므로 넘어감. (첫 번째) 두번째는 undefiend

x = 100; // 두번째는 x의 위치가 넘어가서 초기화만 수행. 

console.log(x); //실행문이므로 넘어감

var x; 



console.log(z);  // 2번째에서는 에러가 발생 함수 선언한 부분이 없어서.

z = 100; // 변수 공간이 없는 데 값을 넣음 => 암묵적 전역! (좋지 않음) 원래 변수 선언하고 사용하는 게 맞지만, 이건 예외 사항 (오류 발생 높음)

console.log(z); // 100 출력

function myfunc(z) { // 함수 정의하는 부분, 첫번째에서  ny func 공간 할당  undefined 
    console.log(z);   // 이부분도 hoshting 수행 되므로 undefined 값이 나옴.
    var z;
}

myfunc();

