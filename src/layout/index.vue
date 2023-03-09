<template>
  <div class="layout">
    <el-container>
      <el-aside width="auto">
        <Aside />
      </el-aside>
      <el-container>
        <el-header>
          <Header></Header>
        </el-header>
        <router-view></router-view>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "./Header";
import Aside from "./Aside";
export default {
  components: {
    Header,
    Aside
  }
};
</script>
<style>
.layout .el-header {
  padding: 0;
}
.layout .el-aside {
  height: 100%;
  background: rgb(48, 65, 86);
}
.layout .el-menu {
  background: rgb(48, 65, 86);
}
.layout .el-submenu__title:hover,
.layout .el-menu-item:hover {
  background-color: #263445 !important;
}
html,
body,
#app,
.layout,
.el-container {
  height: 100%;
}
</style>