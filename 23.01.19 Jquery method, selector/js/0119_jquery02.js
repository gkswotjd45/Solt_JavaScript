// event Handler

function myFunc(){
    alert('버튼이 눌렀어요');
}


function secondFunc(){
    alert('div가 눌렸어요');
}
function myMouseEnter(){
    //1. 이벤트가 발생한 객체를 찾아야 함.
    // $(event.target).css('color','red');
    // $(event.target).css('background-color','yellow');
    // 이벤트 소스를 지칭 = 현재 이벤트가 발생한 소스 객체 event.target 

    $(event.target).addClass('myEnterStyle');
   
}
function myMouseLeave(){
    // $(event.target).css('color','black');
    // $(event.target).css('background-color','white');
    // 이벤트 소스를 지칭 = 현재 이벤트가 발생한 소스 객체 event.target 

    $(event.target).removeClass('myEnterStyle');
    // class 단위로 css을 적용시킬 수 있음.
}
// 실제로 Css가 계속 변화하기 때문에 계속해서 DOm객체와 변화 수행=> 여러 개를 동시에 바꿀 때는 비효율적임