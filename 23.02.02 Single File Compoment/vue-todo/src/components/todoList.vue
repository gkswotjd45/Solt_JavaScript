<template>
  <!-- 내용을 표현할 때 쓰는 태그  <section></section> -->
  <section>
    <ul>
      <!-- index도 같이 가져오기 => index를 뽑은 이유는 행을 삭제하기 위해 v-for을 사용하기 위해 key를 명시해야 함  -->
      <li v-for="(todoItem, index) in todoItems" :key="todoItem" class="shadow">
        <!-- i 체크 이미지 -->
        <i class="checkBtn fa fa-check" aria-hidden="true"></i>
        {{ todoItem }}
        <!-- @click은 v-on:click과 동일하게 동작합니다. 
                추가적으로 @click="[method1(), method2()]" 와 같이 사용하면
                클릭이벤트를 여러개 설정할 수 있습니다.
            -->
        <span
          ref="btnDelete"
          class="removeBtn"
          type="button"
          @click="removeTodo(todoItem, index)"
        >
          <i class="fa fa-trash" aria-hidden="true"></i>
        </span>
      </li>
      <!-- <li v-for="todoItem in todoItems">{{ todoItem }}</li> -->
    </ul>
  </section>
</template>
<script>

export default {
  data() {
    return {
      todoItems: [],
    };
  },
  methods: {
    //빨간색 휴지통을 눌렀을 때 같이 삭제
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem); //로컬 스토리지안에서도 삭제
      //index 위치에서 1개지움, splice 빈도 많음. index에 해당하는 위치에
      this.todoItems.splice(index, 1);
    },
  },
  // 데이터는 생성되었지만, 아직 사용되기 전에 호출하여 사용.
  created: function () {
    // localStorage에서 데이터를 가져다가 todoItems에다 넣음.
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
        this.todoItems.push(localStorage.key(i));
        // this.todoItems.push(localStorage.key(i));
      }
      // localstorage 키값을 가져와서 순차적으로 삽입.
    }
  },
};
</script>


<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}

li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}

.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}

.removeBtn {
  margin-left: auto;
  color: #de4343;
}
/* scpoped는 위의 html <template>에만 적용시킨다는 의미 */
</style>