<template>
  <div id="app">
    <img src="./assets/logo.png">
    // </HelloWorld>
    <router-view></router-view>
    <h1>word testing</h1>
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created (){
    this.$http.get('https://randomuser.me/api/')
    .then((response)=> { 
      console.log(response)
     })
  }
}
</script>

<style lang="scss"> 
@import "~bootstrap/scss/bootstrap";
</style>
