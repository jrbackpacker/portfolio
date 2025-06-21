<template>
  <div id="app">
    <General />
  </div>
</template>

<script>
import General from './views/General.vue';
export default { name: 'App', components: { General } };
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');
html, body, #app { margin:0; padding:0; height:100%; width:100%; }
#app {
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  display: flex;
}
</style>
