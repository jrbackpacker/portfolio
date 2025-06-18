<template>
  <div class="content-component">
    <h1>Experiencia</h1>
    <img :src="portadaSvg" alt="Decoración de fondo" class="decoration-svg" />
  </div>
</template>

<script>
import portadaSvg from '@/assets/portada.svg';
export default {
  name: 'Experience',data() {
    return {
      portadaSvg: portadaSvg, 
    };
  },
};
</script>

<style scoped>
.content-component {
  width: 98%;
  height: 98%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.64);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgb(127, 140, 141);
  text-align: left;
  position: relative; /* ¡IMPORTANTE! Para posicionar el SVG de forma absoluta */
  overflow: hidden; /* Oculta cualquier parte del SVG que se desborde */
}
h1 {
  color: #34495e;
  text-align: center;
  margin-bottom: 15px;
  font-size: 2rem;
  margin-top: 15px;
  font-family: 'Quicksand', sans-serif;
}
p {
  color: #555;
  font-size: 1.7rem;
  line-height: 1.3;
}
/* --- Estilos para el SVG de decoración --- */
.decoration-svg {
  position: absolute; /* Posicionamiento absoluto dentro de .content-component */
  bottom: -20px; /* Ajusta la posición desde la parte inferior, puedes usar valores negativos */
  right: -20px;  /* Ajusta la posición desde la derecha, puedes usar valores negativos */
  width: 300px;  /* Tamaño del SVG, ajusta según necesites */
  height: auto;  /* Mantiene la proporción del SVG */
  opacity: 0.2;  /* Lo hace semitransparente, como decoración */
  pointer-events: none; /* Asegura que no interfiera con clics o eventos */
  z-index: 0;    /* Asegura que esté por debajo del contenido principal de texto */
}
</style>