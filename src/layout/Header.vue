<template>
  <div class="header">
    <div>
      <span class="wap" @click="change">
        <i class="el-icon-s-unfold icon" v-if="!this.isCollapse"></i>
        <i class="el-icon-s-fold icon" v-else></i>
      </span>
    </div>
    <div>
      <el-dropdown @command="rinige">
        <el-avatar :size="size" :src="avatar"></el-avatar>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="profile">个人信息</el-dropdown-item>
          <el-dropdown-item command="exit">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { getUserInfo } from "@/api/user";

export default {
  data() {
    return {
      size: "large",
      isCollapse: false
    };
  },
  computed: {
    avatar() {
      return this.$store.getters.avatar;
    }
  },
  methods: {
    rinige(command) {
      switch (command) {
        case "exit":
          localStorage.removeItem("token");
          this.$router.push("/login");
          this.$message({
            message: "下班",
            type: "warning"
          });
          break;
        case "profile":
          this.$router.push("/profile");
          break;
      }
    },
    change() {
      this.isCollapse = !this.isCollapse;
      this.$bus.$emit("haha", !this.isCollapse);
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  height: 40px;
  //   background: #f99;
  display: flex;
  justify-content: space-between;
  // align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.icon {
  font-size: 20px;
  line-height: 45px;
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