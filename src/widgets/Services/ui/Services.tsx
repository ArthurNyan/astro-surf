import React from 'react';

// Типы для пунктов подхода
interface ApproachItem {
    id: string;
    text: string;
}

// Типы для отраслевых карточек
interface Industry {
    id: string;
    icon: string;
    title: string;
    services: string[];
}

// Типы для карточек услуг
interface Service {
    id: string;
    icon: string;
    title: string;
    items: string[];
}

// Типы для проектов
interface Project {
    id: string;
    logo: React.ReactNode;
    title: string;
    description: string;
}

export const Services = () => {
    // Данные для секции "Наш подход"
    const approachItems: ApproachItem[] = [
        { id: '01', text: 'Берём на себя ответственность за качество, грамотную поддержку и своевременное обновление продукта' },
        { id: '02', text: 'Храним высокую инженерную культуру: статический анализ кода, DCM, код-ревью, переиспользование технических практик' },
        { id: '03', text: 'Создаём среду, в которой клиент чувствует уважение, партнёрство и заботу' },
        { id: '04', text: 'Сдаём проекты в срок и не нарушаем договорённости' },
        { id: '05', text: 'Развиваем IT-сообщество: делимся накопленной экспертизой, растим кадры внутри себя, вносим вклад в open source-проекты' },
    ];

    // Данные для секции "Отрасли"
    const industries: Industry[] = [
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

    // Данные для секции "Услуги"
    const services: Service[] = [
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

    // Данные для проектов
    const projects: Project[] = [
        {
            id: 'burgerking',
            logo: <div className="bg-[#F5E5C9] h-[470px] rounded-md">
                <img src="/assets/images/burger-king-logo.png" alt="Бургер Кинг" />
            </div>,
            title: 'Бургер Кинг',
            description: '7 миллионов пользователей приложения'
        },
        {
            id: 'loverepublic',
            logo: <div className="bg-[#F9F4EB] h-[470px] flex items-center justify-center rounded-md">
                <img src="/assets/images/love-republic-logo.png" alt="LOVE REPUBLIC" />
            </div>,
            title: 'LOVE REPUBLIC',
            description: '300 заказов в первый час после запуска приложения'
        },
        {
            id: 'sbibank',
            logo: <div className="bg-[#F9F4EB] h-[470px] flex items-center justify-center rounded-md">
                <img src="/assets/images/sbi-bank-logo.png" alt="SBI Bank" />
            </div>,
            title: 'SBI Bank',
            description: 'Детский банкинг №1 в России'
        },
        {
            id: 'rigla',
            logo: <div className="bg-[#EAEAEA] h-[470px] flex items-center justify-center rounded-md"></div>,
            title: 'Ригла',
            description: 'Приложение объединило 3600 аптек, 58 регионов и 1,5 миллиона пользователей'
        }
    ];

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Заголовок секции */}
                <div className="mb-20">
                    {/* Раздел "Отрасли" */}
                    <h3 className="text-5xl font-semibold mb-10">Отрасли</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
                        {industries.map((industry) => (
                            <div key={industry.id} className="flex flex-col gap-7">
                                <div className="flex items-center gap-3">
                                    <div className={`w-12 h-12 rounded flex items-center justify-center ${industry.id === 'foodtech' ? 'bg-[#DDFD5E]' :
                                        industry.id === 'banking' ? 'bg-[#FF7238]' :
                                            industry.id === 'ecommerce' ? 'bg-[#75E47A]' :
                                                'bg-[#CB9FD2]'
                                        }`}>
                                        <img src={industry.icon} alt={industry.title} className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-xl font-semibold">{industry.title}</h4>
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    {industry.services.map((service, index) => (
                                        <div key={index} className="bg-[#F4F4F4] p-3 rounded-md">
                                            <p className="font-mono text-sm uppercase leading-relaxed">{service}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Раздел "Услуги" */}
                    <h3 className="text-5xl font-semibold mb-10">Услуги</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {services.map((service) => (
                            <div key={service.id} className="flex flex-col gap-7">
                                <div className="flex items-center gap-3">
                                    <div className={`w-12 h-12 rounded flex items-center justify-center ${service.id === 'ai' ? 'bg-[#D5B270]' :
                                        service.id === 'analytics' ? 'bg-[#EE84D7]' :
                                            service.id === 'research' ? 'bg-[#5EDBFD]' :
                                                'bg-[#FCDE4B]'
                                        }`}>
                                        <img src={service.icon} alt={service.title} className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-xl font-semibold">{service.title}</h4>
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    {service.items.map((item, index) => (
                                        <div key={index} className="bg-[#F4F4F4] p-3 rounded-md">
                                            <p className="font-mono text-sm uppercase leading-relaxed">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-5xl font-semibold mb-10">Наш подход</h3>

                    {/* Раздел "Наш подход" */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
                        {approachItems.map((item) => (
                            <div key={item.id} className="flex flex-col gap-6">
                                <p className="text-sm font-mono uppercase">[ {item.id} ]</p>
                                <p className="text-2xl font-semibold leading-tight">{item.text}</p>
                            </div>
                        ))}
                    </div>

                    {/* Раздел "Проекты" */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
                        {projects.map((project) => (
                            <div key={project.id} className="flex flex-col gap-6">
                                {project.logo}
                                <div>
                                    <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                                    <p className="text-gray-700">{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}; 