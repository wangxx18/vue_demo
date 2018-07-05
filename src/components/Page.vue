<template>
  <div class="pagination" current_page="1">
    <!--<ul v-for="item in pagelist">-->
      <!--<li>{{item}}</li>-->
    <!--</ul>-->
    <ul>
      
      <li @click="toParent(choosePage-1)" :class="{'disabled':choosePage==1}"><a>«</a></li>
      <li  v-for="(item,index) in pagelist" @click="toParent(index+1)" :class="{'active':index+1==choosePage}"><a>{{item}}</a></li>
      <li @click="toParent(choosePage+1)" :class="{'disabled':choosePage==pagelist.length}"><a >»</a></li>
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
            console.log(num);
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
