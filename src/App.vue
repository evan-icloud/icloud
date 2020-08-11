<template>
  <div id="app">
    <div id="top">
      <span id="title">TY-Map 公共组件DEMO <i id="ver">( V1.0 )</i></span>
      <span id="info">基于 Leaflet 地图引擎</span>
    </div>
    <router-view id="main" class="flex-box"/>
  </div>
</template>

<script>

// import traffic from './router/traffic.js'
export default {
  data () {
    return {
      comp: 'Maps'
    }
  },
  computed: {
    /* comp: function () {
      var paths = ''
      traffic.$on('pathsUrl', (val) => {
        console.log(val)
        paths = val
      })
      return () => import('./components/' + 'mapMain' + '.vue') // 动态调用，需要升级webpack4
    } */
  },
  components: {
  },
  methods: {
  }
}
</script>

<style>
  html, body{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    height: 100%;
    font-weight: normal;
    vertical-align: baseline;
    overflow: hidden;
  }
  #app {
    font-family: '微软雅黑', Helvetica, Arial, sans-serif;
    height: 100%;
  }
  #top {
    width: 100%;
    height: 50px;
    background-color: #384154;
    overflow: hidden;
    color: #ffffff;
  }
  #title {
    font-size: 22px;
    line-height: 50px;
    margin-left: 10px;
    float: left;
  }
  #info {
    font-size: 14px;
    line-height: 50px;
    margin-right: 10px;
    float: right;
  }
  #ver {
    font-size: 12px;
  }
  #main {
    height: 100%;
  }
  .left {
    width: 240px;
    background: #495060;

  }
  .mid {
    height: 100%;
    max-width: 400px;
  }
  .right {
    width: inherit;
  }
  .flex-box{
    display: -webkit-box;
    display: box;
    display: -webkit-flex;
    display: flex;
  }
  .flex{
    -webkit-box-flex: 1;
    box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
  }
</style>
