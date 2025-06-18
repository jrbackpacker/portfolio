<template>
  <div class="content-component">
    <h1>Sobre mí</h1>
    <p class="name">Jesús</p>
    <p class="surname">Romero Pérez</p>
    <p>Altorreal, Molina de Segura (Murcia).</p>
    <p><br>Soy Técnico superior en Desarrollo de Aplicaciones Multiplataforma, con experiencia práctica en desarrollo full-stack utilizando tecnologías como Spring Boot, Vue.js, Android, Odoo y bases de datos (MySQL, PostgreSQL, MongoDB y DB4O).</p>
    <p>Me apasiona crear soluciones funcionales y bien estructuradas, tanto en backend como en frontend, y disfruto del aprendizaje constante y el trabajo en equipo.</p>
    <p>Actualmente busco oportunidades profesionales donde pueda seguir creciendo, aportar mis conocimientos y enfrentar nuevos retos como desarrollador.</p>
    <div class="contact-info">
      <p class="contact-item">📞 626087141</p>
      <p class="contact-item">📧 jrbackpacker@hotmail.com</p>
    </div>
    <img :src="portadaSvg" alt="Decoración de fondo" class="decoration-svg" />
  </div>
</template>

<script>

import portadaSvg from '@/assets/portada.svg'; 

export default {
  name: 'AboutMe',
  data() {
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

/* Estilos para el nombre */
.name {
  color: #34495e;
  margin-top: 5px;
  margin-bottom: 1px;
  font-size: 3rem;
  line-height: 1.6;
  font-palette: dark;
  font-weight: 700;
  font-family: 'Quicksand', sans-serif;
}

.surname {
  color: rgba(255, 255, 255, 0.64);
  margin-top: 1px;
  margin-bottom: 15px;
  font-size: 2rem;
  line-height: 1.6;
  font-weight: 700;
  font-family: 'Quicksand', sans-serif;
}

.contact-info {
  text-align: center;
  margin-top: 60px;
  font-family: 'Quicksand', sans-serif;
}

.contact-item {
  margin: 8px 0;
  font-size: 1.4rem;
  color: #34495e;
}
p {
  color: #34495e;
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 1.3rem;
  line-height: 1.3;
  font-family: 'Quicksand', sans-serif;
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