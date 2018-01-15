<template>
  <section>
    <div id="content">
      <div class="panel">
        <div class="header topic_header">
      <span class="topic_full_title">
        <span class="put_top" v-show=" list.top">置顶</span>
        {{list.title}}
      </span>
          <div class="changes">
        <span>
          发布于 {{list.create_at | lastTime}}
        </span>
            <span>
          作者 {{user}}
        </span>
            <span>
          {{list.visit_count}} 次浏览
        </span>

            <span>
            最后一次编辑是 {{list.last_reply_at | lastTime}}
          </span>
            <span> 来自 {{list.tab | type}}</span>
          </div>
        </div>
        <div class="inner topic">
          <div class="topic_content" v-html="list.content">
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
<script>
  export default {
    data:function(){
      return {
        list:{},
        user:''
      }
    },
    methods:{
      getData:function(){
        var url = 'https://cnodejs.org/api/v1/topic/'+this.$route.params.id;
        this.$http.get(url).then(function(rep){
          this.list = rep.body.data;
          this.user = rep.body.data.author.loginname
        })
      }
    },
    mounted:function(){
      this.getData();
    }
  }
</script>
<style>
@import "../assets/css/index.css";
</style>
