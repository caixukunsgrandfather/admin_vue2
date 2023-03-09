<template>
  <div class="header">
    <div>
      <span class="wap" @click="change">
        <i class="el-icon-s-fold icon"></i>
        <!-- <i class="el-icon-s-unfold icon"></i> -->
      </span>
    </div>
    <!-- <div>
        <i class="el-icon-s-unfold icon"></i>
    </div>-->
  </div>
</template>

<script>
export default {
  methods: {
    change() {
      this.$bus.$emit("haha");
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  height: 60px;
  //   background: #f99;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.icon {
  font-size: 30px;
  line-height: 60px;
}
.header div {
  height: 100%;
}
.wap {
  height: 100%;
  display: block;
  padding: 0px 15px;
  cursor: pointer;
}
.wap:hover {
  background: rgba(0, 0, 0, 0.025);
}
</style>