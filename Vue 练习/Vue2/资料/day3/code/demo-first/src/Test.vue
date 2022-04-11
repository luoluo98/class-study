<template>
  <div class="test-box">
    <h3>这是用户自定义的 Test.vue --- {{ username }}</h3>
    <button @click="changeName">修改用户名</button>
  </div>
</template>

<script>
// 默认导出。固定写法！
export default {
  // data 数据源
  // 注意： .vue组件中的data不能和之前一样，不能指向对象
  // 组件中的 data 必须是一个函数
  data() {
    // 这个return出去的{}中，可以定义数据
    return {
      username: 'admin'
    }
  },
  methods: {
    changeName() {
      // 在组件中， this 就表示当前组件的实例对象
      console.log(this);
      this.username='滴滴滴'
    }
  },
  //当前组件中的侦听器
  watch: {},
  // 当前组件中的计算属性
  computed: {},
  // 当前组件中的过滤器
  filters: {},
}
</script>
<style lang='less'>
.test-box {
  background-color: pink;
  h3 {
    color: red;
  }
}
</style>
