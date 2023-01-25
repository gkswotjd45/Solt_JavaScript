function serachBTn(){

    $.ajax(
        {
            async: true,
            url: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',
            type : 'GET', // 서버에 요청하는 방식 api 문서 확인
            timeout: 3000, // 1000의 1초에 초를 적음 => 3초동안 기다리는데 결과 값이 안오면 => 바로 에러 "실패 간주."
            // 서버 쪽 url에 전달할 때 넘겨주는 값들.
            data :{
                //서버로 부터 할당 받은 값. 
                key :'97121f3d440e8f6f236416da6aa305e2',
                targetDt:($('[type=date]').val()).replace(/-/g, '')

                
                // ($('[type=date]').val()).replace('/-/g','')
                // 2023-01-01 => 20230101 변환 수행 필요. yyyymmdd 방식. /이 안에 있는 - 이것을 공백문자로 변환.
            },
            dataType : 'JSON', // default 값이 json이라서 안써도 됨.
            success : function (data){

                $('tbody').empty();
                //alert('성공');
                // 성공하면 당연히, 서버는 결과값을 json문자열로 전달.
                // 그 러면 이문자열을 받아서 문자열을 분석해서 결과 처리를 해야함 
                // 이 json문자열 처리가 쉽지 않음 => 이걸 객체로 변경해서 우리한테 함수의 인자로 전달해 줌.
                // success 함수 인자로 받아서 수행.(아무 값이라도 상관 없음) => 
                // 이 json 분석해서 함. 
                // object {1} = > 프라퍼터 1개 있음 => 이게 데이터 방금 작성한 data.
                // dailyBoxOfficeLit => 이것이 안에 10개 짜리 배열. 
                let arr=data.boxOfficeResult.dailyBoxOfficeList

                $.each(arr,function(idx,item){
                    // idx : 인덱스, 반복할 때 마다 숫자가 증가하는 index
                    // item : 반복할 때마다 추출되는 배열 안에 있는 원소.

                   //console.log(item.movieNm);
                
                    //    <tr> 
                    //     <td>1,001</td>
                    //     <td><img src = ""></td>
                    //     <td>data</td>
                    //     <td>placeholder</td>
                    //     <td>text</td>
                    //     <td> <button class='btn btn-danger"> 삭제 </button> </td>
                    //     </tr>
                    
                    let tr=$("<tr></tr>"); 
                    let ranktd = $("<td></td>").text(item.rank); // 
                    let postertd = $("<td></td>");
                    let posterImg  = $('<img />'); // 지역변수
                    let titletd = $("<td></td>").text(item.movieNm);
                    let audtd =  $("<td></td>").text(item.audiCnt);
                    let opentd = $("<td></td>").text(item.openDt);
                    let deltd = $("<td></td>");
                    let delBtn = $("<Button></Button>").text('삭제').addClass('btn btn-danger');
                    // 삭제 버튼에 클릭 이벤트 대한 이벤트 핸들러를 등록해줌.
                    // delBtn.on('click') // 거의 안씀.;
                    delBtn.click(function(){

                        //jquery 이벤트 처리방식에서만 이벤트 핸들러에 this가 등장하면
                        // 이 this는 event source 문서 객체를 지칭.
                        $(this).parent().parent().remove();     
                        // children() 해당 자식을 찾는 메서드,
                        // $(this).parent(); -> 부모 td  
                        //<button class='btn btn-danger"> 삭제 </button> 가르킴 -> 부모 td => 부모 tr
                    });
                    
                    
                    deltd.append(delBtn);
                    postertd.append(posterImg);

                    // ajax 콜은 기다리지 않아서, 아래까지 수행() => 클로저 개념 posterImg는 지역변수이지만 아래 함수에서 계속 사용되므로, 사라지지 않고 수행.
                    // 이미 10개의 tr의 생성 => 향후 ajax 이미지를 끼워 넣는 방식.
                    // 이미지를 가져오기 위한 ajax를 호출해야 함. => 사방팔방 호출하기 때문에 정돈이 안됨.ㄴ

                    $.ajax({
                        async: true,
                        url: 'https://dapi.kakao.com/v2/search/image',
                        type: 'GET',
                        headers: {
                            Authorization: 'KakaoAK 1358282d53c290fdf77018c900369905'
                        },// 공백, 대소문자 구분해서 수행.
                        data: {
                            query: item.movieNm + '포스터'
                             // 영화 관련 포스터에 대한 이미지 가져오기
                        },
                        dataType: 'json',
                        success: function(data) {
                            let imgurl = data.documents[0].thumbnail_url;
                             //클로저의 특성을 이용해서 postimg의 링크를 유지하고 있음.
                            posterImg.attr('src',imgurl);

                        },
                        error: function() {
                            alert('먼가 이상해요!!')
                        }
                    });
        
                    tr.append(ranktd);
                    tr.append(postertd);
                    tr.append(titletd);
                    tr.append(audtd);
                    tr.append(opentd);
                    tr.append(deltd);
                    
                    $('tbody').append(tr);

                })
                // 뒤 쪽 나오는 "콜백 함수"가. 앞쪽에 있는 함수(고차 함수)로 진행.
                // 배열안의 각 요소에 대해서 함수를 호출 함.
                // 

            },
            error : function(){
                alert('실패');
            }
        }
    );


    //날짜를 가져와서 ajax를 호출하면 됨.
    // 그런데, 지금 클릭한게 링크 <a> 
    // => default e 값을 가짐.
    // 해당 url에로 다시 전환. => 따라서 다른 링크로 넘어가는 것을 막아주어여 함.
    event.preventDefault(); // 다른 링크로 넘어가지 않게 함.

}