<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <p>message 的值是：{{ msg }}</p>
    <p>user 的值是：{{ user }}</p>
    <button @click='msg= "123" '> 修改msg </button>
    <button @click="user.name='zs' "> 修改user </button>

    <hr>
    <button @click='send'>把诗句发送给right</button>

    <hr>
  </div>
</template>

<script>
// 1. 导入eventBus.js模块
import bus from './eventBus.js'

export default {
  props: ['msg', 'user'],
  data() {
    return {
      str: '黑云压城城欲摧，甲光向日金鳞开。',
      arr: [
        {id: 1, name: 'zs'},
        {id: 2, name: 'ls'}
      ]
    }
  },
  methods: {
    send() {
      // 2. 通过eventbus来发送数据
      bus.$emit('share', this.str)
    }
  },
}
</script>

<style lang="less">
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
</style>
