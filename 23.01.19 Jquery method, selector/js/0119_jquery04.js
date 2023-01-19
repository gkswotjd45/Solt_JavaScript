function myFunc(){
    // 삭제 //DOM에서 진짜 사라짐
    //$('#innerDiv').remove(); // id 찾아서 해당 항목 dom 삭제

    // 숨김 // dom구조는 남아이쓴 형태.
    $('#innerDiv').hide(); 

    // 숨겨져 있는거 다시 보일려면, "show()"    

    // 삭제(후손만 삭제)
    $('#innerDiv').empty(); 

}

function disply_input(){
    // 입력상자의 있는 값을 가져옴
    alert($('#myID').val());
   
}