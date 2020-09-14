<template>
  <div class="body">
    <a-page-header
      :ghost="false"
      title="服务列表"
      sub-title="This is a subtitle"
      @back="() => $router.go(-1)"
    >
      <template slot="extra">
        <a-button key="3">
          Operation
        </a-button>
        <a-button key="2">
          Operation
        </a-button>
        <a-button key="1" type="primary">
          Primary
        </a-button>
      </template>
      <a-row>
        <a-col span="18" style="margin-top: 1.5em;">
          <a-descriptions size="small" :column="3">
            <a-descriptions-item label="Created">
              Lili Qu
            </a-descriptions-item>
            <a-descriptions-item label="Association">
              <a>421421</a>
            </a-descriptions-item>
            <a-descriptions-item label="Creation Time">
              2017-01-10
            </a-descriptions-item>
            <a-descriptions-item label="Effective Time">
              2017-10-10
            </a-descriptions-item>
            <a-descriptions-item label="Remarks">
              Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
            </a-descriptions-item>
            <a-descriptions-item label="Next">
              Next Info
            </a-descriptions-item>
          </a-descriptions>

          <p>
            Ant Design interprets the color system into two levels: a system-level color system and a
            product-level color system.
          </p>
          <p>
            Ant Design interprets the color system into two levels: a system-level color system and a
            product-level color system.
          </p>
          <p>
            Ant Design&#x27;s design team preferred to design with the HSB color model, which makes it
            easier for designers to have a clear psychological expectation of color when adjusting colors,
            as well as facilitate communication in teams.
          </p>
        </a-col>
        <a-col span="6">
          <img
            style="text-align: center; padding-top: 2em;"
            :src="extraImage"
            alt="content"
            width="80%"
          />
        </a-col>
      </a-row>

    </a-page-header>

    <a-list
      rowKey="id"
      :grid="{gutter: 24, lg: 3, md: 2, sm: 1, xs: 1}"
      style="margin-top: 1em;"
      :dataSource="dataSource"
    >
      <a-list-item slot="renderItem" slot-scope="item">
        <template v-if="!item || item.id === undefined">
          <a-button class="new-btn" type="dashed">
            <a-icon type="plus"/>
            新增服务
          </a-button>
        </template>
        <template v-else>
          <a-card :hoverable="true">
            <a-card-meta>
              <a slot="title">{{ item.title }}</a>
              <a-avatar class="card-avatar" slot="avatar" :icon="item.icon" size="large" />
              <div class="meta-content" slot="description">{{ item.content }}</div>
            </a-card-meta>
            <template class="ant-card-actions" slot="actions">
              <a><a-icon type="setting" /> 操作一</a>
              <a><a-icon type="edit" /> 操作二</a>
            </template>
          </a-card>
        </template>
      </a-list-item>
    </a-list>
  </div>

  <!--<page-header-wrapper
      :tab-list="tabList"
      :tab-active-key="tabActiveKey"
      :tab-change="(key) => {
      this.tabActiveKey = key
    }"
      content="服务列表说明文档：蚂蚁金服务设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态， 提供跨越设计与开发的体验解决方案。"
    >
      <template v-slot:extraContent>
        <div style="width: 155px; margin-top: -20px;"><img style="width: 100%;" :src="extraImage" /></div>
      </template>
    </page-header-wrapper>-->
</template>

<script>

  import {mapGetters} from 'vuex'

  const routes = [
    {
      path: 'index',
      breadcrumbName: 'First-level Menu',
    },
    {
      path: 'first',
      breadcrumbName: 'Second-level Menu',
    },
    {
      path: 'second',
      breadcrumbName: 'Third-level Menu',
    },
  ];

  const dataSource = []

  for (let i = 0; i < 10; i++) {
    dataSource.push({
      id: i,
      title: 'API No.' + (i+1),
      icon: 'bar-chart', // 与 antd icon 图标素材一致
      // avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      // avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
      content: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。'
    })
  }
  dataSource.push({})

  export default {
    name: 'CardList',
    computed:{
      ...mapGetters([
        'user',
        'personId'
      ]),
    },
    data () {
      this.tabList = [
        { key: 'tab1', tab: '服务列表' },
        { key: 'tab2', tab: '服务详情' },
        { key: 'tab3', tab: '帮助信息' }
      ]
      return {
        tabActiveKey: 'tab1',

        extraImage: 'https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png',
        dataSource,
        routes
      }
    },
    created() {
      // 改变state中的personId为ID_001
      this.$store.dispatch('changePersonId','ID_001')
      // 取state中的personId值
      console.log(this.personId)
    },
    methods: {
      testFun () {
        this.$message.info('快速开始被点击！')
      }
    }
  }
</script>

<style lang="less" scoped>

  .new-btn {
    background-color: #fff;
    border-radius: 2px;
    width: 100%;
    height: 188px;
  }
  .body {
    background-color: #f5f5f5;
    padding: 24px;

    /deep/ .ant-descriptions-item-label {
      font-family: Cambria, sans-serif;
      font-weight: bold;

    }
    // 段落描述布局
    p {
      float: left;
      text-align: left;
    }
    tr:last-child td {
      padding-bottom: 0;
    }
  }
</style>
