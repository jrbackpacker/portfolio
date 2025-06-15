<template>
  <div class="content-component">
    <h1>👤 Sobre mí</h1>
    <p>¡Hola! Soy [Tu Nombre], [Tu profesión o descripción breve]. Me apasiona [Tus intereses o áreas de especialización].</p>
    <p>En esta sección podrás encontrar más detalles sobre mi trayectoria y lo que puedo aportar.</p>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
};
</script>

<style scoped>
.content-component {
  width: 98%;
  height: 98%html;

  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  text-align: left;
}
h1 {
  color: #333;
  margin-bottom: 15px;
}
p {
  color: #555;
  line-height: 1.6;
}
</style>