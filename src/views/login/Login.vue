<!-- 登录页面 -->
<template>
  <div class="login">
      <div class="cen clearfix">
        <div class="left"></div>
        <div class="right">
            <h3>Welcome to the data world</h3>
            <div class="user-img">
                <a-avatar :size="100" icon="user"/>
            </div>
            <div class="form-list">
                <input type="text" placeholder="请输入用户名">
                <span class="icon icon-yonghu"></span>
            </div>
            <div class="form-list">
                <input type="password" placeholder="请输入密码">
                <span class="icon icon-pwd"></span>
            </div>
            <div class="form-list">
                <input type="button" class="btn" value="登陆">
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      userPwd: ""
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {}
};
</script>
<style lang='scss' scoped>
.login {
  width: 100vw;
  height: 100vh;
  background: url("../../assets/images/login-bg.png") no-repeat;
  background-size: 100% 100%;
  padding-top: 100px;
  .cen {
    width: 1200px;
    height: 700px;
    margin: 0px auto;
    .left,
    .right {
      float: left;
      width: 50%;
      height: 100%;
    }
    div.left {
      background: url("../../assets/images/login-list.png") no-repeat;
      background-size: 100% 100%;
    }
    div.right {
      background: #293b59;
      padding-top: 80px;
      h3 {
        font-size: 48px;
        line-height: 56px;
        font-family: "adequateFont";
        font-weight: bold;
        color: #ffffff;
        text-align: center;
        padding: 0 100px;
      }
      .user-img {
        text-align: center;
        padding: 10px;
      }
      .form-list {
        padding: 20px 136px;
        position: relative;
        font-size: 20px;
        line-height: 50px;
        color: #bfc5ce;
        input {
          height: 50px !important;
          border-radius: 25px !important;
          border: 1px solid #7f899b !important;
          background: #293b59 !important;
          width: 100%;
          padding-left: 45px;
        }
        span.icon {
          position: absolute;
          left: 147px;
          top: 20px;
          font-size: 30px;
        }
        .btn {
          background: #4a78c6 !important;
          border: none !important;
          text-align: center;
          color: #ffffff;
          padding-left: 0;
        }
      }
    }
  }
}
</style>