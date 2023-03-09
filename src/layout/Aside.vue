<template>
  <el-menu
    default-active="active"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    text-color="rgb(191,203,217)"
    active-text-color="rgb(64,158,255)"
    router
  >
    <el-menu-item index="/dashbord">
      <i class="el-icon-menu"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-menu-item index="/project/abc">
      <i class="el-icon-document"></i>
      <span slot="title">课程管理</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">管理员</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">管理员</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">管理员</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      active: "/"
    };
  },
  created() {
    this.active = this.$router.path;
    this.$bus.$on("haha", () => {
      this.isCollapse = !this.isCollapse;
    });
  }
};
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>