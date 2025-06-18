<template>
  <div id="app">
    <General />
  </div>
</template>

<script>
import General from './views/General.vue';

export default {
  name: 'App',
  components: {
    General,
  },
};
</script>

<style>
/* --- Importación de Google Fonts: Quicksand --- */
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');

/* Estilos globales básicos */
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#app {
  /* Aplicamos Quicksand como fuente principal para toda la aplicación */
  font-family: 'Quicksand', sans-serif;
  /* Puedes ajustar el peso de la fuente por defecto aquí, por ejemplo: */
  font-weight: 400; /* Un peso medio, puedes cambiarlo entre 300 y 700 */

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
}
</style>