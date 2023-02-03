<template>
  <header>
    <h3>박스오피스 주간 순위</h3>
  </header>
</template>
<script>
export default {
  data: () => {
    return {
      selecteDate: "",
    };
  },
  methods: {},
};
</script>

<style scoped>

@font-face {
    font-family: 'GangwonEduPowerExtraBoldA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEduPowerExtraBoldA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

h3 {
  color: #454545;
  margin-top: 1em;
  font-weight: 600;
  text-align: center;
  font-family: "GangwonEduPowerExtraBoldA";
}

/* h1 {
  color: #2f3b52;
  font-weight: 250;
  margin: 2.5rem 0 1.5rem;
} */
</style>
