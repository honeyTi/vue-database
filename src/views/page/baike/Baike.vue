<template>
  <div>
    <a-menu mode="inline" :openKeys="openKeys" @openChange="onOpenChange" @click="menu_click">
      <a-sub-menu key="history_1">
        <span slot="title">
          <a-icon type="book"/>
          <span>历史书籍</span>
        </span>
        <a-menu-item key="1">正史</a-menu-item>
        <a-menu-item key="2">个人列传</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="history_2">
        <span slot="title">
          <a-icon type="appstore"/>
          <span>古典名著</span>
        </span>
        <a-menu-item key="5">中国古典名著</a-menu-item>
        <a-menu-item key="6">外国古典名著</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="history_3">
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
    <div class="content">
      <div class="content-book-list clearfix">
        <a-card
          hoverable
          style="width: 240px;float:left; position:relative"
          v-for="(item, index) in book_page"
          :key="index"
          @click="listClick(item.book_name, item.book_author, item.book_desc)"
        >
          <img alt="example" src="../../../assets/images/history_book.png" slot="cover">
          <a-card-meta :title="item.book_name">
            <template slot="description">{{item.book_author}}</template>
          </a-card-meta>
          <div class="book_img_name">{{item.book_name}}</div>
        </a-card>
      </div>
      <div class="content-page">
        <template>
          <a-pagination
            v-model="current"
            :total="rankAll"
            :defaultPageSize="pageSize"
            @change="pagePost"
          />
        </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rootSubmenuKeys: ["history_1", "history_2", "history_3"],
      openKeys: ["history_1"],
      // 翻页选中页码
      current: 1,
      //总记录数
      rankAll: undefined,
      // 全部书籍
      book_data_all: "",
      // 单页书籍数据
      book_page: "",
      // 单页书籍数量
      pageSize: 10
    };
  },
  methods: {
    listClick(a, b, c) {
      console.log(a);
      console.log(b);
      console.log(c);
    },
    pagePost(e) {
      console.log(e);
      this.book_page = [];
      for (
        let i = (e - 1) * this.pageSize;
        i < e * this.pageSize && i < this.book_data_all.length;
        i++
      ) {
        this.book_page.push(this.book_data_all[i]);
      }
      console.log(this.book_page);
    },
    menu_click() {
      this.current = 1;
      this.$api.get("/history_book_list25").then(res => {
        this.rankAll = res.data.result.length;
        this.book_data_all = res.data.result;
        this.pagePost(1);
      });
    },
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(
        key => this.openKeys.indexOf(key) === -1
      );
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    }
  },
  mounted() {
    this.menu_click();
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
  .content-book-list {
    .ant-card.ant-card-bordered.ant-card-hoverable {
      margin-right: 50px;
      margin-bottom: 30px;
    }
    .book_img_name {
      width: 100%;
      margin: 0;
      font-size: 24px;
      box-sizing: border-box;
      text-align: center;
      font-family: "shuimo1";
      position: absolute;
      top: 100px;
      left: 0;
      z-index: 100;
    }
  }
  .content-page {
    padding: 20px;
    text-align: center;
  }
}
</style>

