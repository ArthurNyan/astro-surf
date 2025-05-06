import React from 'react';

export const FintechTestimonials = () => {
    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="mb-6">
                    <p className="text-sm font-mono uppercase">[ отзывы ]</p>
                </div>

                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Создали приложения для <br />крупнейших банков России
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Testimonial 1 */}
                    <div className="bg-gray-100 p-8 rounded-lg">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-black text-white p-3 rounded-full text-center min-w-[40px]">
                                <span className="text-sm font-mono">20</span>
                            </div>
                            <p className="text-sm font-mono uppercase">банк из топ-20 банков рф</p>
                        </div>

                        <p className="mb-6 text-base md:text-lg">
                            Благодаря работе Surf мы получили положительные отзывы от конечных пользователей
                            об удобстве и функциональности приложения. Мы часто общались между собой,
                            обеспечивая прозрачный и эффективный рабочий процесс. Обширный опыт работы
                            в банковской сфере и технические знания являются отличительными чертами их работы.
                        </p>

                        <div>
                            <p className="font-semibold mb-2">Тимофей Колчаков</p>
                            <p className="text-sm font-mono uppercase">[ рук. отдела разработки мобильных банковских приложений ]</p>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="bg-gray-100 p-8 rounded-lg">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-white border border-gray-300 rounded-lg overflow-hidden w-10 h-10 flex items-center justify-center">
                                <img src="/assets/images/zenit-logo.png" alt="Банк Зенит" className="max-w-full" />
                            </div>
                            <p className="text-sm font-mono uppercase">банк зенит</p>
                        </div>

                        <p className="mb-6 text-base md:text-lg">
                            Пользователи высоко оценивают интерфейс приложения, его целостный дизайн
                            и полезные функции, что способствует увеличению коэффициента конверсии.
                            Surf — это профессиональная команда, которая использует свой опыт и данные
                            для получения глубокого понимания и разработки инновационных решений.
                        </p>

                        <div>
                            <p className="font-semibold mb-2">Олег Стрельков</p>
                            <p className="text-sm font-mono uppercase">[ СТО ]</p>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="bg-gray-100 p-8 rounded-lg">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-white border border-gray-300 rounded-lg overflow-hidden w-10 h-10 flex items-center justify-center">
                                <img src="/assets/images/psb-logo.png" alt="ПСБ банк" className="max-w-full" />
                            </div>
                            <p className="text-sm font-mono uppercase">ПСБ банк</p>
                        </div>

                        <p className="mb-6 text-base md:text-lg">
                            Приложение предоставляет удобные консьерж-услуги и новости для VIP-клиентов.
                            Surf сократил расходы на разработку второй платформы и выполнил все работы
                            в срок и в рамках бюджета. В настоящее время команда разрабатывает версию
                            приложения для Android и расширяет спектр услуг для корпоративных клиентов.
                        </p>

                        <div>
                            <p className="font-semibold mb-2">Алексей Подуруев</p>
                            <p className="text-sm font-mono uppercase">[ руководитель ит-проектов ]</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}; 