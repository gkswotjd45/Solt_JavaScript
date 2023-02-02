<template>
  <!-- 최상위 컴포넌트 -->
  <div id="app">
    <!--2. 템플릿에서 로컬 컴포넌트들 등록 되어있는 것을 하위 컴포넌트로 통해 호출 -->
    <TodoHeader></TodoHeader>
    <TodoInput> </TodoInput>
    <TodoList> </TodoList>
    <TodoFooter> </TodoFooter>
  </div>
</template>

<script>
// ./ app vue가 있는 폴더에서 찾기.
// 이 vue 파일(자바스크립트 객체)을 TodoHeader로 사용하겠음.
import TodoHeader from "./components/todoheader.vue";
import TodoInput from "./components/todoinput.vue";
import TodoList from "./components/todoList.vue";
import TodoFooter from "./components/TodoFoot.vue";
export default {
  //1. 컴포넌트를 로컬 컴포넌트로 등록.
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
  data() {
    return {
      message: "소리없는 아우성",
    };
  },
};

// 객체 형태를 웹으로 내보내는 형태.
</script>

<style scoped>
body {
  text-align: center;
  background-color: #f6f6f8;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>

