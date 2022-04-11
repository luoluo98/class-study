// 导入 vue 这个包，得到 vue 构造函数
import Vue from 'vue'
// 导入App.vue 根组件，将来要把 App.vue 中的模板结构渲染到 html 页面中
// import App from './App.vue'
import Test from './Test.vue'

Vue.config.productionTip = false

// 创建 vue 的实例对象
new Vue({
  // el: '#app',  和.$mount('#app')二选一
  // 把 render 函数指定的组件渲染到 html 页面中
  // render函数中，渲染的是哪个.vue组件，那么这个组件就叫做--根组件
  render: h => h(Test),
}).$mount('#app')

// vue 实例的 .$mount('')方法和el属性完全一样