<template>
  <div class="profile">
    <div class="left">
      <el-avatar :size="100" :src="circleUrl"></el-avatar>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="昵称:">
          <el-text v-model="form.name">翻斗花园有棵树 我叫英俊你记住</el-text>
        </el-form-item>
      </el-form>
    </div>
    <div class="mid"></div>
    <div class="right">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="姓名:">
          <el-text v-model="form.name">中分头背带裤我叫ikun你记住</el-text>
        </el-form-item>
        <el-form-item label="邮箱:">18997142568@qq.com</el-form-item>
        <el-form-item label="住址:">
          <el-text v-model="form.delivery">日本我孙子市</el-text>
        </el-form-item>
        <el-form-item label="电话:">
          <el-text v-model="form.region">1001010102</el-text>
        </el-form-item>
        <el-form-item label="备注:">
          <el-tag>学校</el-tag>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { getUserInfo } from "@/api/user";
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        circleUrl:""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>
<style>
.profile {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  /* align-items: center; */
  margin: 0 auto;
}
.profile .left {
  margin-top: 50px;
  width: 300px;
  height: 300px;
  background-color: #fff;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.profile .right {
  width: 300px;
  margin-top: 50px;
  /* box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%); */
}
.el-avatar {
  margin-left: 100px;
  /* margin-top: 20px; */
  line-height: 30px;
}
.profile .mid {
  border: 1px solid #eee;
  margin-top: 50px;
}
</style>