<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header" v-for="(select,index) in moviedetail" :key="index+1">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            {{ select.name }}
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div
          class="modal-body"
          v-for="(select, index) in moviedetail"
          :key="index"
          :row="select"
        >
          <div>제작연도: {{ select.year }}</div>
          <div>제작국가: {{ select.nation }}</div>
          <div>감독: {{ select.coach }}</div>
          <div>배우정보: {{ select.actor }}</div>
          <div>상영시간: {{ select.time }}</div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import EventBus from "../EventBus";

export default {
  data: () => {
    return {
      moviedetail : [],
    };
  },
  mounted () {
    EventBus.$on('movieinfo',(detail)=>{
      this.myDetail(detail);
    })
  },
  methods: {
    myDetail (data) {
        this.moviedetail = [];
          let detail ={
              name: '',
              year: '',
              nation: '',
              coach: '',
              actor: '',
              time: ''
          }
          axios({
              url: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json',
              method: 'GET',
              params: {
                  key: '97121f3d440e8f6f236416da6aa305e2',
                  movieCd: data.code // 임의지정
              },
              responseType: 'json'
          }).then((result) => {
              console.log(result.data.movieInfoResult.movieInfo);
              detail.name = result.data.movieInfoResult.movieInfo.movieNm;
              detail.year = result.data.movieInfoResult.movieInfo.prdtYear;
              detail.time = result.data.movieInfoResult.movieInfo.showTm
              detail.nation = result.data.movieInfoResult.movieInfo.nations[0].nationNm
              detail.coach = result.data.movieInfoResult.movieInfo.directors[0].peopleNm;
              detail.actor = result.data.movieInfoResult.movieInfo.actors[0].peopleNm;

              //console.log(detail);
          }).catch(function () {
          })
          this.moviedetail.push(detail);
    }
  }

};

</script>

<style scoped>
</style>
