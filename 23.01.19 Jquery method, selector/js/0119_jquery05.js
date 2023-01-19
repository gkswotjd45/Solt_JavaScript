function myFunc(){
    // 새로운 element를 제이쿼리를 이용해서 생성.
    // $('<li></li>') // <li></li> 생성 // 끝나는 태그가 있는 경우
    // $('<li></li>').text('이순신').attr('id','myID').addClass('myStyle');
    // <li id="myID" class="myStyle">이순신</li> 생성
    // let li = $('<li></li>').text('이순신'); // <li>이순신</li>
    // 이렇게 만든 제이쿼리 객체를 내가 원하는 곳에 부착할 수 있음.
    // 사용하는 method는 4개.
    // 1. append() : 자식으로 붙이고, 제일 마지막 자식으로 붙임.
    // $('ul').append(li); //상위 부모 찾아서 붙인다
    // 2. prepend() : 자식을 제일 앞에 붙인다. 
    // $('ul').prepend(li); 
    // 3. before(): 형제로 붙이고 앞에 붙임.
    // $('ul > li:last').before(li); // ul의 객체 자식항목들 중 가장 마지막 항목 에서 앞에 항목.
    // 4. after() : 형제로 붙이고 다음에 붙임.
    // $('ul > li:first').after(li);

    //새로운 이미지를 만들어 봄.
    // <img src='./img/img.jpg'>
    let myImg=$('<img />').attr('src','./img/image.jpg').attr('width','200') // 끝나는 태그가 있는 경우. // <img>
    $('ul').after(myImg);
}

function addHandler(){
    // 1. 이벤트 핸들러를 붙일 element를 찾아 보아요,
    //<li>강감찬</li> 찾기
    // 그 다음에 이벤트 핸드러들 특정 이벤트를  등록하기.
    // $('ul > li:last').on('click',function() {
    //     console.log('강감찬이 클릭 됨');
    // });
    // ul 항목에 li 항목의 마지막에 (특정항목에)
    // on은 등록의미 click 하면 function() 수행해라.
    //위 형태가 기본.


    // 이걸 축약해서 써봄. // 이방식이 효율적
    $('ul > li:last').click(function() {
        console.log('강감찬이 클릭 됨');
    });
    //훨씬 직관적 표현.
    // 제이쿼리로 들록하고 사용하는 방식으로
    // html에 이벤트 처리내용이 나오지 않고 모두 자바스크립트 코드로 표현.

    // 마지막으로 주의해야할 점 3가지만 더하고 event에 대한 얘기를 정리해 봄.
}