import { Service } from './types';

export const services: Service[] = [
    {
        id: 'ai',
        icon: '/assets/ai-systems-icon.svg',
        title: 'AI-системы',
        items: ['Умный поиск для онлайн-магазинов', 'LLM/RAG-решения']
    },
    {
        id: 'analytics',
        icon: '/assets/analytics-icon.svg',
        title: 'Аналитика',
        items: ['Предпроектное исследование', 'Продуктовая аналитика']
    },
    {
        id: 'research',
        icon: '/assets/research-icon.svg',
        title: 'Исследование',
        items: ['Аудит кода', 'UX/UI аудит']
    },
    {
        id: 'development',
        icon: '/assets/development-icon.svg',
        title: 'Разработка',
        items: ['Кроссплатформенная разработка', 'Нативная разработка', 'веб-приложения']
    }
]; 