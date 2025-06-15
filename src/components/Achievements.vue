<template>
  <div class="content-component">
    <h1>🏆 Logros</h1>
    <p>Reconocimientos y éxitos importantes en mi trayectoria.</p>
    <ul>
      <li>**[Logro 1]** (Breve descripción)</li>
      <li>**[Logro 2]** (Breve descripción)</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Achievements',
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