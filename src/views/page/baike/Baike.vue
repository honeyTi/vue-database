<template>
  <div>
    <a-menu mode="inline" :openKeys="openKeys" @openChange="onOpenChange">
      <a-sub-menu key="sub1">
        <span slot="title">
          <a-icon type="book"/>
          <span>历史书籍</span>
        </span>
        <a-menu-item key="1">正史</a-menu-item>
        <a-menu-item key="2">个人列传</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title">
          <a-icon type="appstore"/>
          <span>古典名著</span>
        </span>
        <a-menu-item key="5">中国古典名著</a-menu-item>
        <a-menu-item key="6">外国古典名著</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub4">
        <span slot="title">
          <a-icon type="setting"/>
          <span>野史趣谈</span>
        </span>
        <a-menu-item key="7">趣谈一</a-menu-item>
        <a-menu-item key="8">趣谈二</a-menu-item>
        <a-menu-item key="9">趣谈三</a-menu-item>
        <a-menu-item key="10">趣谈四</a-menu-item>
      </a-sub-menu>
    </a-menu>
    <div class="content">内容</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rootSubmenuKeys: ["sub1", "sub2", "sub4"],
      openKeys: ["sub1"]
    };
  },
  methods: {
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(
        key => this.openKeys.indexOf(key) === -1
      );
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
  }
};
</script>

<style lang="scss" scoped>
ul.ant-menu.ant-menu-inline.ant-menu-root.ant-menu-light {
  float: left;
  box-shadow: 0 0 8px #f1f1f1;
  width: 14%;
}
.content {
  float: left;
  width: 85%;
  margin-left: 1%;
  background: #fff;
  box-shadow: 0 0 8px #f1f1f1;
  padding: 20px;
}
</style>

