<template>
  <div>
    <!-- 키보드가 누른후 띨때 keyup. enter 엔터키 입력 -->
    <input
      type="text"
      placeholder="할일을 입력하세요."
      v-model="newTodoItem"
      v-on:keyup.enter="addTodo"
    />
    <!-- <button v-on:click="addTodo">추가</button> -->
    <!-- <button @click="[addTodo(),test()]">추가</button>  -->
    <!-- <button @click="addTodo">추가</button> -->
       <span class="addContainer" v-on:click="addTodo">
      <i class="addBtn fa fa-plus" aria-hidden="true"></i>
    </span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newTodoItem: "",
    };
  },
  methods: {
    addTodo() {
      //현재 해야할 일을 입력하여 저장.
      // 지금 서버 프로그램에 연결할 수 없음.
      // 서버쪽 데이터베이스(mysql) 에 해당 정보를 해당 정보를 저장할 수 없음
      // 그래서 브라우저가 가지고 있는 저장 장소를 이용할 꺼임.
      // 브라우저 내부에 저장장소가 크게 2가지 있음
      // 스토리지(storage) 혹은 indexedDB 있음.
      // 그 중 storage를 사용해 봄.
      // 다시 storage는 localstorage와 sessionStorage로 나눠짐.
      // 우리는 그중 가장 일반적인 localStorage를 이용할 것임
      // 우리가 javaSrcipt 를 이용해서 이 저장공간에 내가
      // 원하는 데이터를 저장할 수 있음.
      // 데이터는 map형태로 저장이 가능함.(key,value의 쌍으로 => hashmap 형태로 생각.)
      // 여러 프로그램에 의해 데이터가 중복되는 걸 방지하기위해
      // 각 데이터는 도메인(domain)으로 구분되어서 저장됨.
      // 도메인 - 아이피와 포트번호를 통해서 저장.

      // 로컬 스토리이지에
      // localStorage.setItem('키값','변수값');
      // 버튼을 누르면 데이터 값을 밀어 넣음. (로컬 스토리지에 값을 저장)
      // 그럼 getItem은 값을 가져올 수 있음.
      // 입력값이 공백이 아닐 경우
      if (this.newTodoItem !== "") {
        localStorage.setItem(this.newTodoItem, this.newTodoItem);
        this.newTodoItem = "";
      }
      console.log("클릭클릭");
    },
  },
};
</script>


<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: inline-block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
/* scpoped는 위의 html <template>에만 적용시킨다는 의미 */
</style>