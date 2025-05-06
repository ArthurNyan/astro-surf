import { Industry } from './types';

export const industries: Industry[] = [
    {
        id: 'foodtech',
        icon: '/assets/foodtech-icon.svg',
        title: 'Фудтех',
        services: ['Разработка и развитие комплексных приложений и сайтов с инеграцией iiko, r-keeper.']
    },
    {
        id: 'banking',
        icon: '/assets/banking-icon.svg',
        title: 'Банкинг',
        services: ['Банковские приложения для обхода санкций', 'Замена коробочного решения на кастомное']
    },
    {
        id: 'ecommerce',
        icon: '/assets/e-commerce-icon.svg',
        title: 'E-commerce',
        services: ['ERP-системы', 'Сервисы для сотрудников с акцентом на UI']
    },
    {
        id: 'corporate',
        icon: '/assets/corporate-solutions-icon.svg',
        title: 'Корпоративные решения',
        services: ['Комплексные ритейл-приложения и сайты', 'Замена коробочных решений на кастомные']
    }
]; 