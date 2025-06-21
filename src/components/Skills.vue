<template>
  <div class="content-component">
    <h1>Habilidades</h1>
    <p><br><br>Manejo bases de datos como MySQL, PostgreSQL, MariaDB, SQL Server y DB4O.</p>
    <p><br>He desarrollado Apis Rest Full con SpringBoot 3, implementando JWT, JPA, DTOs, haciendolas seguras y escalables.</p>
    <p><br>En el frontend, mi experiencia abarca Vue.js, desarrollo nativo Android, JavaScript,
      y Node.js, apoyándome en Vite para el empaquetado.</p>
    <p><br>En cuanto a despliegue y DevOps, tengo experiencia con Docker para la contenerización de aplicaciones.
      Además, despliego en plataformas como Railway, Render, Vercel, Firebase y Google Play Console.</p>
    <p><br>Me gusta resolver problemas con pensamiento lógico y mantener la calma bajo presión.
      Soy curioso, receptivo al feedback y me comprometo con la calidad en cada proyecto.</p>
    <p>
    <br>
    He creado este portfolio como aplicación con Vue.js, con transiciones suaves y CSS responsivo.
    Lo he desplegado en Vercel y controlado las versiones con GitHub.
    (<a href="https://github.com/jrbackpacker/portfolio" target="_blank" rel="noopener noreferrer">
    github.com/jrbackpacker/portfolio
  </a>)
  </p>

    <div class="tech-carousel-container">
      <div class="tech-carousel-track">
        <div
            class="tech-carousel-slide"
            v-for="(tech, index) in technologies.concat(technologies, technologies)"
            :key="index">
          <img :src="tech.icon" :alt="tech.name" class="tech-icon" />
          <p class="tech-name">{{ tech.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import html5Icon from '@/assets/icons/html5.svg';
import javaIcon from '@/assets/icons/java-4-logo-svgrepo-com.svg';
import jsIcon from '@/assets/icons/js-badge-svgrepo-com.svg';
import kotlinIcon from '@/assets/icons/kotlin-svgrepo-com.svg';
import androidStudioIcon from '@/assets/icons/logo-google-android-studio-svgrepo-com.svg';
import mysqlIcon from '@/assets/icons/mysql-logo-svgrepo-com.svg';
import nodejsIcon from '@/assets/icons/nodejs-logo-svgrepo-com.svg';
import postmanIcon from '@/assets/icons/postman-svgrepo-com.svg';
import springIcon from '@/assets/icons/spring-svgrepo-com.svg';
import vercelIcon from '@/assets/icons/vercel-svgrepo-com.svg';
import vscodeIcon from '@/assets/icons/visual-studio-code-svgrepo-com.svg';
import viteIcon from '@/assets/icons/vitejs-svgrepo-com.svg';
import vueIcon from '@/assets/icons/vue-9-logo-svgrepo-com.svg';
import xmlIcon from '@/assets/icons/xml-document-svgrepo-com.svg';
import dockerIcon from '@/assets/icons/docker.svg';
import firebaseIcon from '@/assets/icons/firebase-svgrepo-com.svg';
import githubIcon from '@/assets/icons/github.svg';
import googlePlayIcon from '@/assets/icons/google-play-store.svg';
import postgreIcon from '@/assets/icons/postgresql-svgrepo-com.svg';

export default {
  name: 'TechnologiesCarousel',
  data() {
    return {
      technologies: [
        { name: 'MySQL', icon: mysqlIcon },
        { name: 'Android Studio', icon: androidStudioIcon },
        { name: 'VS Code', icon: vscodeIcon },
        { name: 'Postman', icon: postmanIcon },
        { name: 'Docker', icon: dockerIcon },
        { name: 'Vercel', icon: vercelIcon },
        { name: 'Firebase', icon: firebaseIcon },
        { name: 'Google Play', icon: googlePlayIcon },
        { name: 'GitHub', icon: githubIcon },
        { name: 'Vue.js', icon: vueIcon },
        { name: 'JavaScript', icon: jsIcon },
        { name: 'Node.js', icon: nodejsIcon },
        { name: 'Vite', icon: viteIcon },
        { name: 'HTML5', icon: html5Icon },
        { name: 'Java', icon: javaIcon },
        { name: 'Kotlin', icon: kotlinIcon },
        { name: 'Spring', icon: springIcon },
        { name: 'XML', icon: xmlIcon },
        { name: 'Postgre', icon: postgreIcon },
      ],
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
  align-items: center;
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
  color: #34495e;
  margin-top: 1px; /* Ajusta según la separación que quieras de los nombres */
  margin-bottom: 1px;
  font-size: 1.3rem; /* Reducido para que el texto sea más legible que el nombre/apellido */
  line-height: 1.1;
  font-family: 'Quicksand', sans-serif;
}


.tech-carousel-container {
  width: 100%;
  max-width: 900px;
  height: 100px; /* Altura reducida */
  overflow: hidden;
  position: relative;
  margin-top: 60px;
  border-radius: 10px;
  background-color: #f0f0f0;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;     /* Centrado vertical */
  justify-content: center; /* Centrado horizontal */
  margin-left: auto;
  margin-right: auto;      /* Centrado horizontal del carrusel */
}


.tech-carousel-track {
  display: flex;
  width: max-content;
  animation: scroll-carousel 40s linear infinite;
}

@keyframes scroll-carousel {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-33.333%);
  }
}

.tech-carousel-slide {
  flex-shrink: 0;
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
}

.tech-icon {
  max-width: 50px;
  max-height: 50px;
  object-fit: contain;
  margin-bottom: 5px;
}

.tech-name {
  font-size: 1.2em;
  color: #333;
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  text-align: center;
}
</style>
