<template>
  <a-layout id="components-layout-demo-fixed">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%',height: '80px'}">
      <div class="logo">
        <img src="../../assets/images/logo.png" alt="头像" width="100%">
      </div>
      <a-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="menu_select"
        :style="{ lineHeight: '80px', background:'none', fontSize: '22px'}"
        @click="nvaClick"
      >
        <a-menu-item key="/Center">个人主页</a-menu-item>
        <a-menu-item key="/Baike">百科书</a-menu-item>
        <a-menu-item key="/Tribune">论坛</a-menu-item>
      </a-menu>
      <div class="login-map">
        <!-- 未登录 -->
        <div class="no-login" v-if="!user_info">
          <a-button @click="showModal">登录</a-button>
          <a-button>注册</a-button>
          <a-modal
            title="登录"
            cancelText="取消"
            okText="登录"
            width="400px"
            v-model="visible"
            @ok="handleOk"
            id="login-map"
          >
            <a-input size="large" placeholder="large size" v-model="userName" type="text"/>
            <a-input size="large" placeholder="large size" v-model="userPwd" type="password"/>
          </a-modal>
        </div>
        <div class="logining" v-if="user_info">
          <a-avatar :size="48" icon="user"/>
          <span>
            <a-dropdown>
              <a-button>{{userName}}</a-button>
              <a-menu slot="overlay" id="login-dropMenu">
                <a-menu-item>
                  <a>个人资料修改</a>
                </a-menu-item>
                <a-menu-item>
                  <a>消息</a>
                </a-menu-item>
                <a-menu-item>
                  <a>退出</a>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </span>
          <span class="sys-date">{{sysDate}}</span>
        </div>
      </div>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <div :style="{ minHeight: '380px', marginTop:'50px'}">
        <router-view></router-view>
      </div>
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">huhu ©2018 Created by kanade_zhang</a-layout-footer>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
      // 用户名
      userName: "",
      // 用户密码
      userPwd: "",
      // 模态窗口
      visible: false,
      // 登录成功以后显示用户信息状态
      user_info: false,
      // 系统时间
      sysDate: "",
      // 选中菜单
      menu_select: []
    };
  },
  methods: {
    // 点击nvabar切换路由，在框架上data.key
    nvaClick(data) {
      this.$router.push({ path: data.key });
    },
    showModal() {
      this.visible = true;
    },
    handleOk() {
      this.visible = false;
      this.user_info = true;
      sessionStorage.userName = this.userName;
    },
    getSysDate() {
      let time = new Date();
      let Y = time.getFullYear() + "-";
      let M =
        (time.getMonth() + 1 < 10
          ? "0" + (time.getMonth() + 1)
          : time.getMonth() + 1) + "-";
      let D = time.getDate() + " ";
      this.sysDate = Y + M + D;
    }
  },
  // watch() {
  //   this.menu_select = this.$route.path;
  // },
  mounted() {
    this.getSysDate();
    this.menu_select.push(this.$route.path);
  }
};
</script>
<style lang='scss' scoped>
#components-layout-demo-fixed {
  .logo {
    width: 100px;
    float: left;
    height: 80px;
    line-height: 80px;
  }
  .ant-layout-header {
    background: #f3f4f8;
    box-shadow: 0 0 8px #999999;
  }
  ul.ant-menu.ant-menu-horizontal.ant-menu-root.ant-menu-dark li {
    font-family: "shuimo1";
    font-size: 24px;
    font-weight: bold;
    color: #333;
    padding: 0 50px;
  }
  .ant-menu-item-selected {
    background: url("../../assets/images/nav-select.png") no-repeat;
    background-size: 100% 100%;
  }
  .ant-layout-content,
  .ant-layout-footer {
    background: #f1f1f1;
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
      color: #333;
      button.ant-btn.ant-btn-default {
        margin-right: 20px;
        background: none;
        border: 2px solid #333;
        font-weight: bold;
      }
      .ant-btn:hover,
      .ant-btn:focus {
        color: #333;
      }
    }
    .logining {
      width: 100%;
      line-height: 80px;
      font-family: "shuimo1";
      font-size: 24px;
      color: #333;
      span {
        margin-left: 15px;
        .ant-btn {
          border: none;
          background: none;
          font-size: 22px;
        }
      }
      span.sys-date {
        font-size: 18px;
        font-family: Arial, Helvetica, sans-serif;
      }
    }
  }
}
</style>

