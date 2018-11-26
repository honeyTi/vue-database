<!-- 指标体系 -->
<template>
  <div class="index-system">
      <div class="filter-map clearfix">
          <div class="left-div">
            <span>
                指标：
            </span>
            <span>
                <a-select defaultValue="测试指标三" style="width: 120px" @change="handleChange">
                    <a-select-option value="测试指标一">测试指标一</a-select-option>
                    <a-select-option value="测试指标二">测试指标二</a-select-option>
                    <a-select-option value="测试指标三">测试指标三</a-select-option>
                </a-select>
            </span>
          </div>
          <div class="right-div">
              <span>起止时间：</span>
              <span>
                  <a-range-picker format="YYYY-MM-DD"/>
              </span>
          </div>
      </div>
      <div class="list-content">
        测试文字
      </div>
  </div>
</template>

<script>
const columns = [
  {
    title: "姓名",
    dataIndex: "name"
  },
  {
    title: "价格",
    dataIndex: "money"
  },
  {
    title: "Address",
    dataIndex: "address"
  }
];
const data = [
  {
    key: "1",
    name: "John Brown",
    money: "￥300,000.00",
    address: "New York No. 1 Lake Park"
  },
  {
    key: "2",
    name: "Jim Green",
    money: "￥1,256,000.00",
    address: "London No. 1 Lake Park"
  },
  {
    key: "3",
    name: "Joe Black",
    money: "￥120,000.00",
    address: "Sidney No. 1 Lake Park"
  },
  {
    key: "3",
    name: "Joe Black",
    money: "￥120,000.00",
    address: "Sidney No. 1 Lake Park"
  },
  {
    key: "3",
    name: "Joe Black",
    money: "￥120,000.00",
    address: "Sidney No. 1 Lake Park"
  },
  {
    key: "3",
    name: "Joe Black",
    money: "￥120,000.00",
    address: "Sidney No. 1 Lake Park"
  }
];
export default {
  data() {
    this.chartSettings = {
      xAxisType: "time"
    };
    return {
      chartData: {
        columns: ["日期", "访问用户", "下单用户", "下单率"],
        rows: [
          { 日期: "2018-01-01", 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
          { 日期: "2018-01-02", 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
          { 日期: "2018-01-03", 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
          { 日期: "2018-01-05", 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
          { 日期: "2018-01-10", 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 日期: "2018-01-20", 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 }
        ]
      },
      data,
      columns
    };
  },
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    onChange(date, dateString) {
      console.log(date, dateString);
    }
  }
};
</script>
<style lang='scss' scoped>
.index-system {
  width: 100%;
  height: auto;
  .list-content {
    padding: 20px 0;
  }
  .filter-map {
    width: 100%;
    padding: 16px 0;
    border-bottom: 1px solid #ebedf0;
    .left-div,
    .right-div {
      float: left;
    }
    .left-div {
      width: 20%;
    }
    .right-div {
      width: 80%;
    }
  }
}
</style>