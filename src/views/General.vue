<template>
  <div class="general-layout">
    <aside class="sidebar">
      <div class="profile-section">
        <div class="profile-circle">
          <img src="@/assets/profile.jpg" alt="Foto de Perfil" class="profile-pic" />
        </div>
        <h2>Tu Nombre</h2>
        <p>Tu Título / Profesión</p>
      </div>
      <nav class="navigation-menu">
        <ul>
          <li><router-link to="/sobre-mi">👤 Sobre mí</router-link></li>
          <li><router-link to="/experiencia">💼 Experiencia</router-link></li>
          <li><router-link to="/educacion">🎓 Educación</router-link></li>
          <li><router-link to="/habilidades">🛠️ Habilidades</router-link></li>
          <li><router-link to="/intereses">❤️ Intereses</router-link></li>
          <li><router-link to="/logros">🏆 Logros</router-link></li>
        </ul>
      </nav>
    </aside>

    <main class="content-area">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'General',
};
</script>

<style scoped>
.general-layout {
  display: flex; /* Contenedor flex para barra lateral y contenido */
  width: 100%;
  height: 100vh; /* Asegura que ocupe el 100% del alto de la ventana */
  background-color: #f0f2f5;
  box-sizing: border-box; /* Importante para que el padding no añada ancho extra */
}

.sidebar {
  width: 250px; /* Ancho fijo de la barra lateral */
  min-width: 200px; /* Puedes añadir un mínimo si quieres que no se encoja */
  background-color: #ffffff;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  border-right: 1px solid #e0e0e0;
  box-sizing: border-box; /* Asegura que el padding no desborde el width */
}

.profile-section {
  text-align: center;
  margin-bottom: 30px;
}

.profile-circle {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #42b983;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 15px auto;
  background-color: #eee;
}

.profile-pic {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-section h2 {
  margin: 10px 0 5px 0;
  color: #333;
}

.profile-section p {
  color: #666;
  font-size: 0.9em;
}

.navigation-menu {
  width: 100%;
}

.navigation-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.navigation-menu li {
  width: 100%;
}

.navigation-menu a {
  display: block;
  padding: 12px 20px;
  color: #555;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s ease, color 0.3s ease;
  text-align: left;
}

.navigation-menu a:hover,
.navigation-menu a.router-link-active {
  background-color: #e6f7ea;
  color: #42b983;
  border-left: 4px solid #42b983;
  padding-left: 16px;
}

.content-area {
  flex-grow: 1; /* Ocupa el espacio restante en horizontal */
  padding: 20px; /* Espacio interno alrededor del contenido */
  overflow-y: auto; /* Permite el scroll si el contenido es muy largo */
  background-color: #f0f2f5;
  box-sizing: border-box;

  /* ¡ESTOS ESTILOS SON CLAVE PARA QUE LOS HIJOS SE ESTIREN! */
  display: flex; /* Convierte el content-area en un contenedor flex */
  flex-direction: column; /* Para que sus hijos se apilen verticalmente */
  height: 100%; /* Asegura que el content-area ocupe el 100% de la altura de su padre (general-layout) */
  /* NO NECESITA width: 100%; aquí porque flex-grow: 1 ya se encarga del ancho. */
}
</style>