<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider collapsible v-model="collapsed">
      <div class="logo">
      </div>
      <a-menu theme="dark" :defaultSelectedKeys="['1']" mode="inline">
        <a-menu-item key="1">
          <a-icon type="pie-chart" />
          <span>指标体系</span>
        </a-menu-item>
        <a-sub-menu
          key="sub1"
        >
          <span slot="title"><a-icon type="user" /><span>决策中心</span></span>
          <a-menu-item key="3">网络零售</a-menu-item>
          <a-menu-item key="4">在线服务</a-menu-item>
          <a-menu-item key="5">跨境电商</a-menu-item>
        </a-sub-menu>
        <a-sub-menu
          key="sub2"
        >
          <span slot="title"><a-icon type="team" /><span>监测中心</span></span>
          <a-menu-item key="6">待定1</a-menu-item>
          <a-menu-item key="8">待定2</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <a-icon type="file" />
          <span>平台共享</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <div class="user-info fr">
          <span style="margin-right:10px;">
            <a-badge :count="info_num"><a-avatar shape="square" style="border:1px solid #eeee" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/></a-badge>
          </span>
          <span>
            <a-dropdown style="margin-right:50px; border:none">
              <a-button>{{userName}}</a-button>
              <a-menu slot="overlay" style="text-align:center">
                <a-menu-item>
                  <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">个人中心</a>
                </a-menu-item>
                <a-menu-item>
                  <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">修改</a>
                </a-menu-item>
                <a-menu-item>
                  <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">注销</a>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </span>
        </div>
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <!-- <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb> -->
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px', margin: '16px 0' }">
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        huhu tachi ©2018 Created by kanade zhang
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
      // 消息条数提示
      info_num: "",
      // 账号名字
      userName: ""
    };
  },
  mounted() {
    this.userName = sessionStorage.userName;
  }
};
</script>

<style lang="scss" scoped>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.logo {
  font-size: 20px;
  text-align: center;
  color: #ffffff;
}
.line {
  width: 500px;
  height: 300px;
}
</style>
