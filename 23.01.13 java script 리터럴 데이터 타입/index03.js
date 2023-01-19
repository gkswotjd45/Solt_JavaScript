// 이번에는 let에 대해서 알아보아요!
// let은 var과 똑같이 변수를 선언하기 위한 키워드
// ES6에서 도입되었어요!
// 이놈은 block level scope이고 우리가 알고 있는 변수
// 선언방식을 이용!

// 아... let은 같은 scope내에서 중복선언이 안되요!
// let result = 100;
// let result = 50;

// block level scope
let score = 50;

{
  let score = 100;  
  let myVar = 10;
}

console.log(score);  // 50
console.log(myVar);  // Error
