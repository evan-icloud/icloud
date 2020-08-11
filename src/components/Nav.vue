<template>
  <div class="container flex-box" id="navShowing">
    <Row class="left">
      <Col span="8">
      <Menu :theme="theme2" :open-names="['1']" accordion @on-select="turnUrl">
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-paper"></Icon>
            地图示例 
          </template>
          <MenuItem name="mapExample1">加载地图</MenuItem>
          <MenuItem name="mapExample2">设置地图最大、最小级别</MenuItem>
          <MenuItem name="mapExample3">地图平滑移动</MenuItem>
          <MenuItem name="mapExample4">地图飞行移动</MenuItem>
          <MenuItem name="mapExample5">缩放地图</MenuItem>
          <MenuItem name="mapExample6">拖拽地图</MenuItem>
          <MenuItem name="mapExample7">侧边栏效果</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-paper"></Icon>
            地图控件示例
          </template>
          <MenuItem name="ctrlExp1">添加地图控件</MenuItem>
          <MenuItem name="ctrlExp2">删除地图控件</MenuItem>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-paper"></Icon>
            覆盖物示例
          </template>
          <MenuItem name="Marker1">添加/删除覆盖物</MenuItem>
          <MenuItem name="Marker2">可视区域内添加点</MenuItem>
          <MenuItem name="Marker3">加载海量点</MenuItem>
          <MenuItem name="Marker4">覆盖物提示信息</MenuItem>
          <MenuItem name="Marker5">覆盖物弹出信息</MenuItem>
          <MenuItem name="Marker6">折线上添加方向箭头</MenuItem>
          <MenuItem name="Marker7">点聚合</MenuItem>
          <MenuItem name="Marker8">自定义点聚合</MenuItem>
        </Submenu>
        <Submenu name="4">
          <template slot="title">
            <Icon type="ios-paper"></Icon>
            绘制工具
          </template>
          <MenuItem name="Draw1">绘制工具一</MenuItem>
          <MenuItem name="Draw2">绘制工具二</MenuItem>
        </Submenu>
        <Submenu name="5">
          <template slot="title">
            <Icon type="ios-paper"></Icon>
            信息窗口示例
          </template>
          <MenuItem name="msg1">添加纯文字的信息窗口</MenuItem>
          <MenuItem name="msg2">添加图文组合的信息窗口</MenuItem>
          <MenuItem name="msg3">*添加带检索功能的信息窗口</MenuItem>
          <MenuItem name="msg4">给多个点添加信息窗口</MenuItem>
          <MenuItem name="msg5">获取信息窗口的内容</MenuItem>
        </Submenu>
        <Submenu name="6">
          <template slot="title">
            <Icon type="ios-paper"></Icon>
            给地图添加右键菜单
          </template>
          <MenuItem name="mouseRight1">给地图添加右键菜单</MenuItem>
          <MenuItem name="mouseRight2">给覆盖物添加右键菜单</MenuItem>
        </Submenu>
        <Submenu name="7">
          <template slot="title">
            <Icon type="ios-paper"></Icon>
            鼠标示例
          </template>
          <MenuItem name="mouse1">设置鼠标样式</MenuItem>
          <MenuItem name="mouse2">鼠标滚轮缩放地图</MenuItem>
          <MenuItem name="mouse3">鼠标拉框放大地图</MenuItem>
          <MenuItem name="mouse4">鼠标测距</MenuItem>
          <MenuItem name="mouse5">鼠标点击拾取坐标</MenuItem>
          <MenuItem name="mouse6">鼠标绘制点线面</MenuItem>
        </Submenu>
        <Submenu name="8">
          <template slot="title">
            <Icon type="ios-paper"></Icon>
            叠加层示例
          </template>
          <MenuItem name="superimposedLayer1">叠加/删除路况图层</MenuItem>
          <MenuItem name="superimposedLayer2">叠加/删除清华微观图</MenuItem>
          <MenuItem name="superimposedLayer3">叠加/删除魔兽地图</MenuItem>
          <MenuItem name="superimposedLayer4">叠加/删除自定义网格</MenuItem>
        </Submenu>
        <Submenu name="9">
          <template slot="title">
            <Icon type="ios-paper"></Icon>
            叠加层示例
          </template>
          <MenuItem name="eventsExp1">图块加载完成事件</MenuItem>
          <MenuItem name="eventsExp2">地图单击事件</MenuItem>
          <MenuItem name="eventsExp3">给覆盖物注册事件</MenuItem>
          <MenuItem name="eventsExp4">传递事件参数</MenuItem>
          <MenuItem name="eventsExp5">为多个点注册点击事件</MenuItem>
          <MenuItem name="eventsExp6">注销事件</MenuItem>
        </Submenu>
        <Submenu name="10">
          <template slot="title">
            <Icon type="ios-paper"></Icon>
            GPS功能
          </template>
          <MenuItem name="gps1">单个点沿线运动</MenuItem>
          <MenuItem name="gps2">多点沿线运动</MenuItem>
          <MenuItem name="gps3">路书</MenuItem>
        </Submenu>
      </Menu>
      </Col>
    </Row>
    <router-view class="mid"></router-view>
    <div class="right">
      <iframe width="100%" height="100%" :src=html frameborder="0"></iframe>
    </div>
  </div>
</template>
<script>
// import traffic from '../router/traffic.js'
export default {
  props: ['nav'],
  data () {
    return {
      theme2: 'dark',
      html: '../static/mapExample1.html'
    }
  },
  watch: {
    '$route' (to, from) {
      this.html = '../static/' + to.params.id + '.html'
    }
  },
  methods: {
    turnUrl (name) {
      this.$router.push({path: '/Maps/' + name + ''})
    }
  }
}
</script>

<style scoped>
  .container{
    width: 100%;
    height: 100%;
  }
  .ivu-menu-item{
    padding: 10px 20px;
  }
  .ivu-menu-item a{
    color: rgba(255,255,255,.7);
  }
  .ivu-menu-item a:hover{
    color: rgba(255,255,255,1);
  }
  .left {
    width: 240px;
    background: #495060;

  }
</style>
