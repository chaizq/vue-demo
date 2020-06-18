<template>
  <a-layout-content style="margin: 0 16px;">
    <a-breadcrumb style="margin: 16px 0; text-align: left;">
      <a-breadcrumb-item>{{$t("Service")}}</a-breadcrumb-item>
      <a-breadcrumb-item>{{$t(routeName)}}</a-breadcrumb-item>
    </a-breadcrumb>
    <div class="body">
      <a-row>
        Service Register
      </a-row>
      <a-row>
        <a-col span="5">
          <a-input-search class="content-label"> </a-input-search>

          <a-table class="content-label" :columns="appColumns" :dataSource="appData" size="small" />
        </a-col>
        <a-col span="1">
          <a-divider type="vertical" :style="divideVertical" />
        </a-col>
        <a-col span="18">
          <a-tabs defaultActiveKey="1" @change="callback" style="text-align: left;">
            <a-tab-pane :tab="$t('service list')" key="1">
              <a-table :columns="columns" :dataSource="data" size="small" />
            </a-tab-pane>
            <a-tab-pane :tab="$t('model list')" key="2" forceRender>
              <a-table :columns="columns" :dataSource="data" size="small" />
            </a-tab-pane>
          </a-tabs>

        </a-col>
      </a-row>
    </div>

  </a-layout-content>
</template>

<script>
  import ARow from "ant-design-vue/es/grid/Row";
  import ACol from "ant-design-vue/es/grid/Col";
  import AInputSearch from "ant-design-vue/es/input/Search";
  const appColumns = [
    {
      title: '应用名',
      dataIndex: 'name'
    }
  ]
  const appData = [{
    key: '1',
    name: 'console',
  },{
    key: '2',
    name: 'App',
  },{
    key: '3',
    name: 'gateway',
  },];

  const columns = [{
    title: 'Name',
    dataIndex: 'name',
  }, {
    title: 'Age',
    dataIndex: 'age',
  }, {
    title: 'Address',
    dataIndex: 'address',
  }];
  const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  }, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  }, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  }];

  export default {

    beforeMount() {

    },
    data() {
      return {
        routeName: this.$route.name,  // 使用router.config.js中的name属性
        // routeName: this.$route.query.routeName,
        columns,
        data,

        appColumns,
        appData,

        divideVertical:{
          marginTop: '1em',
          height: (window.innerHeight * 0.8).toString()+'px',

        }
      };
    },

    name: "ServiceRegister",
    components: {
      AInputSearch,
      ACol,
      ARow
    },
    methods:{
      callback (key) {
        console.log(key)
      },

    }

  }

</script>

<style lang="less" scoped>
  .body {
    padding: 2em;
    background: #fff;
    min-height: calc(100% - 1.5em);
    .content-label {
      margin-top: 1em;
    }
  }
</style>

<!--页面局部国际化设置-->
<i18n>
  {
    "en": {
      "service list": "Service List",
      "model list": "Model List"
      },
    "zh":{
      "service list": "服务列表",
      "model list": "实例列表",
      "Service Register": "服务注册"
    }
  }
</i18n>