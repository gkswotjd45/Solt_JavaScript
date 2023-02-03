<template>
  <div class ="center">
    <input type="date" placeholder="날짜 YYYYMMDD" v-model="selectDate" />
    <button class="button button1" v-on:click="dateReivsed">날짜검색</button>
    <!-- <input type="date" placeholder="날짜 YYYYMMDD" v-model="selectDate" />
    <span class="addContainer" v-on:click="dateReivsed">
      <i class="addBtn fa fa-plus" aria-hidden="true"></i>
    </span> -->
  </div>
</template>
<script>
import EventBus from "../EventBus";
export default {
  data() {
    return {
      selectDate: "",
    };
  },
  methods: {
    dateReivsed() {
      if (this.selectDate !== "") {
        EventBus.$emit("send", this.selectDate);
      }
    },
  },
};
</script>
<style scoped>
.button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 1px 22px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.4s;
  cursor: pointer;
}
.center {
  text-align: center;
  border: 3px solid green;
}
/* input:focus {
  outline: none;
}
.inputBox {
  align-content: center;
  background: white;
  height: 20px;
  line-height: 5x;
  border-radius: 3px;
}
.inputBox input {
  border-style: none;
  font-size: 0.4rem;
} */
/* .addContainer {
  float: center;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: inline-block;
  width: 1rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
} */
</style>
