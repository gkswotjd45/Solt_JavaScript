<template>
  <div id="app">

    <BoxHeader></BoxHeader>
    <BoxInput></BoxInput>
    <BoxBody></BoxBody>
    <BoxModal></BoxModal>
  </div>
</template>

<script>
import BoxHeader from "./components/boxHeader.vue"
import BoxInput from "./components/boxInput.vue"
import BoxBody from "./components/boxBody.vue"
import BoxModal from "./components/boxModal.vue"

export default {
  components:{
    BoxModal,
    BoxInput,
    BoxHeader,
    BoxBody
  },
  data() {
    return {
    };
  },
};
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
