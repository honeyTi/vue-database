<template>
  <a-layout id="components-layout-demo-fixed">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%',height: '80px'}">
      <div class="logo">
        <img src="../../assets/images/logo.png" alt="头像" width="100%">
      </div>
      <a-menu theme="dark" mode="horizontal" :defaultSelectedKeys="['2']" :style="{ lineHeight: '80px', background:'none', fontSize: '22px'}">
        <a-menu-item key="1">个人主页</a-menu-item>
        <a-menu-item key="2">百科书</a-menu-item>
        <a-menu-item key="3">论坛</a-menu-item>
      </a-menu>
      <div class="login-map">
        <!-- 未登录 -->
        <div class="no-login">
          <a-button @click="showModal">登录</a-button>
          <a-button>注册</a-button>
          <a-modal title="登录" cancelText="取消" okText="登录" width="400px" v-model="visible" @ok="handleOk">
            <a-input size="large" placeholder="large size" />
            <a-input size="large" placeholder="large size" />
          </a-modal>
        </div>
      </div>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <div :style="{ minHeight: '380px', marginTop:'36px'}">
        <router-view>
        </router-view>
      </div>
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">
      huhu ©2018 Created by kanade_zhang
    </a-layout-footer>
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
      userName: "",
      // 模态窗口
      visible: false
    };
  },
  methods: {
    // 点击nvabar切换路由，在框架上data.key
    // nvaClick(data) {
    //   this.$router.push({ path: data.key });
    // }
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    }
  }
};
</script>
<style lang='scss' scoped>
.ant-modal-footer {
  text-align: center !important;
  .ant-modal-body {
    input.ant-input.ant-input-lg {
      margin-bottom: 20px !important;
    }
  }
}
#components-layout-demo-fixed {
  .logo {
    width: 100px;
    float: left;
    height: 80px;
    line-height: 80px;
  }
  .ant-layout-header {
    background: url("../../assets/images/header-bg.png") no-repeat;
    background-size: 100% 100%;
    box-shadow: 0 0 8px #67523b;
  }
  ul.ant-menu.ant-menu-horizontal.ant-menu-root.ant-menu-dark li {
    font-family: "shuimo1";
    font-size: 24px;
    font-weight: bold;
    color: #67523b;
    padding: 0 50px;
  }
  .ant-menu-item-selected {
    background: url("../../assets/images/nav-select.png") no-repeat;
    background-size: 100% 100%;
  }
  .ant-layout-content,
  .ant-layout-footer {
    background: #ede7dc;
  }
  .login-map {
    position: absolute;
    width: 300px;
    height: 80px;
    // background: #ffffff;
    right: 50px;
    top: 0;
    .no-login {
      width: 100%;
      line-height: 80px;
      font-family: "shuimo1";
      font-size: 24px;
      color: #67523b;
      button.ant-btn.ant-btn-default {
        margin-right: 20px;
        background: none;
        border: 2px solid #67523b;
        font-weight: bold;
      }
      .ant-btn:hover,
      .ant-btn:focus {
        color: #67523b;
      }
    }
  }
}
</style>

