
// document 라는 javaScript가 제공하는 문서 객체가 있음. => document는 DOM를 지칭하는 문서 객체.
// document가 준비되었다는 의미 (만들어 졌으면 => "브라우저가 html 다 읽으면 dom이 만들어지고")
// dom 객체가 만들어졌다는 의미이고,browser가 html을 모두 읽어서 파싱까지 끝냈다는 의미
// 즉, 그 시점은.. browser가 html을 모두 읽은 시점을 의미.
// html을 읽었다면 (</html> 읽었다면 ) => DOM구조도 다 있음. => 해당 element 이벤트 수행.
// $(document).on('ready',function(){
//     console.log("red");
//     $('ul > li').on('click',function() {
//         alert('안녕하세요');
//     })
// })
// 이것은 수행이 안되서 축약표현을 작성해야 함.

// 이런 코드가 워낙 많이 사용됨.
// $(document).ready(function(){
//     console.log("red");
//     $('ul > li').click (function() {
//         alert('안녕하세요');
//     })
// })  

// 더 축약 해서 표현. $() 이렇게 표현하고 이게 document.ready
// 문서가 load 되면 수행.
// $(function(){
//     console.log("red");
//     $('ul > li').click (function() {
//         alert('안녕하세요');
//     })
// })

// li 선택시 해당 항목 값으로 출력..
$(function(){
    console.log("red");
    $('ul > li').click (function() {
       // 만약 jQuery event 처리에서 
       // event Handler 안에서 this가 나오면
       // => event source에 대한 "문서 객체" [document object] 
        // (function 리터럴은 event handler 내에서 this "현재 이벤트가 발생한 '이벤트 소스(주체)' ")
      alert($(this).text());
       // 이벤트 소스의 제이쿼리 변환 후 해당 항목 값
       // event.target이 아니라 this로 처리 
    })
})

//this 의미는 크게 3가지로 나타냄.
// 1. 일반함수에서 this -> window 객체 (전역객체 )
// 2. 객체의 함수에서 this => 함수를 호출한 객체를 지칭.
// 3. 생성자 함수에서 this => 생성자 함수가 생성하는 객체를 지칭.


function myFunc(){
    alert('링크가 눌렀어요');
    // default event를 처리하지 않으려면, 
    event.preventDefault(); 
    // 모든 핸들러가 이벤트 핸드러를 가지고 있다. preventDefaut()  (막다).
}