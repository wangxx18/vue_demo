<template>
  <div>
    <div>
      <list></list>
    </div>
    <div></div>
  </div>
</template>

<script>
  import List from "../components/List.vue"
  export default {
    components:{List},
    name: 'app'
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
</style>
