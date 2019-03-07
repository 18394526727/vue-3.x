<template>
  <div class="root" :style="{'height':wh}">
    <router-link to="/about">去about页面</router-link>
    <div class="wrap">
      <div class="outer">
        <div class="inner"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  computed:{
    wh(){
      window.onresize=function () {
        return window.innerHeight + 'px'
      }
    }
  }
};
</script>
<style lang="scss" scoped>
  .root{
    background: rgb(0,0,255);
    animation:moveIn 0.4s 1 linear ;
  }
  .wrap{
    position: absolute;
    height: 200px;
    width: 100px;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.6s;
    &:hover{
      height: 300px;
    }
  }
  .outer{
    width: 100px;
    height: 300px;
    background: red;
    position: relative;
    .inner{
      width: 100px;
      height: 100px;
      background: #000;
      position: absolute;
      bottom: 0;
    }
  }
</style>
