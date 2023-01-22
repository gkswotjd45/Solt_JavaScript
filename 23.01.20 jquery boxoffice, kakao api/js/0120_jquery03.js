function myFunc(){
    //버튼을 누르면 카카오 이미지 검색을 해서
    // 그중 첫번째 이미지를 이용해서 div에 붙일 예정.
    // 영화진흥위원회 open API 사용한 것 처럼..
    
    $.ajax({
        async :true,
        url : 'https://dapi.kakao.com/v2/search/image',
        type : 'GET',
        headers:{
            // 인증키 
            Authorization: 'KakaoAK 96fdece8cc50f83eb98699692a857f95'
        },
        data : {
            query : '아바타2'

        },
        dataType: 'json',

        success : function(data) {
            //data가 전체 객체라는 의미. 
            let imgurl = data.documents[0].thumbnail_url;
            let myimg = $('<img />').attr('src',imgurl);
            $('div').append(myimg);
            //append, depend, after , before 등이 객체를 붙이는 형태.
            alert('성공');
        },
        error : function() {
            alert('에러');
        }

    });
}
