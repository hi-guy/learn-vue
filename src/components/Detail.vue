<template>
  <div class="detail">
    <span class="label">{{ detail.value1 }}</span>
  </div>
</template>

<script>
export default {
  props: {
    detail: {
      type: Object,
      default: null
    }
  },
  data() {
    return {};
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.detail {
  span {
    color: black;
    font-size: 20px;
  }
}
</style>
