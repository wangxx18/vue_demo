<template>
  <section>
    <div id="main">
      <div id="sidebar">
        <div class="panel">
          <div class="header">
            <span class="col_fade">关于</span>
          </div>
          <div class="inner">
            <p>CNode：Node.js专业中文社区</p>
            <p>在这里你可以：</p>
            <ul>
              <li>向别人提出你遇到的问题</li>
              <li>帮助遇到问题的人</li>
              <li>分享自己的知识</li>
              <li>和其它人一起进步</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="content">
        <div class="panel">
          <div class="header">
            <ul class="breadcrumb">
              <li><a href="/">主页</a><span class="divider">/</span></li>
              <li class="active">登录</li>
            </ul>
          </div>
          <div class="inner">

            <form id="signin_form" class="form-horizontal" action="/signin" method="post">
              <div class="control-group">
                <label class="control-label" for="name">用户名</label>

                <div class="controls">
                  <input v-model="loginname" class="input-xlarge" id="name" name="name" size="30" type="text">
                </div>
              </div>
              <div class="control-group">
                <label class="control-label" for="pass">密码</label>

                <div class="controls">
                  <input v-model="password" class="input-xlarge" id="pass" name="pass" size="30" type="password">
                </div>
              </div>
              <input type="hidden" name="_csrf" value="Bbr8mQqZ-D8SfiZsnoNMr-oJeY8mRIs09ulA">

              <div class="form-actions">
                <input @click="login()" type="button" class="span-primary" value="登录">
                <a href="/auth/github">
            <span class="span-info">
              通过 GitHub 登录
            </span>
                </a>
                <a id="forgot_password" href="/search_pass">忘记密码了?</a>
              </div>
            </form>
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
        loginname:'',
        password:'',
        user:{}
      }
    },
    methods:{
      login:function(){
        var url = this.Global.url+'/accesstoken';
        this.$http.post(url,{accesstoken:this.Global.accessToken}).then(function(rep){
//          console.log(rep);
          this.user.loginname = rep.body.loginname;
          this.user.id = rep.body.id;
          this.user.avatar_url = rep.body.avatar_url;
          this.$router.push({name:'Home',params:{user:this.user}});
          localStorage.setItem('user',JSON.stringify(this.user));
        });


      }
    }

  }
</script>
<style scoped>
  @import "../assets/css/index.css";
</style>
