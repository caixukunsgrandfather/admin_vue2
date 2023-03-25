<template>
  <div class="Aside">
    <el-menu
      active-text-color="rgb(64, 158, 255)"
      text-color="rgb(191, 203, 217)"
      :default-active="active"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      router
    >
      <el-menu-item index="/dashbord">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/project">
        <i class="el-icon-document"></i>
        <span slot="title">课程管理</span>
      </el-menu-item>
      <el-menu-item index="/layout/lifse">
        <i class="el-icon-setting"></i>
        <span slot="title">管理员</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      active: "/layout"
    };
  },
  created() {
    this.active = this.$route.path;
    this.$bus.$on("csd", isCollapse => {
      this.isCollapse = isCollapse;
    });
  }
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
html,
body,
#app,
.layout {
  height: 100%;
}
.layout .el-container {
  height: 100%;
}
.layout .el-menu {
  border-right: none;
  background-color: rgb(48, 65, 86);
}
.layout .el-aside {
  width: 100%;
  background-color: rgb(48, 65, 86);
}
.layout .el-menu-item:hover {
  background-color: #263445 !important;
}
.el-menu-item:focus {
  display: none;
}
</style>