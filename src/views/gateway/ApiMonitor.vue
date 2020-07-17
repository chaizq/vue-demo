<template>
  <a-layout-content style="margin: 0 16px;">
    <a-breadcrumb style="margin: 16px 0; text-align: left;">
      <a-breadcrumb-item>Service</a-breadcrumb-item>
      <a-breadcrumb-item>{{$t(routeName)}}</a-breadcrumb-item>
    </a-breadcrumb>

    <template>
      <div :v-if="data.length" :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
        <a-button @click="click">Refresh</a-button>
        <v-chart
          :forceFit="true"
          height="400"
          :data="chartData"
          :scale="scale"
          :padding="padding"
        >
          <v-tooltip :crosshairs="false"></v-tooltip>
          <v-legend :attachLast="false"></v-legend>
          <v-line
            position="time*Count"
            :color="color"
          >
          </v-line>
          <v-axis
            dataKey="time"
            :label="label"
          >
          </v-axis>
          <v-axis
            dataKey="Count"
            :label="labelFormater"
          >
          </v-axis>
          <v-guide
            type="dataMarker"
            :position="position1"
            :content="content1"
            :style="style"
            :lineLength="30"
          >
          </v-guide>
          <v-guide
            type="dataMarker"
            :position="position2"
            :content="content2"
            :style="style"
            :lineLength="20"
          >
          </v-guide>
        </v-chart>
      </div>
    </template>

  </a-layout-content>
</template>



<script>
  const DataSet = require('@antv/data-set');

  export default {
    name: "ApiMonitor",

    // 使用计算属性computed获取新state值
    computed:{
      chartData(){
        return this.chart(this.$store.state.apiMonitorData);
      }
    },

    mounted() {

      //初始值
      const tmp = this.$store.state.apiMonitorData;
      this.chart(tmp)

    },
    methods:{
      click(){
        this.$store.dispatch('getApiMonitorData')

      },
      chart (data) {
        let ds = new DataSet();
        let dv = ds.createView().source(data);
        dv.transform({
          type: 'map',
          callback: function callback(row) {
            const times = row.Time.split(' ');
            row.date = times[0];
            row.time = times[1];
            return row;
          }
        });
        this.$data.data = dv.rows; // 静态值赋给data()中的data变量
        return dv.rows
      }

    },
    data() {
      return {
        routeName: this.$route.name,
        data:[],
        position1:['13:00', 0],
        position2:['14:00', 4180],
        content1:'服务器宕机\n低值：0',
        content2:'宕机导致服务积压，恢复后达峰值\n高值：4108',
        label:{
          textStyle: {
            fill: '#aaaaaa'
          }
        },
        labelFormater: {
          textStyle: {
            fill: '#aaaaaa'
          },
          formatter: function formatter(text) {
            return text.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
          }
        },
        style:{
          text: {
            textAlign: 'left',
            fontSize: 12,
            stroke: 'white',
            lineWidth: 2
          }
        },
        color:['date', ['#d9d9d9', '#1890ff']],
        scale:[{
          dataKey:'time',
          tickCount: 12
        },{
          dataKey:'date',
          type: 'cat'
        }],
        padding:[20, 90, 80, 50],
      };
    }
  };
</script>

<style scoped>

</style>