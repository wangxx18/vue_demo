<template>
  <div class="pagination" current_page="1">
    <!--<ul v-for="item in pagelist">-->
      <!--<li>{{item}}</li>-->
    <!--</ul>-->
    <ul>
      <li></li>
      <li class="disabled"><a>«</a></li>
      <li class="disabled active"><a>1</a></li>
      <li><a @click="toParent()">2</a></li>
      <li><a href="/?tab=ask&amp;page=3">3</a></li>
      <li><a href="/?tab=ask&amp;page=4">4</a></li>
      <li><a href="/?tab=ask&amp;page=5">5</a></li>
      <li><a>...</a></li>
      <li><a href="/?tab=ask&amp;page=64">»</a></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "Page",
        data:function(){
          return {
            pagelist:[1,2,3,4,5],
            pData:""

          }
        },
        methods:{
          toParent:function(){
            console.log(11111);
            this.$emit('child-c',this.pData);
          }
        }

    }
</script>

<style scoped>

</style>
