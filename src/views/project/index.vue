<template>
  <div class="project">
    <div class="promid">
      <el-input placeholder="查找" v-model="input" style="width:150px"></el-input>
      <el-button v-on:click="search">查找</el-button>
      <el-button type="success" class="increase" @click="add" max.length="100">新增</el-button>
    </div>
    <el-table
      :data="tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
      style="width: 100%"
    >
      <el-table-column type="index" prop="id" label="编号" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="create_time" label="创建时间" width="210"></el-table-column>
      <el-table-column prop="update_time" label="更新时间" width="210"></el-table-column>
      <el-table-column prop="manage" label="管理">
        <el-row slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" @click="updatesubmit(scope.row)"></el-button>
          <el-button type="primary" icon="el-icon-delete" @click="del(scope.row)"></el-button>
        </el-row>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        style="text-align:center"
        layout="prev, pager, next"
        :total="tableData.length"
        :page-size="pageSize"
        :current-page="currentPage"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { project } from "@/api/user";
import { project1 } from "@/api/user";
import { projectdel } from "@/api/user";
import { GAIBIAN } from "@/api/user";
export default {
  data() {
    return {
      token: "",
      tableData: [],
      input: "",
      value: "",
      row: "",
      currentPage: 1,
      pageSize: 10,
      searchname: ""
    };
  },
  //渲染
  created: async function() {
    // try {
    //   const res = await project(this.token);
    //   // let protables = new Array();
    //   // protables.push(res.data.data);
    //   console.log(protables);
    //   this.tableData = protables[0];
    //   console.log(res);
    // } catch {
    //   this.$message.error("错了");
    // }
    const res = await project(this.token);
    this.tableData = res.data.data;
  },
  methods: {
    //新增
    add() {
      this.$prompt("输入内容", {}).then(async ({ value }) => {
        try {
          // console.log(this.token);
          let data = new FormData();
          data.append("name", value);
          this.$router.go(0);
          const response = await project1(localStorage.getItem("token"), data);
        } catch (error) {
          this.$message.error("创建失败");
        }
      });
    },
    //删除
    del(row) {
      this.$alert("确定删除吗?", {
        confirmButtonText: "确定"
      }).then(async () => {
        try {
          const res = await projectdel(
            {
              pk: row.id
            },
            localStorage.getItem("token")
          );
          this.$message({
            type: "info",
            message: res.data.msg
          });
          this.$router.go(0);
        } catch {
          this.$message.error("删除失败");
        }
      });
    },
    //更新
    updatesubmit(row) {
      this.value = row.name;
      this.$prompt("确定更新吗?", {
        confirmButtonText: "确定"
        // inputValue:this.value
      }).then(async ({ value }) => {
        // console.log(res);
        try {
          const res = await GAIBIAN(
            {
              pk: row.id,
              name: value
            },
            localStorage.getItem("token")
          );
          this.$message({
            type: "success",
            message: "成功"
          });
          this.$router.go(0);
        } catch {
          this.$message.error("更新失败");
        }
      });
    },
    //分页点击
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    //查询
    search() {
      // console.log(this.input);
      let newlist = [];
      this.tableData.forEach(item => {
        if (item.name.includes(this.input)) {
          newlist.unshift(item);
        }
      });
      this.tableData = newlist;
    }
  }
};
</script>
<style lang="less" scoped>
.project {
  overflow-y: scroll;
  height: 100%;
}
.project .promid {
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.project .increase {
  width: 70px;
  height: 40px;
}
.project .search {
  width: 70px;
  height: 40px;
}
</style>