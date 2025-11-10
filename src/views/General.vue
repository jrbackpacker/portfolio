<template>
  <div class="general-layout">
    <aside class="sidebar">
      <div class="profile-section">
        <div class="profile-circle">
          <img src="@/assets/profile.jpg" alt="Foto de Perfil" class="profile-pic"/>
        </div>
      </div>
      <nav class="navigation-menu">
        <ul>
          <li>
            <router-link to="/sobre-mi">Sobre mí</router-link>
          </li>
          <li>
            <router-link to="/experiencia">Experiencia</router-link>
          </li>
          <li>
            <router-link to="/educacion">Educación</router-link>
          </li>
          <li>
            <router-link to="/habilidades">Habilidades</router-link>
          </li>
        </ul>
      </nav>
    </aside>

    <main class="content-area">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component"/>
        </transition>
      </router-view>
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
  background-color: #34495e;
  box-sizing: border-box; /* Importante para que el padding no añada ancho extra */
  position: relative; /* Para posicionamiento absoluto en móvil */
}

.sidebar {
  width: 200px; /* Ancho fijo de la barra lateral */
  min-width: 200px; /* Puedes añadir un mínimo si quieres que no se encoja */
  background-color: #34495e;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  border-right: 2px solid #34495e;
  box-sizing: border-box; /* Asegura que el padding no desborde el width */
  transition: transform 0.3s ease;
}

/* Estilos para dispositivos móviles */
@media (max-width: 768px) {
  .general-layout {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    min-width: 100%;
    padding: 10px 0;
    border-right: none;
    border-bottom: 2px solid #34495e;
  }

  .profile-circle {
    width: 120px;
    height: 120px;
  }

  .navigation-menu ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    padding: 0 10px;
  }

  .navigation-menu li {
    margin: 5px;
  }
}

/* Estilos para tablets */
@media (min-width: 769px) and (max-width: 1024px) {
  .sidebar {
    width: 180px;
    min-width: 180px;
  }

  .profile-circle {
    width: 140px;
    height: 140px;
  }
}

/* Ajustes para el área de contenido */
.content-area {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background-color: #fff;
}

/* Estilos para la navegación */
.navigation-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.navigation-menu li {
  margin: 10px 0;
}

.navigation-menu a {
  color: rgba(255, 255, 255, 0.64);
  text-decoration: none;
  font-size: 1.1em;
  transition: color 0.3s ease;
}

.navigation-menu a:hover,
.navigation-menu a.router-link-active {
  color: #fff;
}

.profile-section {
  text-align: center;
  margin-bottom: 30px;
}

.profile-circle {
  width: 170px;
  height: 170px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #7f8c8d;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 15px auto;
  background-color: #7f8c8d;
}

.profile-pic {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-section h2 {
  margin: 10px 0 5px 0;
  color: rgba(255, 255, 255, 0.64);
}

.profile-section p {
  color: rgba(255, 255, 255, 0.64);
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
  margin-bottom: 10px;
}

.navigation-menu a {
  display: block;
  padding: 12px 12px ;
  color: rgba(255, 255, 255, 0.64);
  text-decoration: none;
  font-weight: 500;
  text-align: center;
  border-radius: 1rem;
  font-family: 'Quicksand', sans-serif;
  font-size: 1.4em;
}

.navigation-menu a:hover{
  background-color: rgba(255, 255, 255, 0.64);
  color: #34495e;
  border-radius: 1rem;
  margin-left: 18px;
margin-right: 18px;
}

.content-area {
  flex-grow: 1; /* Ocupa el espacio restante en horizontal */
  padding: 20px; /* Espacio interno alrededor del contenido */
  overflow-y: auto; /* Permite el scroll si el contenido es muy largo */
  background-color: #34495e;
  box-sizing: border-box;
  display: flex; /* Convierte el content-area en un contenedor flex */
  flex-direction: column; /* Para que sus hijos se apilen verticalmente */
  height: 100%; /* Asegura que el content-area ocupe el 100% de la altura de su padre (general-layout) */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease; /* Duración y tipo de la transición */
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0; /* Estado inicial (para entrada) y final (para salida) */
}
</style>