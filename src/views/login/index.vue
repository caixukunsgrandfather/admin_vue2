<template>
  <div class="login">
    <div class="cust-form">
      <h2>系统登录</h2>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item prop="username">
          <el-input prefix-icon="el-icon-s-custom" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            prefix-icon="el-icon-lock"
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="text" class="caixukun">
          <el-input v-model="ruleForm.text" maxlength="4"></el-input>
          <img @click="changsrc" class="code" :src="code_src" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
// import { watch } from "vue";
import { login } from "@/api/user";
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("验证码不能为空"));
      } else {
        callback();
      }
    };
    var validateusername = (rule, value, callback) => {
      let reg = /^[^0-9]\w{5,12}$/;

      if (!reg.test()) {
        callback(new Error("账号输入有误"));
      } else {
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (!/^[^0-9]\w{5,12}$/.test(value)) {
        callback(new Error("密码格式错误!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        password: "",
        text: ""
      },
      rules: {
        username: [{ validator: validateusername, trigger: "blur" }],
        password: [{ validator: validatePass2, trigger: "blur" }],
        text: [{ validator: checkAge, trigger: "blur" }]
      },
      code_src: "",
      uuid: "",
      timmer: 0
    };
  },
  created() {
    this.redercode();
    this.timmer = setInterval(() => {
      this.redercode();
    }, 1000 * 60);
  },
  beforeDestroy() {
    clearInterval(this.timmer);
  },
  methods: {
    redercode() {
      let uuid = uuidv4();
      this.uuid = uuid;
      this.code_src = `https://www.chengzier.cn:8000/api/generateimagecode?uuid=${uuid}`;
    },
    changsrc() {
      this.redercode();
    },
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          //去发送请求
          const res = await login(
            Object.assign(this.ruleForm, { uuid: this.uuid })
          );
          if (res.data.status == "success") {
            localStorage.setItem("token", res.data.token);
            this.$store.commit("writeToken", res.data.token);
            this.$message({
              message: res.data.msg,
              type: "success"
            });
            this.$router.push("/");
          } else {
            this.$message.error(res.data.msg);
            this.redercode();
          }
        } else {
          // console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style>
.login .el-form-item__content {
  margin: 0 !important;
}
.login .el-input input {
  background: transparent;
  border: none;
  height: 47px;
  color: aliceblue;
}
.login .caixukun .el-form-item__content {
  display: flex;
}
</style>

<style lang="less" scoped>
.login {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #2b3a4d;
  // background: url(../../assets/5.webp);
  background-size: 100% 100%;
}
.cust-form {
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
h2 {
  margin: 0 auto 40px auto;
  text-align: center;
  font-size: 26px;
  font-weight: 700;
  color: #eee;
}
.login .el-input {
  border: 1px solid hsla(0, 0%, 100%, 0.1);
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.1);
}
.code {
  display: block;
  height: 47px;
  cursor: pointer;
}
</style>