function myFunc(){
    // check가 된 checkbox 부터 찾아봄.
    // 속성값이 체크박스인 것을찾기
    // text 결과 값이 서로 합침
    console.log($('[type=checkbox]:checked + span').text());
    // 내가 원하는 것을 값을 찾고 서로 분리 시키는 법 확인 => 내일 수업에서 확인"
}