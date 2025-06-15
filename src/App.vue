<template>
  <div id="app">
    <General />
  </div>
</template>

<script>
import General from './views/General.vue'; // Ajusta la ruta si General.vue está en otro lugar

export default {
  name: 'App',
  components: {
    General,
  },
};
</script>

<style>
/* Estilos globales básicos */
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden; /* Evita scrolls no deseados en la página principal */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex; /* Usamos flexbox para que General ocupe todo el espacio */
  height: 100vh; /* Ocupa el 100% del alto de la ventana */
  width: 100vw; /* Asegura que ocupe el 100% del ancho de la ventana */
  margin: 0;
  padding: 0;
}
</style>