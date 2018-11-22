<template>
  <div class="header">
      {{ user }}
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    user: String
  }
};
</script>
<style lang='scss'>
.header {
    width: 80px
}

</style>