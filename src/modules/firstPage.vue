<template>
  <div class="main">
    <figure class="logo"></figure>
  </div>

</template>

<script>
export default {
  name: 'first',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
      go2Second(){
          this.$router.push({name:'second'})
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import './first.less';
</style>
