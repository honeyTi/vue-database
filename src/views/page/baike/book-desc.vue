<!-- 书籍详情页面 -->
<template>
  <div class="book-desc">
    <h1 class="book-title">
      {{bookName}}
      <span class="author">作者---{{bookAuthor}}</span>
    </h1>
    <div class="book-desc-content">
      <h3>内容简介</h3>
      <div>{{bookDesc}}</div>
    </div>
    <div class="book-index-map">
      <h3>书籍目录</h3>
      <div class="book-index-list clearfix">
        <span v-for="item in bookIndex" :key="item.id">{{ item.book_index }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 书籍名称
      bookName: "",
      // 书籍作者
      bookAuthor: "",
      // 书籍描述
      bookDesc: "",
      // 书籍key键
      bookKey: "",
      // 书籍目录列表
      bookIndex: []
    };
  },
  methods: {
    getBookIndex() {
      this.$api
        .get(
          `/bookhistory25?book_name=` +
            this.bookName +
            `&book_key=` +
            this.bookKey
        )
        .then(res => {
          this.bookIndex = res.data.result;
          console.log(this.bookIndex);
        });
    }
  },
  mounted() {
    // 初始化获取数据
    this.bookName = this.$route.params.bookName;
    this.bookAuthor = this.$route.params.bookAuthor;
    this.bookDesc = this.$route.params.bookDesc;
    this.bookKey = this.$route.params.bookKey;
    console.log(this.bookKey);
    this.getBookIndex();
  }
};
</script>
<style lang='scss' scoped>
.book-desc {
  background: #fff;
  width: 1200px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 0 8px #f1f1f1;
  .book-title {
    font-weight: bold;
    font-size: 24px;
    line-height: 50px;
    border-bottom: 1px dotted #d8d8d8;
    .author {
      font-size: 14px;
      color: #999;
      margin-left: 30px;
      font-weight: normal;
    }
  }
  .book-desc-content {
    margin-top: 50px;
    width: 100%;
    h3 {
      font-weight: normal;
      font-size: 20px;
      color: #333;
    }
    div {
      font-size: 14px;
      color: #666;
      line-height: 36px;
      text-align: justify;
      text-indent: 2em;
      padding: 20px 40px;
      max-height: 150px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      border: 1px solid #dddddd;
    }
  }
  .book-index-map {
    width: 100%;
    margin-top: 50px;
    h3 {
      font-weight: normal;
      font-size: 20px;
      color: #333;
    }
    .book-index-list {
      border: 1px solid #dddddd;
      padding: 20px 40px;
      span {
        float: left;
        width: 50%;
        display: block;
        line-height: 36px;
        font-size: 14px;
        color: #666;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        cursor: pointer;
      }
      span:hover {
        background: #f1f1f1;
      }
    }
  }
}
</style>