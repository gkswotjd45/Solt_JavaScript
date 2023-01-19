function innerFunc() {
    alert('버튼이 클릭함.');
    event.stopPropagation();
    // 이벤트의 전파를 멈춰라.
    // 원래 부모인 div에게 전달하지 않고, stop. (상위 컴퍼넌트에게 전달 X)
}
function outerFunc(){
    alert('div 클릭함');
}