<template>
  <div class="content-component">
    <h1>🎓 Educación</h1>
    <p>Mi formación académica y certificaciones.</p>
    <ul>
      <li>**[Título]** en **[Institución]** (Año de inicio - Año de fin)</li>
      <li>**[Título]** en **[Institución]** (Año de inicio - Año de fin)</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Education',
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