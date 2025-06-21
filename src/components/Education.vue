<template>
  <div class="content-component">
    <h1>Educación</h1>
    <p>Mi formación académica y certificaciones.</p>
    <img :src="portadaSvg" alt="Decoración de fondo" class="decoration-svg" />
  </div>
</template>

<script>
import portadaSvg from '@/assets/portada.svg';
export default {
  name: 'Education',data() {
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
  position: relative;
  overflow: hidden;
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
  line-height: 1.6;
}
.decoration-svg {
  position: absolute;
  bottom: -20px;
  right: -20px;
  width: 300px;
  height: auto;
  opacity: 0.2;
  pointer-events: none;
  z-index: 0;
}
</style>