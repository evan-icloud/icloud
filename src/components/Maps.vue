<template>
  <div class="mid">
    <codemirror
      style="height: 100%;overflow-y: scroll"
      v-model="codes"
      :options="cmOptions">
    </codemirror>
  </div>
</template>

<script>
export default {
  data () {
    return {
      routesSel: 'mapExample1',
      code: '1',
      cmOptions: {
        tabSize: 1,
        mode: 'text/javascript',
        theme: 'material',
        line: true,
        tabMode: 'indent',
        autoMatchParens: true,
        textWrapping: true,
        lineNumbers: true,
        lineWrapping: true
      }
    }
  },
  watch: {
    '$route': function (to, from) {
      this.routesSel = to.params.id
    }
  },
  computed: {
    codes: {
      get: function () {
        if (this.routesSel === 'mapExample1') {
          return require(`${'html-loader!../../static/mapExample1.html'}`)
        } else if (this.routesSel === 'mapExample2') {
          return require(`${'html-loader!../../static/mapExample5.html'}`)
        } else if (this.routesSel === 'mapExample3') {
          return require(`${'html-loader!../../static/mapExample3.html'}`)
        } else if (this.routesSel === 'mapExample4') {
          return require(`${'html-loader!../../static/mapExample4.html'}`)
        } else if (this.routesSel === 'mapExample5') {
          return require(`${'html-loader!../../static/mapExample5.html'}`)
        } else if (this.routesSel === 'mapExample6') {
          return require(`${'html-loader!../../static/mapExample6.html'}`)
        } else if (this.routesSel === 'mapExample7') {
          return require(`${'html-loader!../../static/mapExample7.html'}`)
        } else if (this.routesSel === 'ctrlExp1') {
          return require(`${'html-loader!../../static/ctrlExp1.html'}`)
        } else if (this.routesSel === 'ctrlExp2') {
          return require(`${'html-loader!../../static/ctrlExp2.html'}`)
        } else if (this.routesSel === 'ctrlExp3') {
          return require(`${'html-loader!../../static/ctrlExp3.html'}`)
        } else if (this.routesSel === 'Marker1') {
          return require(`${'html-loader!../../static/Marker1.html'}`)
        } else if (this.routesSel === 'Marker2') {
          return require(`${'html-loader!../../static/Marker2.html'}`)
        } else if (this.routesSel === 'Marker3') {
          return require(`${'html-loader!../../static/Marker3.html'}`)
        } else if (this.routesSel === 'Marker4') {
          return require(`${'html-loader!../../static/Marker4.html'}`)
        } else if (this.routesSel === 'Marker5') {
          return require(`${'html-loader!../../static/Marker5.html'}`)
        } else if (this.routesSel === 'Marker6') {
          return require(`${'html-loader!../../static/Marker6.html'}`)
        } else if (this.routesSel === 'Marker7') {
          return require(`${'html-loader!../../static/Marker7.html'}`)
        } else if (this.routesSel === 'msg1') {
          return require(`${'html-loader!../../static/msg1.html'}`)
        } else if (this.routesSel === 'msg2') {
          return require(`${'html-loader!../../static/msg2.html'}`)
        } else if (this.routesSel === 'msg3') {
          return require(`${'html-loader!../../static/msg3.html'}`)
        } else if (this.routesSel === 'msg4') {
          return require(`${'html-loader!../../static/msg4.html'}`)
        } else if (this.routesSel === 'msg5') {
          return require(`${'html-loader!../../static/msg5.html'}`)
        } else if (this.routesSel === 'mouseRight1') {
          return require(`${'html-loader!../../static/mouseRight1.html'}`)
        } else if (this.routesSel === 'mouseRight2') {
          return require(`${'html-loader!../../static/mouseRight2.html'}`)
        } else if (this.routesSel === 'mouse1') {
          return require(`${'html-loader!../../static/mouse1.html'}`)
        } else if (this.routesSel === 'mouse2') {
          return require(`${'html-loader!../../static/mouse2.html'}`)
        } else if (this.routesSel === 'mouse3') {
          return require(`${'html-loader!../../static/mouse3.html'}`)
        } else if (this.routesSel === 'mouse4') {
          return require(`${'html-loader!../../static/mouse4.html'}`)
        } else if (this.routesSel === 'mouse5') {
          return require(`${'html-loader!../../static/mouse5.html'}`)
        } else if (this.routesSel === 'mouse6') {
          return require(`${'html-loader!../../static/mouse6.html'}`)
        } else if (this.routesSel === 'superimposedLayer1') {
          return require(`${'html-loader!../../static/superimposedLayer1.html'}`)
        } else if (this.routesSel === 'superimposedLayer2') {
          return require(`${'html-loader!../../static/superimposedLayer2.html'}`)
        } else if (this.routesSel === 'superimposedLayer3') {
          return require(`${'html-loader!../../static/superimposedLayer3.html'}`)
        } else if (this.routesSel === 'superimposedLayer4') {
          return require(`${'html-loader!../../static/superimposedLayer4.html'}`)
        } else if (this.routesSel === 'eventsExp1') {
          return require(`${'html-loader!../../static/eventsExp1.html'}`)
        } else if (this.routesSel === 'eventsExp2') {
          return require(`${'html-loader!../../static/eventsExp2.html'}`)
        } else if (this.routesSel === 'eventsExp3') {
          return require(`${'html-loader!../../static/eventsExp3.html'}`)
        } else if (this.routesSel === 'eventsExp4') {
          return require(`${'html-loader!../../static/eventsExp4.html'}`)
        } else if (this.routesSel === 'eventsExp5') {
          return require(`${'html-loader!../../static/eventsExp5.html'}`)
        } else if (this.routesSel === 'eventsExp6') {
          return require(`${'html-loader!../../static/eventsExp6.html'}`)
        } else if (this.routesSel === 'gps1') {
          return require(`${'html-loader!../../static/gps1.html'}`)
        } else if (this.routesSel === 'gps2') {
          return require(`${'html-loader!../../static/gps2.html'}`)
        } else if (this.routesSel === 'gps3') {
          return require(`${'html-loader!../../static/gps3.html'}`)
        }
      },
      set: function (str) {
      }
    }
  },
  methods: {
  }
}
</script>
