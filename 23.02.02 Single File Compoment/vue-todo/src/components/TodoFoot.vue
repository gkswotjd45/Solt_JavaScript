<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" @click="clearTodo">모두 삭제</span>
  </div>
</template>

<script>
export default {
    methods : {
        clearTodo(){
            localStorage.clear();
        }
    }
};
</script>


<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}

.clearAllBtn {
  color: #e20303;
  display: block;
}
/* scpoped는 위의 html <template>에만 적용시킨다는 의미 */
</style>