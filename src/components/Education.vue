<template>
  <div class="content-component">
    <h1>Educación</h1>

    <h3>Formación Académica:</h3>

    <p>• Ciclo Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)<br>
      &nbsp;&nbsp;• Alfonso X el Sabio, Murcia</p>

    <p>• EGB<br>
      &nbsp;&nbsp;• Nuestra Senora del Carmen, Murcia</p>

    <h3>Certificaciones Relevantes:</h3>

    <p>• Certificado en Arquitectura y operativa de ciberseguridad (30 horas) - Fundación Telefónica</p>
    <p>• Certificado en Programación en Python (12 horas) - SEF</p>
    <p>• Certificado en Inglés (Nivel 1 y 2) (35 horas cada uno) - SEF</p>
    <p>• Certificado en Programación en Java (35 horas) - SEF</p>
    <p>• Certificado en Vue.js 3 (41 horas) - Udemy</p>

    <h3>Certificados en Spring Framework:</h3>

    <p>• Certificados en Microservicios con Spring Boot, Cloud y Docker (18 horas) - Udemy</p>
    <p>• Spring Core (5 horas) - VIEWNEXT</p>
    <p>• Spring Data (4 horas) - VIEWNEXT</p>
    <p>• Spring Boot (4 horas) - VIEWNEXT</p>
    <p>• Spring Boot Starters (12 horas) - VIEWNEXT</p>
    <img :src="portadaSvg" alt="Decoración de fondo" class="decoration-svg" />

  </div>
</template>

<script>
import portadaSvg from '@/assets/portada.svg';

export default {
  name: 'Education',
  data() {
    // Tienes que añadir esta función data
    return {
      portadaSvg: portadaSvg,
    };
  },
};
</script>

<style scoped>
.content-component {
  width: 98%;
  max-height: 98vh; /* altura máxima relativa a la ventana */
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.64);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgb(127, 140, 141);
  text-align: left;
  position: relative;
  overflow-y: auto; /* permite scroll vertical */
}


h1 {
  color: #34495e;
  text-align: center;
  margin-bottom: 15px;
  font-size: 2rem;
  margin-top: 15px;
  font-family: 'Quicksand', sans-serif;
}

/* === Estilos añadidos desde Skills.vue === */
h3 {
  color: #2c3e50;
  margin-top: 25px;
  font-size: 1.6rem;
  font-family: 'Quicksand', sans-serif;
}

p {
  color: #34495e;
  font-size: 1.3rem;
  line-height: 1.5;
  margin-bottom: 12px;
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

/* La regla 'pre' anterior ya no es necesaria */
</style>