import React from 'react';

export const FintechCapabilities = () => {
    return (
        <section className="py-20 md:py-32 relative overflow-hidden">
            {/* Декоративный фон */}
            <div className="absolute -left-64 top-1/4 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute -right-64 top-3/4 w-96 h-96 bg-green-400 rounded-full opacity-10 blur-3xl"></div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="text-center mb-20">
                    <p className="text-sm font-mono uppercase mb-6">[ возможности ]</p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Быстро запускаем и прокачиеваем<br />цифровой банкинг
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
                        <div className="bg-black text-white inline-flex items-center justify-center w-10 h-10 rounded-full mb-6">
                            <span className="font-mono">1</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-semibold mb-4">
                            Сильная команда с опытом<br />в банкинге
                        </h3>
                        <p className="text-gray-700">
                            Разрабатываем финтех-приложения уже 14 лет.
                        </p>
                    </div>

                    <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
                        <div className="bg-black text-white inline-flex items-center justify-center w-10 h-10 rounded-full mb-6">
                            <span className="font-mono">2</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-semibold mb-4">
                            Отсекаем лишнее и фокусируемся на главном
                        </h3>
                        <p className="text-gray-700">
                            Снижаем когнитивную нагрузку на пользователя за счет грамотного UX.
                            Продумываем пути пользователя, чтобы главные задачи решались в пару тапов.
                        </p>
                    </div>

                    <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
                        <div className="bg-black text-white inline-flex items-center justify-center w-10 h-10 rounded-full mb-6">
                            <span className="font-mono">3</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-semibold mb-4">
                            Развиваем сильные<br />региональные ДБО
                        </h3>
                        <p className="text-gray-700">
                            Делаем из зарплатного приложения полноценный финансовый инструмент.
                            Сохраняем душу региона в дизайне и помогаем стать банком номер 1.
                        </p>
                    </div>

                    <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
                        <div className="bg-black text-white inline-flex items-center justify-center w-10 h-10 rounded-full mb-6">
                            <span className="font-mono">4</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-semibold mb-4">
                            Создали первый банк на Flutter
                        </h3>
                        <p className="text-gray-700">
                            И лучшие приложения для финансовых, страховых и банковских продуктов
                            по версии Markswebb, Tagline и Рейтинга Рунета.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}; 