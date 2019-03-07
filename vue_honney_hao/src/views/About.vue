<template>
  <div class="root" :style="{'height':wh()}">
    <h1>This is an about page</h1>
    <router-link to="/">返回{{img}}</router-link>
    <div class="aaa"></div>
    <img src="@/assets/logo.png" alt="">
    <div class="div" @click="getlis">
      <p><span>1000</span></p>
    </div>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  import wh from "@/utils/window"
  export default {
    name:"About",
    data(){
      return{
        img:"aaa",
        wh:wh
      }
    },
    watch:{
      wh(a){
        console.log(a);
      }
    },
    methods:{
      ...mapActions(['getLists']),
      getlis(res){
        console.log("aaa");
        this.getLists().then(res =>{})
        console.log(res);
      }
    }

  }
</script>
<style lang="scss" scoped>
  .root{
    background: rgb(0,255,0);
    height: 100%;
    animation:moveIn 0.4s 1 linear ;
  }

.div{
  p{
    span{
      color: red;
    }
  }
}
.aaa{
  margin: 100px;
  width: 100px;
  height: 100px;
  background: red;
  background-size: 100% auto;
  -webkit-animation:circle 0.6s infinite linear ;
}
</style>