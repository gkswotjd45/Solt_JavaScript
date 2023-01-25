    /*
            function kakao(){
                $.ajax({
                    async : true,
                    url : 'https://dapi.kakao.com/v2/search/image',
                    type : 'GET',
                    headers:{
                        Authorization: 'KakaoAK 96fdece8cc50f83eb98699692a857f95'
                    },
                    data : {
                        query : '아바타1'
                    },
                    dataType : 'json',
            
                    success : function(data){
                        let imgurl = data.documents[0].thumbnail_url;
                        let myimg = $('<img />').attr('src',imgurl);
                        console.log('성공');
                        return myimg;
                        // $('div').append(myimg);
                        //append, depend, after , before 등이 객체를 붙이는 형태.
                      
                    },
                    error : function() {
                        alert('에러');
                    }
                
                }); 
            
            }; */// 영화 이미지


function mymoiveSelect(){
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
            targetDt : $('#mDate').val()
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
            $( '#moveList > tbody').empty(); // 기존에 검색한 목록 초기화 수행.
            $('#selectItem').on("click", function(){
                $('table tr').has('input[id="intputOneChecked"]:checked').remove();
            });

            let arr=data.boxOfficeResult.dailyBoxOfficeList
            $.each(arr,function(idx,item){
               
            let che = $('<input />').attr('type','checkbox').attr('id','intputOneChecked'); 
            let rank=item.rank;   // 순위
            let title=item.movieNm; //영화제목
            let audi=item.audiAcc;  //누적 관람객 수
            let open=item.openDt;  //개봉일
            //let del = $('<button />'). attr('class','btn btn-danger').text('삭제');
            let img = $("<img />");

        
           
            let del = $('<button />'). attr('class','btn btn-danger').text('삭제').on("click",function(){
                console.log("삭제");
                $(this).closest("tr").remove();
            });
            
            let tr = $("<tr></tr>");

            let check = $("<td></td>").append(che);
            let ranktd = $("<td></td>").text(rank);
            let imdtd = $("<td></td>");
            let titletd = $("<td></td>").text(title);
            let auditd = $("<td></td>").text(audi);
            let opentd = $("<td></td>").text(open);
            let deletd = $("<td></td>").append(del);

            $.ajax({
                async: true,
                url: 'https://dapi.kakao.com/v2/search/image',
                type: 'GET',
                headers: {
                    Authorization: 'KakaoAK 1358282d53c290fdf77018c900369905'
                },
                data: {
                    query: title + ' 포스터'
                },
                dataType: 'json',
                success: function(data) {
                    let imgurl = data.documents[0].thumbnail_url;
                    img.attr('src',imgurl);
                    imdtd.append(img)
                },
                error: function() {
                    alert('먼가 이상해요!!')
                }
            });

            tr.append(check);
            tr.append(ranktd);
            tr.append(imdtd);
            tr.append(titletd);
            tr.append(auditd);
            tr.append(opentd);
            tr.append(deletd);
            
            $('tbody').append(tr);
                  
            });
            
           // let arr = Array.from({length: 10}, _ => 0)
            
            /*
           let arr=data.boxOfficeResult.dailyBoxOfficeList
            for(var i = 0; i<=10; i++){
            let rank=data.boxOfficeResult.dailyBoxOfficeList[i].rank;   // 순위
            let img = 'null'; // 영화 이미지
            let title=data.boxOfficeResult.dailyBoxOfficeList[i].movieNm; //영화제목
            let audi=data.boxOfficeResult.dailyBoxOfficeList[i].audiAcc;  //누적 관람객 수
            let open =data.boxOfficeResult.dailyBoxOfficeList[i].openDt;  //개봉일

            let tr = $("<tr></tr>");
            
            let check = $('<input />').attr('type','checkbox');
            let ranktd = $("<td></td").text(rank);
            let imdtd = $("<td></td").text(img);
            let titletd = $("<td></td").text(title);
            let auditd = $("<td></td").text(audi);
            let opentd = $("<td></td").text(open);
            let deletd = $('<button />').attr('class','btn btn-primary');
            tr.append(check);
            tr.append(ranktd);
            tr.append(imdtd);
            tr.append(titletd);
            tr.append(auditd);
            tr.append(opentd);
            tr.append(deletd);

            $('tbody').append(tr);
            }   
            */
        },
        error : function(){
            console.log('호출이 실패함.');
        }
    }); // jquery가 가지고 있는 ajax 호출.
    //만약 호출이 성공해도 화면이 변경하지 않지만, 서버에 해당 내용을 전달 받음.
}

function myDelete(){
    console.log("삭제");
}

  