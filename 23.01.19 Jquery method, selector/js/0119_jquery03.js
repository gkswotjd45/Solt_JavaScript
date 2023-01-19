function myFunc(){
    // 수행한 과정 기억. // each을 어떻게 사용하는 지 파악.
    // console.log($('ul > li').text());
    // 함수선언문이 아닌, 함수표현식으로 수행
    /*
    $('ul > li').each(function(idx,item) {
        //idx : 순번, 0부터 1씩 증가.
        //item : 현재 사용되는 문서객체 지칭 (각 li,  documnet object)
        // jquery객체.text();
        console.log($(item).text());
    
        //문서객체를 제이쿼리로 변경.
    });
    */
    // 3가지 항목을 각각 반복적으로 수행.
    // each() 내용은 함수(콜백 함수)
}
function removebtn(){
    // $('button[disabled]').removeAttr('disabled');
    //btn 삭제속성을 지움 // 오류 파악.

    // alert( $('button[disabled]').attr('data-author'));
   //속성의 값 반환 (알아내기)

    //속성의 값을 변경함. (인자1개 해당 속성 알아내기, 2개변 속성 변경하기)
   alert( $('button[disabled]').attr('data-author','신사임당'));
   
}