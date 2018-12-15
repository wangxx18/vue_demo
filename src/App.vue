<template>
  <div id="app">
    <v-header v-on:quit="quit()"></v-header>
    <router-view/>
    <v-footer></v-footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data:function(){
    return {
      loginuser:localStorage.getItem('user'),
    }
  },
  methods:{
    quit:function(){
      console.log('退出');
      console.log(this.$children[0]);  console.log('退出');
      console.log(this.$children[0]);  console.log('退出');
      console.log(this.$children[0]);  console.log('退出');
      console.log(this.$children[0]);  console.log('退出');
      console.log(this.$children[0]);  console.log('退出');
      console.log(this.$children[0]);  console.log('退出');
      console.log(this.$children[0]);  console.log('退出');
      console.log(this.$children[0]);  console.log('退出');
      console.log(this.$children[0]);
    }
  }
}
import Vue from 'vue'

Vue.filter("lastTime", function(val) {   //全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
  var date = new Date(val);
  var t = Date.now() - date;
  var d = Math.floor(t / 1000 / 60 / 60 / 24),
    h = Math.floor(t / 1000 / 60 / 60 % 24),
    m = Math.floor(t / 1000 / 60 % 60),
    s = Math.floor(t / 1000 % 60);
  if (d > 0) {
    return d + '天前'
  } else if (h > 0) {
    return h + '小时前'
  } else if (m > 0) {
    return m + '分钟前'
  } else if (s > 0) {
    return s + '秒前'
  }
});
Vue.filter("type", function(val) {   //全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
  if(val == 'share') {
    return '分享';
  }
  if(val == 'good') {
    return '精华'
  }
  if(val == 'ask') {
    return '问答'
  }
  if(val == 'job') {
    return '招聘'
  }
});
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  body {
    width: 100%;
    height: 100%;
  }
  input {
    outline: none;
  }
</style>
