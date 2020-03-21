<template>
  <div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div class="cell" v-for="item in list" :key="item.id" @click="itemClick(item, $event)">
        <span class="label">{{item.name}}</span>
      </div>
    </van-list>
    <van-dialog v-model="showAlert" title="标题" show-cancel-button>
      <Alert :detail="currentDetail"></Alert>
    </van-dialog>
  </div>
</template>

<script>
import Alert from "./Alert";

export default {
  props: {
    msg: String
  },
  components: {
    Alert
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      currentDetail: null,
      showAlert: false
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push({
            id: i,
            name: `周${i}`
          });
        }

        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        this.finished = true;
      }, 1000);
    },
    itemClick(item, e) {
      console.log(e);
      console.log(item);
      // this.$router.push({
      //   path: "/Detail",
      //   query: {
      //     id: 1,
      //     item: item,
      //     value: 2,
      //     value1: 2
      //   }
      // });
      this.currentDetail = item;
      this.showAlert = true;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.cell {
  padding: 10px;
  background-color: #b34242;
  display: flex;
  .label {
    font-size: 28px;
    background-color: white;
    flex: 1;
    border-radius: 10px;
  }
}
</style>
