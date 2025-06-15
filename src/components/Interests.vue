<template>
  <div class="content-component">
    <h1>❤️ Intereses</h1>
    <p>Mis hobbies y lo que disfruto fuera del trabajo.</p>
    <ul>
      <li>Lectura</li>
      <li>Deportes</li>
      <li>Música</li>
      <li>Viajes</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Interests',
};
</script>

<style scoped>
.content-component {
  width: 100%;
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
ul {
  margin-top: 15px;
}
li {
  margin-bottom: 10px;
  color: #444;
}
</style>