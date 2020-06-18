<template>
  <a-layout-content style="margin: 0 16px;">
    <a-breadcrumb style="margin: 16px 0; text-align: left;">
      <a-breadcrumb-item>{{$t("Gateway")}}</a-breadcrumb-item>
      <a-breadcrumb-item>{{$t(routeName)}}</a-breadcrumb-item>
    </a-breadcrumb>
    <div class="body">
      <a-row>
        <a-form :form="form" @submit="handleSubmit">
          <a-form-item label="API名称" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
            <a-input v-decorator="['apiName',  { rules: [
             { required: true, message: 'Please input your apiName!' },

             ]
             }]"/>
          </a-form-item>

          <a-form-item label="访问地址" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
            <a-input v-decorator="['url', { rules: [{ required: true, message: 'Please input url!' }] }]"/>
          </a-form-item>

          <a-form-item label="请求方法" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
            <a-input v-decorator="['method', { rules: [{ required: true, message: 'Please input request method!' }] }]"/>
          </a-form-item>

          <a-form-item label="上流服务地址" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
            <a-input v-decorator="['upstreamUrl',
            { rules: [
            { required: true, message: 'Please input upstream url!' },
            { pattern: standardHead,  message: '请输入以http:// 或https:// 开头的地址'}

            ]}]" />
          </a-form-item>

          <a-form-item label="请求体格式" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
            <a-select
                v-decorator="[ 'reqFormat',
                { rules: [{ required: true, message: 'Please select your request body format!' }] },
                ]"
                placeholder="请选择请求体格式">
              <a-select-option :value="item" v-for="item in bodyFormatTypes" :key="item">
                {{ item }}
              </a-select-option>
            </a-select>
          </a-form-item>

          <a-form-item label="响应体格式" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
            <a-select
                v-decorator="[ 'resFormat',
                { rules: [{ required: true, message: 'Please select your response body format!' }] },
                ]"
                placeholder="请选择响应体格式"
                @change="handleSelectChange">
              <a-select-option :value="item" v-for="item in bodyFormatTypes" :key="item">
                {{ item }}
              </a-select-option>
            </a-select>
          </a-form-item>

          <a-form-item label="版本号" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
            <a-input v-decorator="['version', { rules: [{ required: true, message: 'Please input version number!' }] }]"/>
          </a-form-item>

          <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
            <a-button type="primary" html-type="submit">Submit</a-button>
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
            <a-button type="primary" @click="test" v-bind:disabled="btnStatus">Test</a-button>
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
            <a-textarea :placeholder="res"  :rows="4" />
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 12, offset: 5 }" style="text-align: left;" >
            <p>
              Headers
            </p>
            <p style="margin-left: 2em;">
              <span style="font-weight: bold;" >aa</span>&emsp;&emsp;:<span style="color: #42b983;" >cc</span><br>
              <span style="font-weight: bold;" >bb</span>&emsp;&emsp;:<span style="color: #42b983;" >cc</span>
            </p>

          </a-form-item>
        </a-form>
      </a-row>
    </div>

  </a-layout-content>
</template>

<script>
  import AFormItem from "ant-design-vue/es/form/FormItem";

  // eslint-disable-next-line no-unused-vars
  function processingStr(obj){
    // let res;
    let keyArr,valueArr
    Object.keys(obj).forEach(key=>{
      console.log(key+':'+obj[key])
      keyArr.push(key)
      valueArr.push(obj[key])
    })
    return 'test'
  }

  export default {
    name: 'ApiManagement',
    components: {
      AFormItem
    },
    data () {
      return {
        // 正则
        standardHead : /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Za-z0-9+&@#/%=~_|$?!:,.]*\)|[-A-Za-z0-9+&@#/%=~_|$?!:,.])*(?:\([-A-Za-z0-9+&@#/%=~_|$?!:,.]*\)|[A-Za-z0-9+&@#/%=~_|$])/,
        jsonObj:{"total":1,"_map_":"true","failureReason":"receiveTest: unknown error","failureTime":1592268767000,"id":"150f5511de6d4ffb9c4892db3ad43ee8","isAutoRetried":"F","lastFailureTime":1592268767000,"method":"GET","name":"推送测试0603","retryTimes":"0","serviceUrl":"http://receiveTest","subscriber":"user","type":"http","uri":"/urlTest","user":"admin"},

        btnStatus:true,
        routeName: this.$route.name,
        // { name: 'ApiManagement' }是options配置项，防止其他表格属性值重名
        // form: this.$form.createForm(this, { name: 'ApiManagement' }),
        bodyFormatTypes: [
          'application/json',
          'application/xml',
          'application/octet-stream',
          'application/x-www-form-urlencoded',
          'text/plain',
          'multipart/form-data',
        ],
        // res : processingStr(this.jsonObj),
        res : 'mm',

      }
    },

    beforeMount() {
      this.form = this.$form.createForm(this, {name: 'ApiManagement'});

      /*const chartData=[{label: "定点推送测试1", invkCount: 121, invkErrorCount: 101, executeTime: "49"},
        {label: "机场流动人员信息查询", invkCount: 45, invkErrorCount: 26, executeTime: "43"},
        {label: "推送服务1", invkCount: 37, invkErrorCount: 36, executeTime: "11"},
        {label: "测试服务可用性", invkCount: 31, invkErrorCount: 27, executeTime: "9"},
        {label: "通用服务Message验证", invkCount: 31, invkErrorCount: 31, executeTime: "109"},
        {label: "dyx测试服务", invkCount: 18, invkErrorCount: 11, executeTime: "64"},
        {label: "dyx测试调阅数", invkCount: 15, invkErrorCount: 1, executeTime: "14"},
        {label: "dyx测试审核2", invkCount: 13, invkErrorCount: 2, executeTime: "20"},
        {label: "11", invkCount: 13, invkErrorCount: 13, executeTime: "6"},
        {label: "推送测试0603", invkCount: 7, invkErrorCount: 6, executeTime: "9"},
        {label: "中转旅客信息", invkCount: 6, invkErrorCount: 3, executeTime: "42"},
        {label: "测试调阅数", invkCount: 4, invkErrorCount: 4, executeTime: "8"},
        {label: "定点推送测试1", invkCount: 3, invkErrorCount: 0, executeTime: "225"},
        {label: "定点推送测试1", invkCount: 44, invkErrorCount: 55, executeTime: "225"}
      ]*/

      /*const res = new Map();
      let count = 1;
      for(let item of chartData) {
        if(!res.has(item.label)){
          res.set(item.label, item)
        } else {
          res.set(`${item.label}(${count++})`, item)
        }
      }
      console.log(res);*/

    },
    methods: {
      handleSubmit (e) {
        e.preventDefault()
        this.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            this.btnStatus=false;
            console.log('Received values of form: ', values)
          } else {
            this.btnStatus=true;
          }
        })
        console.log(this.form.getFieldsValue())
      },
      test () {
        const aa = this.form.getFieldsValue()
        console.log(aa.number)
      },
      handleSelectChange(value) {
        console.log(value)
        console.log(this.form.getFieldsValue())

        // this.form.setFieldsValue({
        //   'version': value
        // })

        // setTimeout(()=>{
        //   this.form.setFieldsValue({
        //     'version': value
        //   })
        // },0)

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