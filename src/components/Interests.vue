<template>
  <div class="content-component">
    <h1>Intereses</h1>
    <div class="carousel-container">
      <div class="carousel-track" :style="{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${interests.length * 100}%` // Ajuste clave aquí: ancho total del track
        }">
        <div class="carousel-slide" v-for="(item, index) in interests" :key="index">
          <div class="image-wrapper">
            <img :src="item.image" :alt="item.alt" class="carousel-image"/>
          </div>
        </div>
      </div>

      <div class="carousel-navigation">
        <button @click="prevSlide" class="nav-button">‹</button>
        <button @click="nextSlide" class="nav-button">›</button>
      </div>

      <div class="carousel-description">
        {{ interests[currentIndex].description }}
      </div>
    </div>
  </div>
</template>

<script>

import trailImg from '@/assets/trail.png';
import chefImg from '@/assets/profile.jpg';
import escaladaHieloImg from '@/assets/profile.jpg';
import ciclismoMontanaImg from '@/assets/profile.jpg';
import harukiImg from '@/assets/haruki.png';


export default {
  name: 'Interests',
  data() {
    return {
      currentIndex: 0,
      interests: [
        {
          image: trailImg,
          description: 'Cuando no estoy trabajando paseo al aire libre, disfrutando del entorno y desconectando un poco para volver con más energía y claridad.'
        },
        {
          image: harukiImg,
          description: 'Fan de la cultura japonesa, me intereso por casi cualquier cosa relacionada'
        },

        {
          image: chefImg,
          description: ''
        },
        {
          image: escaladaHieloImg,
          description: ''
        },
        {
          image: ciclismoMontanaImg,
          description: ''
        },

      ],
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.interests.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.interests.length) % this.interests.length;
    }
  }
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
  display: flex;
  flex-direction: column;
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
  font-size: 1.1rem;
  line-height: 1.6;
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
  margin-bottom: 20px;
  width: 80%;
  text-align: center;
}

/* --- ESTILOS DEL CARRUSEL --- */
.carousel-container {
  width: 600px; /* Ancho fijo del carrusel */
  height: 300px; /* Alto fijo del carrusel */
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  background-color: transparent;
  box-sizing: border-box;
}

.carousel-track {
  display: flex;
  height: calc(100% - 80px);
  transition: transform 1s ease-in-out;
  flex-shrink: 0;
  flex-grow: 0;
  border-radius: 8px;
  align-items: center;
}

.carousel-slide {
  flex: 0 0 100%; /* No crece, no se encoge, base de 100% del contenedor flex (carousel-container) */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: transparent;
}

.image-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;
  background-color: transparent;

}

.carousel-image {
  width: 70%;
  height: 70%;
  border-radius: 8px;
  object-fit: contain;
}

.carousel-navigation {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  padding: 0 10px;
  z-index: 10;
}

.nav-button {
  background-color: transparent;
  color: #34495e;
  border: none;
  padding: 10px 15px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 4rem;
  line-height: 1;
  transition: background-color 0.3s ease;
}

.carousel-description {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: transparent;
  color: #34495e;
  padding: 15px;
  text-align: center;
  font-size: 1.5em;
  font-family: 'Quicksand', sans-serif;
  font-weight: 300;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
</style>