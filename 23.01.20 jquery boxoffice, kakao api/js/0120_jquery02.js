
// 함수선언문 - event handler 
function myFunc(){
    //alert('클릭 클릭');
    // ajaxx 호출 
    // jqeury를 이용해서 ajax 호출
    // $('') //select 찾기  or 임의로 태크글 만듬.
    // ajax() 함수를 이용해서 호출 but 호출할때 여러가지 정보를 넣어야 함.
    // 여러가지 정보를 객체 literal 이용해서 객체로 만들어서 인자로 전달.
    $.ajax({
        // url : 호출할 서버쪽 주소.
        url: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',
        //async : 비동기방식으로 호출할 것인지 동기방식으로 호출할 것인 지 여부
        //default = async: true = ajax는 기본값은 true . 비동기가 true.
        async: true,
        // 서버쪽 프로그램에게 전달할 데이터를 명시. 여러 개의 데이터를 일반적으로 전달하기 때문에 객체이용.
        data : {
            key :'97121f3d440e8f6f236416da6aa305e2',
            targetDt :'20230119'
        },
        // 데이타 넘길때 쿼리 스트링 안씀.
        // type ajax호출 방식으로 get, post를 명시하시면 되요!
        type : 'GET',
        // 호출 결과를 어떤 데이터 형식으로 받을 건지를 설정.
        //default 값이 json
        dataType : 'JSON',
        // 이런 내용을 가지고 호출하면 결국 2중의 하나임
        // 성공하거나 에러가 나거나.
        // 만약 성공하면 서버가 보내준 json문자열을 jqeury가 javaScript 객체로 변환
        // 그리고 그 객체를 Success의 함수의 인자로 전달.
        success : function (data){
            // console.log('호출이 성공함');
            // javaScript 객체로 변환을  매개변수의 data의 인자로 받움
            // console.log(data);
            let title=data.boxOfficeResult.dailyBoxOfficeList[0].movieNm; // 1등 영화제목.
            //json 형태를 분석해서 수행할 정도가 되야 함.
            console.log(title);
           $('div>div').text(title); // 여기서 화면처리
        },
        error : function(){
            console.log('호출이 실패함.');
        }
    }); // jquery가 가지고 있는 ajax 호출.
    //만약 호출이 성공해도 화면이 변경하지 않지만, 서버에 해당 내용을 전달 받음.
}