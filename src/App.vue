<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

button {
  padding-left: 2px;
  padding-right: 2px;
  text-align: center;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100vm;
  padding: 60px 80px;
}
</style>
