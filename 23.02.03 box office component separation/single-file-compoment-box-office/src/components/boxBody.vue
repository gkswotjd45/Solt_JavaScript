<template>
  <div>
    <table>
      <thead>
        <th v-for="column in header" :key="column">{{ column }}</th>
      </thead>
      <tbody>
        <tr v-for="(row, index) in movielist" :key="index" :row="row">
          <td>{{ row.rank }}</td>
          <td><img v-bind:src="row.img" /></td>
          <!-- <td v-on:click="myFind">{{low.name}}</td> -->
          <td
            ref="#"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="[myFind(row)]"
          >
            {{ row.name }}
          </td>
          <td>{{ row.audi }}</td>
          <td>{{ row.mvdate }}</td>
          <td>
            <button class="btn btn-danger" @click="removeRow(row, index)">
              삭제
            </button>
          </td>
          <!-- <td v-for="item in low">{{ item }}</td>  -->
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import EventBus from "../EventBus";

export default {
  data: () => {
    return {
      header: ["순위", "포스터", "이미지", "누적수", "개봉일", "삭제"],
      movielist: [],
      recivedDate: '',
    };
  },
  created() {

  },

  mounted() {
    EventBus.$on("send", (date) => {
      this.recivedDate = date;
      // console.log(this.recivedDate);
      this.myFunc(this.recivedDate);
    });
  },

  methods: {
    myFind(row){
      EventBus.$emit('movieinfo',row);
    }
    ,
    removeRow(row, index) {
      this.movielist.splice(index, 1);
    },
    del() {
      this.movielist = [];
    },
    myFunc(date) {
      this.del();
      axios({
        url: "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",
        method: "GET",
        params: {
          key: "97121f3d440e8f6f236416da6aa305e2",
          targetDt: date.replace(/-/g, '')
          // targetDt: recivedDate.replace(/-/g, ""),
        },
        responseType: "json",
      })
        .then((result) => {
          let arr = result.data.boxOfficeResult.dailyBoxOfficeList;
          // console.log(arr);
          //console.log(arr)
          //let entryMovie = [] // 10개의 영화정보 및 url 담은 객채 배열
          arr.forEach((element) => {
            // console.log(element);
            let movie = {
              rank: "",
              img: "",
              name: "",
              audi: "",
              mvdate: "",
              code: "",
            };
            axios({
              url: "https://dapi.kakao.com/v2/search/image",
              method: "GET",
              headers: {
                Authorization: "KakaoAK 96fdece8cc50f83eb98699692a857f95",
              },
              params: {
                query: element.movieNm + "영화 포스터",
              },
              responseType: "json",
            })
              .then(function (result) {
                // alert('카카오 성공')
                let img = result.data.documents[0].thumbnail_url;
                movie.img = img;
                console.log(img);
              })
              .catch(function () {
                // alert('카카오 실패');
              });

            movie.rank = element.rank;
            movie.name = element.movieNm;
            movie.audi = element.audiAcc;
            movie.mvdate = element.openDt;
            movie.code = element.movieCd;
            this.movielist.push(movie);
          });
        })
        .catch(function () {
          alert("영화 실패");
        });
    },
  },
};
</script>

<style scoped>
table {
  width: 90%;
  margin: 75px;
  text-align: center;
}

/* table {
  width: 80%;
  margin: 60px;
  text-align: center;
} */

table th {
  padding: 12px;
  border-bottom: 2px solid darkgray;
}

table td {
  padding: 12px;
}

table tr:nth-of-type(even) {
  background-color: rgb(101, 178, 103);
}
</style>
