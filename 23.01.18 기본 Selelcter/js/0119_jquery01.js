
function myFunc(){
    // 이 안에 event객체가 자동으로 전달.
    //console.log("이것도 출력됨.");
    // event 객체는 event가 발생되었을때 
    // event에 세부 정보를 가지고 있는 객체/
 
    //console.log(event);
   // 결과 : mouseevent 생성자 함수 (뉘어쓰기) + 객체 {}

    console.log(event.target);
    // taget -> 이벤트 소스를 지칭.
    // taget => div 문서 객체.
    console.log($(event.target).text());
    // event의 소스객체를 제이쿼리로 변경후 그 값을 출력.
}


function myAcc(){
    console.log("변함");
    // div의 내용을 선택상자의 선택된항목의 값으로 전환. 
    $('div').text( $('select > option:selected').text());
    //$('select > option:selected').text();
}

