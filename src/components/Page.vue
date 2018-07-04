<template>
  <div class="pagination" current_page="1">
    <!--<ul v-for="item in pagelist">-->
      <!--<li>{{item}}</li>-->
    <!--</ul>-->
    <ul>
      
      <li @click="toParent()" class="disabled"><a>«</a></li>
      <li  v-for="(item,index) in pagelist" @click="toParent(index+1)" :class="{'active':index+1==choosePage}"><a>{{item}}</a></li>
      <li @click="toParent()"><a href="/?tab=ask&amp;page=64">»</a></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "Page",
        data:function(){
          return {
            pagelist:[1,2,3,4,5],
            pData:"3",
            choosePage:1,
            
          }
        },
        methods:{
          toParent:function(num){
            this.choosePage = num;
            this.$emit('child-c',num);
          }
        }

    }
</script>

<style scoped>
  li{
    cursor: pointer;
  }
</style>
