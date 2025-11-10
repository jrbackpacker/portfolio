<template>
  <div class="content-component">
    <h1>Experiencia</h1>

    <h3>ViewNext - Murcia (6 meses)</h3>
    <p>• Participacion en proyectos Full Stack, trabajando con tecnologías como Spring Boot, Vue.js, Node.js, Docker y MySQL.</p>

    <h3>Operario de Producción Rheinmetall - Jabalí Nuevo (1 año) </h3>
    <p>• Elaboracion de productos químicos y explosivos.</p>

    <h3>Jefe de Equipo de Seguridad Prosegur - Murcia (4 años) </h3>
    <p>• Gestion de equipos de seguridad y servicios en Amazon, ADIF y Primark.</p>

    <h3>Vigilante de Seguridad Vigilante - Alcantarilla (8 años)</h3>
    <p>• Servicios de vigilancia, acuda y CRA.</p>

    <h3>Operador de Planta Externa Retemur S. Coop. - Alcantarilla (4 años)</h3>
    <p>• Mantenimiento e instalaciones de redes de telecomunicaciones para Telefonica y Ono.</p>
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
  max-height: 98vh; /* Ajustado para consistencia */
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.64);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgb(127, 140, 141);
  text-align: left;
  position: relative; /* ¡IMPORTANTE! Para posicionar el SVG de forma absoluta */
  overflow-y: auto; /* Ajustado para permitir scroll */
}
h1 {
  color: #34495e;
  text-align: center;
  margin-bottom: 15px;
  font-size: 2rem;
  margin-top: 15px;
  font-family: 'Quicksand', sans-serif;
  position: relative; /* Añadido para stacking */
  z-index: 1; /* Añadido para stacking */
}

/* === Estilos añadidos/modificados para consistencia === */
h3 {
  color: #2c3e50;
  margin-top: 25px;
  font-size: 1.6rem;
  font-family: 'Quicksand', sans-serif;
  position: relative; /* Añadido para stacking */
  z-index: 1; /* Asegura que esté sobre el SVG */
}

p {
  color: #34495e;
  font-size: 1.3rem;
  line-height: 1.5;
  margin-bottom: 12px;
  font-family: 'Quicksand', sans-serif;
  position: relative; /* Añadido para stacking */
  z-index: 1; /* Asegura que esté sobre el SVG */
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