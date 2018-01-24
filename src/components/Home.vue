<template>
  <div id="main">
    <div  class="home-page">
      <div id="sidebar">

        <div class="panel" v-show="!userLogin">
          <div class="inner">
            <p>CNode：Node.js专业中文社区</p>
            <div>
              您可以
              <!--<a href="/signin">登录</a>-->
              <router-link :to="{ name: 'Login',params: { } }" >
                登录
              </router-link>
              或
              <a href="/signup">注册</a>
              , 也可以
              <a href="/auth/github">
          <span class="span-info">
            通过 GitHub 登录
          </span>
              </a>
            </div>
          </div>
        </div>


        <div class="panel" v-show="userLogin">
          <div class="header">
            <span class="col_fade">个人信息</span>
          </div>
          <div class="inner">
            <div class="user_card">
              <div>
                <a class="user_avatar" href="/user/wangxx321">
                  <img :src="user?user.avatar_url:''" :title="user?user.loginname:''">
                </a>
                <span class="user_name"><a class="dark" href="/user/wangxx321">{{user?user.loginname:''}}</a></span>
                <div class="board clearfix">
                  <div class="floor">
                    <span class="big">积分: 5 </span>
                  </div>
                </div>
                <div class="space clearfix"></div>
                <span class="signature">
                  “
                      这家伙很懒，什么个性签名都没有留下。
                  ”
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="panel" v-show="userLogin">
          <div class="inner">
            <a href="/topic/create" id="create_topic_btn">
              <span class="span-success">发布话题</span>
            </a>
          </div>
        </div>

        <div class="panel">
          <div class="header">
            <span class="col_fade">无人回复的话题</span>
          </div>
          <div class="inner">

            <ul class="unstyled">
              <li>
                <div><a class="dark topic_title" href="/topic/5a5dbfa6afa0a121784a8c70" title="基于 React 和 antd 的 cnode web 客户端">基于 React 和 antd 的 cnode web 客户端</a>
                </div>
              </li>
              <li>
                <div><a class="dark topic_title" href="/topic/5a5db8c7a3692d014f4f14e2" title="有用thinkjs2做后台的吗">有用thinkjs2做后台的吗</a>
                </div>
              </li>
              <li>
                <div><a class="dark topic_title" href="/topic/5a5db4c09d371d4a059eeb22" title="Material Design 设计风格的博客上线了">Material Design 设计风格的博客上线了</a>
                </div>
              </li>
              <li>
                <div><a class="dark topic_title" href="/topic/5a5dae98afa0a121784a8c60" title="Nuxt+Express+Mysql整合实践写的一个博客平台，对于vue服务端渲染感兴趣的可以参考">Nuxt+Express+Mysql整合实践写的一个博客平台，对于vue服务端渲染感兴趣的可以参考</a>
                </div>
              </li>
              <li>
                <div><a class="dark topic_title" href="/topic/5a5d6b67afa0a121784a8c29" title="node源码_http_common.js 中是如何处理请求体的？">node源码_http_common.js 中是如何处理请求体的？</a>
                </div>
              </li>
            </ul>
          </div>
        </div>



        <div class="panel">
          <div class="header">
            <span class="col_fade">积分榜</span>
            &nbsp;
            <a class="dark" href="/users/top100">TOP 100 &gt;&gt;</a>
          </div>
          <div class="inner">
            <ol>
              <li>
                <span class="top_score">20725</span>
                <span class="user_name"><a href="/user/i5ting">i5ting</a></span>
              </li>
              <li>
                <span class="top_score">14770</span>
                <span class="user_name"><a href="/user/alsotang">alsotang</a></span>
              </li>
              <li>
                <span class="top_score">9330</span>
                <span class="user_name"><a href="/user/leapon">leapon</a></span>
              </li>
              <li>
                <span class="top_score">8720</span>
                <span class="user_name"><a href="/user/jiyinyiyong">jiyinyiyong</a></span>
              </li>
              <li>
                <span class="top_score">6800</span>
                <span class="user_name"><a href="/user/yakczh">yakczh</a></span>
              </li>
              <li>
                <span class="top_score">6060</span>
                <span class="user_name"><a href="/user/imhered">imhered</a></span>
              </li>
              <li>
                <span class="top_score">5940</span>
                <span class="user_name"><a href="/user/DevinXian">DevinXian</a></span>
              </li>
              <li>
                <span class="top_score">5295</span>
                <span class="user_name"><a href="/user/magicdawn">magicdawn</a></span>
              </li>
              <li>
                <span class="top_score">4740</span>
                <span class="user_name"><a href="/user/captainblue2013">captainblue2013</a></span>
              </li>
              <li>
                <span class="top_score">4495</span>
                <span class="user_name"><a href="/user/fengmk2">fengmk2</a></span>
              </li>
            </ol>
          </div>
        </div>


        <div class="panel">
          <div class="header">
            <span class="col_fade">友情社区</span>
          </div>
          <div class="inner">
            <ol class="friendship-community">
              <li>
                <a href="https://ruby-china.org/" target="_blank">
                  <img src="//o4j806krb.qnssl.com/public/images/ruby-china-20150529.png">
                </a>
              </li>
              <div class="sep10"></div>
              <li>
                <a href="http://golangtc.com/" target="_blank">
                  <img src="//o4j806krb.qnssl.com/public/images/golangtc-logo.png">
                </a>
              </li>
              <div class="sep10"></div>
              <li>
                <a href="http://phphub.org/" target="_blank">
                  <img src="//o4j806krb.qnssl.com/public/images/phphub-logo.png">
                </a>
              </li>
              <div class="sep10"></div>
              <li>
                <a href="https://testerhome.com/" target="_blank">
                  <img src="//dn-cnode.qbox.me/FjLUc7IJ2--DqS706etPQ1EGajxK">
                </a>
              </li>
            </ol>
          </div>
        </div>
        <div class="panel">
          <div class="header">
            <span class="col_fade">客户端二维码</span>
          </div>
          <div class="inner cnode-app-download">
            <img width="200" src="//dn-cnode.qbox.me/FtG0YVgQ6iginiLpf9W4_ShjiLfU">
            <br>
            <a href="https://github.com/soliury/noder-react-native" target="_blank">客户端源码地址</a>
          </div>
        </div>
      </div>
      <div id="content" >
        <div class="panel">
          <div class="header">
            <a v-for="(item,index) in list" class="topic-tab"
                  :class="{'current-tab':index===(currentIndex)}" @click="topic(index)">{{item.text}}</a>
          </div>
          <div class="inner no-padding">
            <list v-bind:tab="tab"></list>
            <page v-on:child-c="childData"></page>
          </div>

        </div>
      </div>

    </div>
    <div></div>
  </div>
</template>
<script>
  import List from "../components/List.vue"
  import Page from "../components/Page.vue"
  export default {
    data:function(){
      return {
        currentIndex:0,
        list:[
          {text:'全部',tab:'all'},
          {text:'精华',tab:'good'},
          {text:'分享',tab:'share'},
          {text:'问答',tab:'ask'},
          {text:'招聘',tab:'job'},
          {text:'客户端测试',tab:'dev'}

        ],
        tab:'',
        pData:'',
        msg:'',
        user:{},
        userLogin:false,
      }
    },
    components:{List,Page},
    name: 'app',
    props:['loginuser'],
    methods:{
      topic:function(val){
        this.currentIndex = val;
        this.tab = this.list[val].tab;
        console.log(this.tab);
        console.log(this.currentIndex);
      },
      childData:function(p){
        console.log(p);
      },
    },
    mounted:function(){
      console.log("传过来数据"+this.loginuser);

      if(this.$route.params.user|| localStorage.getItem('user')){
        console.log('接收用户登录信息');
        console.log(localStorage.getItem('user'));
        this.user = JSON.parse(localStorage.getItem('user'));
        this.userLogin = true;
      }
    },
  }

</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  body {
    background-color: #EDEEF0;
    width: 100%;
    height: 100%;
  }
  input {
    outline: none;
  }
  .home-page{

  }

</style>
