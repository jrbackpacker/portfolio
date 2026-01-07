<template>
  <div class="content-component">
    <h1>Sobre mí</h1>
    <p class="name">Jesús</p>
    <p class="surname">Romero Pérez</p>
    <p>Altorreal, Molina de Segura (Murcia).</p>

    <p>
      Desarrollador Full Stack con formación en el desarrollo de software multiplataforma y especialización en los ecosistemas de Spring Boot y Vue.js . Mi transición al desarrollo de software está impulsada por una pasión por la resolución lógica de problemas y la construcción de soluciones eficientes.
    </p>
    <p>
      Aporto una sólida trayectoria profesional de más de 15 años en sectores de alta exigencia. Mi experiencia como Jefe de Equipo (gestionando seguridad privada para clientes como Amazon y ADIF) y como Operador de Planta Externa me ha permitido desarrollar habilidades clave como el liderazgo, la resolución de incidencias críticas bajo presión y un sólido pensamiento analítico.
    </p>
    <p>
      Hoy, aplico esta misma disciplina y compromiso con la calidad para crear aplicaciones robustas, seguras y escalables. Soy una persona curiosa, receptiva al feedback y siempre lista para aprender y desplegar nuevas tecnologías.
    </p>
    <p>

    </p>
    <div class="contact-info">
      <p class="contact-item">📞 626087141</p>
      <p class="contact-item">
        📧 <a href="mailto:jrbackpacker@hotmail.es" class="email-link">jrbackpacker@hotmail.com</a>
      </p>
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
  max-height: 98vh;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.64);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgb(127, 140, 141);
  text-align: left;
  position: relative;
  overflow: auto;
}

h1 {
  color: #34495e;
  text-align: center;
  margin-bottom: 15px;
  font-size: 2rem;
  margin-top: 15px;
  font-family: 'Quicksand', sans-serif;
}


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

.email-link {
  color: #2980b9;
  text-decoration: underline;
  font-weight: 500;
}

.email-link:hover {
  color: #1c6690;
  text-decoration: none;
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