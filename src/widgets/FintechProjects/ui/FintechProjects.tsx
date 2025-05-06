import React from 'react';

export const FintechProjects = () => {
    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="mb-6">
                    <p className="text-sm font-mono uppercase">[ Разработка ]</p>
                </div>

                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Проекты
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Проект 1 */}
                    <div className="flex flex-col">
                        <div className="bg-gray-200 aspect-video mb-6 rounded-lg overflow-hidden">
                            <img
                                src="/assets/images/project-zenit.jpg"
                                alt="Зенит Банк"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-semibold mb-4">Зенит Банк</h3>
                            <p className="text-gray-700">
                                Приложение для пяти банков повысило активность пользователей на 20%.
                            </p>
                        </div>
                    </div>

                    {/* Проект 2 */}
                    <div className="flex flex-col">
                        <div className="bg-gray-200 aspect-video mb-6 rounded-lg overflow-hidden">
                            <img
                                src="/assets/images/project-smp.jpg"
                                alt="СМП Банк"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-semibold mb-4">СМП Банк</h3>
                            <p className="text-gray-700">
                                Первое банковское B2C-приложение на Flutter для двух банков за 9 месяцев.
                            </p>
                        </div>
                    </div>

                    {/* Проект 3 */}
                    <div className="flex flex-col">
                        <div className="bg-gray-200 aspect-video mb-6 rounded-lg overflow-hidden">
                            <img
                                src="/assets/images/project-sbi.jpg"
                                alt="SBI Банк"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-semibold mb-4">SBI Банк</h3>
                            <p className="text-gray-700">
                                Детский банкинг № 1 в России помог увеличить аудиторию банка в 23 раза.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}; 