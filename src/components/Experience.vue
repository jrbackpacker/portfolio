<template>
  <div class="content-component">
    <h1>Experiencia</h1>

    <h3>👨‍💻 ViewNext - Desarrollador Full Stack - Murcia (6 meses)</h3>
    <p>• Desarrollo integral de soluciones web, construyendo APIs robustas con Spring Boot/Node.js
      y creando interfaces reactivas con Vue.js. Gestión de entornos de despliegue con Docker y
      optimización de bases de datos MySQL para asegurar el rendimiento..</p>

    <h3>🏭 Rheinmetall - Operario de Producción - Jabalí Nuevo (1 año) </h3>
    <p>• Responsable de la línea de producción para la manufactura de productos químicos y explosivos.
      Supervisión del proceso y manejo de maquinaria especializada, asegurando el cumplimiento
      estricto de los protocolos de seguridad y normativas de calidad.</p>

    <h3>🛡️ Prosegur - Jefe de Equipo de Seguridad - Murcia (4 años) </h3>
    <p>• Liderazgo de equipos de seguridad en instalaciones de gran afluencia y logística (Amazon, ADIF,
      Primark). Planificación operativa de servicios, gestión de personal, resolución de incidencias y
      enlace directo con el cliente para garantizar la protección de activos y personas.</p>

    <h3>📋 Vigilant - Vigilante de Seguridad - Alcantarilla (8 años)</h3>
    <p>• Ejecución de labores de vigilancia estática y dinámica para la protección de bienes y personas.
      Gestión de servicios de 'acuda' (respuesta a alarmas) y monitorización de incidencias a través de
      la Central Receptora de Alarmas (CRA).</p>

    <h3>📡 Retemur S. Coop. - Operador de Planta Externa - Alcantarilla (4 años)</h3>
    <p>• Instalación y mantenimiento de la infraestructura de red (fibra óptica y par de cobre) para
      grandes operadores (Telefónica, Ono). Diagnóstico técnico y resolución de averías en campo
      para garantizar la conectividad y continuidad del servicio al cliente.</p>
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
  max-height: 98vh;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.64);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgb(127, 140, 141);
  text-align: left;
  position: relative;
  overflow-y: auto;
}
h1 {
  color: #34495e;
  text-align: center;
  margin-bottom: 15px;
  font-size: 2rem;
  margin-top: 15px;
  font-family: 'Quicksand', sans-serif;
  position: relative;
  z-index: 1;
}


h3 {
  color: #2c3e50;
  margin-top: 25px;
  font-size: 1.6rem;
  font-family: 'Quicksand', sans-serif;
  position: relative;
  z-index: 1;
}

p {
  color: #34495e;
  font-size: 1.3rem;
  line-height: 1.5;
  margin-bottom: 12px;
  font-family: 'Quicksand', sans-serif;
  position: relative;
  z-index: 1;
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