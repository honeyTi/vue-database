<!-- 书籍详情页面 -->
<template>
  <div>
    <div class="book-desc" v-if="!showContent">
      <h1 class="book-title">
        {{bookName}}
        <span class="author">作者---{{bookAuthor}}</span>
      </h1>
      <div class="book-desc-content">
        <h3>内容简介</h3>
        <div :title="bookDesc">{{bookDesc}}</div>
      </div>
      <div class="book-index-map">
        <h3>书籍目录</h3>
        <div class="book-index-list clearfix">
          <span
            v-for="item in bookIndex"
            :key="item.id"
            @click="contentMap(item.book_index)"
          >{{ item.book_index }}</span>
        </div>
      </div>
    </div>
    <div class="book-content-bg" v-if="showContent">
      <h4>{{content_detail_title}}</h4>
      <div v-html="content_tetail"></div>
      <div class="btn-map"></div>
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
      bookIndex: [],
      // 单章回目录名称
      content_detail_title: "",
      // 显示书籍内容页面状态
      showContent: false,
      // 书籍内容
      content_tetail: ""
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
    },
    contentMap(value) {
      this.bookIndex.forEach((element, index) => {
        console.log(index);
        if (value === element.book_index) {
          this.content_detail_title = value;
          this.content_tetail = element.book_content;
          this.showContent = true;
        }
      });
    }
  },
  mounted() {
    // 初始化获取数据
    this.bookName = this.$route.params.bookName;
    this.bookAuthor = this.$route.params.bookAuthor;
    this.bookDesc = this.$route.params.bookDesc;
    this.bookKey = this.$route.params.bookKey;
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
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        padding: 0 20px;
      }
      span:hover {
        background: #f1f1f1;
      }
    }
  }
}
.book-content-bg {
  background: #ffffff;
  font-size: 16px;
  width: 1200px;
  margin: 0 auto;
  padding: 20px 40px;
  line-height: 40px;
  box-shadow: 0 0 8px #f1f1f1;
  h4 {
    font-size: 26px !important;
    text-align: center;
    margin-bottom: 40px;
  }
}
</style>