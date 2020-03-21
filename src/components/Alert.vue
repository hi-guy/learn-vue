<template>
  <div>
    <label>{{ detail.id }}</label>
    <label>{{ detail.name }}</label>
  </div>
</template>

<script>
export default {
  props: {
    detail: {
      type: Object,
      default: function () {
        return { id: '', name: "" }
      }
    }
  },
  data() {
    return {};
  },
  beforeUpdate: function() {
    console.log("========");
  }
};
</script>

<style lang="scss" scoped>
</style>