import { createRouter, createWebHistory } from 'vue-router';

// Importa tus componentes de contenido
import AboutMe from '../components/AboutMe.vue';
import Experience from '../components/Experience.vue';
import Education from '../components/Education.vue';
import Skills from '../components/Skills.vue';

const routes = [
    {
        path: '/',
        redirect: '/sobre-mi', // Redirecciona a 'Sobre mí' por defecto
    },
    {
        path: '/sobre-mi',
        name: 'AboutMe',
        component: AboutMe,
    },
    {
        path: '/experiencia',
        name: 'Experience',
        component: Experience,
    },
    {
        path: '/educacion',
        name: 'Education',
        component: Education,
    },
    {
        path: '/habilidades',
        name: 'Skills',
        component: Skills,
    },

];

const router = createRouter({
    // CAMBIA ESTA LÍNEA:
    history: createWebHistory(import.meta.env.BASE_URL), // <-- Usa import.meta.env
    routes,
});

export default router;