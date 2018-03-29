<template>
  <div>
    <div id="topic_list" v-for ="item in list">
      <div class="cell">
        <a class="user_avatar pull-left" href="/user/JChehe">
          <img :src="item.author.avatar_url" :title="item.author.loginname">
        </a>
        <span class="reply_count pull-left">
          <span class="count_of_replies" title="回复数">{{item.reply_count}}</span>
          <span class="count_seperator">/</span>
          <span class="count_of_visits" title="点击数">{{item.visit_count}}</span>
          </span>
        <a class="last_time pull-right" :href="'/details/'+item.id">
          <img class="user_small_avatar" src="https://avatars1.githubusercontent.com/u/3961388?v=4&amp;s=120">
          <span class="last_active_time">{{item.last_reply_at | lastTime}}</span>
        </a>
        <div class="topic_title_wrapper">
          <span class="put_top" v-show=" item.top">置顶</span>
          <span class="put_top" v-show="item.good">精华</span>
          <span class="topiclist-tab" v-show="!item.top&&!item.good">{{ item.tab | type}}</span>
          <!--<a class="topic_title" :href="'#/details/'+item.id" v-bind:title="item.title">-->
            <!--{{item.title}}-->
          <!--</a>-->
          <router-link :to="{ name: 'Details',params: { id: item.id } }" class="topic_title" >
            {{item.title}}
          </router-link>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    data:function(){
      return {
        list:[],

      }
    },
    props:['tab'],
    methods:{
      getData:function(){
          var url = 'https://cnodejs.org/api/v1/topics/?tab='+this.tab;
          this.$http.get(url).then(function(rep){
//          console.log(this.tab);
          console.log(rep);
          this.list = rep.body.data
        })
      }
    },
    created: function () {
      this.getData();
    },
    watch:{
      'tab':function(newval,oldval){
        this.tab = newval;
        this.getData();
        console.log(newval);
        console.log(oldval);
      }
    },
    filters: {
      lastTime: function (val) {
        var date = new Date(val);
        var t = Date.now() - date;
        var d=Math.floor(t/1000/60/60/24),
          h=Math.floor(t/1000/60/60%24),
          m=Math.floor(t/1000/60%60),
          s=Math.floor(t/1000%60);
        if( d > 0 ) {
          return d + '天前'
        }else if( h > 0){
          return h + '小时前'
        }else if( m > 0) {
          return m + '分钟前'
        }else if( s > 0) {
          return s + '秒前'
        }
      },
      type: function (val) {
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
      }

    },
  }
</script>
<style>
  @import "../assets/css/index.css";
</style>
