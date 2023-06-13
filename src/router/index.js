import { createRouter, createWebHistory } from 'vue-router';
import ApplianceList from '../views/ListAppliancesPage.vue';
import ApplianceCreate from '../views/CreateAppliancePage.vue';
import ApplianceEdit from '../views/EditAppliancePage.vue';

const baseApiUrl = 'http://127.0.0.1:8000/api';

const routes = [

    {
        path: '/appliances',
        name: 'ApplianceList',
        component: ApplianceList
    },
    {
        path: '/appliances/create',
        name: 'ApplianceCreate',
        component: ApplianceCreate
    },
    {
        path: '/appliances/:id/edit',
        name: 'ApplianceEdit',
        component: ApplianceEdit
    }
];

const router = createRouter({
    history: createWebHistory(),
    base: baseApiUrl, // Utiliza a variável de ambiente como base da URL
    routes
});

export default router;
