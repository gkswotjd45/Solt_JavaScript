// alert('소리없는 아우성!');
// window객체에 alert 있음 (전역객체)
// 일반적으로 명시하지 않음.

// blocking 함수 => 확인을 누르기 전까지 여기에서 일단 멈춤.
// 함수선언문으로 만든 일반함수
function myfunc(){
    //console.log("버튼을 클릭했어요.");
    //jQuery를 이용해서 뭔가 작업을 수행해 봄
    // 1. 전체 선택자 => * =>body내에 있는 모든 element를 선택.
    // 어떻게 요소 선택, 어떤 메서드를 수행하는지 정도를 알기.
    // $('*').css('color','red'); // css 전체 요소 들을 글자색을 빨강색으로 변경수행.

    // 2. 타입 산택자 (type selector) => tag 이름
    // $('li').remove(); // li eleemnt 찾아서 cf) $(<li>) 다른의미.

    // 3.아이디 선택자(ID selector) => id명으로 선택
    // 모든 tag에는 id라는 속성이 붙을 수 있음.
    // id값은 중복이 허용되지 않음.(한 html 내에서 중복 X) =>unqiue => 그럼에도 중복이 발생해도 html 코드는 넘어감.
    // id 값으로 선택시 => 1개만 선택 (유닉크 함으로) => #
    // let name = $('#gang').text(); //text()는 tag 사이에 있는 값(value)을 알아낼 수 있음.
    // console.log(name);// 그안의 값을 찾아내서 수행

    // 4. 클래스 선택자는 clsss명으로 선택 => .
    // 모든 tag에는 class 라는 속성이 붙을 수 있음
    // class의 값은 중복을 허용함
    // 이 클래스 속성은 기본적으로 스타일을 지정할 때사용하는 속성/
    //$('.myClass').css('background-color','yellow'); => myclass으로 지정한 항목의 글자색을 노랑색으로 변경.

    //5. 구조 선택자(자식선택자와 후손선택자) (ul와 li 포함관게)
    // 자식선택자는 기호를 > 이용하고, 그리고 다른 selector와 혼합해서 사용
    // text() 값을 알아내는 method임. 
    // text('변경할 값')는 값을 변경하는 method임.
    //$('div > div').text('소리없는 아우성'); // 해당 text의 내용으로 변경.

    // 맨 위쪽(상위) div -> li 관계는 포함관계가 아닌, 후손 관계임.
    // 후손 선택자는 공백을 이용함 => '  ' // 후손은 그 아래에 있는 것들을 싹다 지징
    // 형제 관계 Li -> li 
    // $('div li').remove();

    // 6.  동위 선택자( + , -)
    // + : 바로 뒤에 나오는 형제를 지칭.
    // ~ : 내 뒤쪽에 나오는 모든 형제를 지칭.
    
    // alert($('#gang + li').text()); // li id = gang -> 바로 다음에 나오는 li 형제 찾기
    // $('#shin ~ *').remove();

    // 7. 속성선택자 : 속성가지고 찾을 수 있음 -> [ ]
    // type이라는 attribute (속성) 을 찾고. 해당 속성을 갖고있는 attr() 속성
    // console.log($('[type]').attr('value'));

 }
//JQuery의 기본 사용방법
//1. 기본 사용법_거의 대부분 사용 // 
//   $("selector").method() //html 화면에서 selector찾아서 정해진 method 수행해라.
//   selector : css에서 사용하는 특수한 표기법이 나옴
//    $('h1')
//    method : jQuery에서 정해져 있는 method로 특수한 기능을 수행
 // 2. 또 다른 사용법
 // $
      


