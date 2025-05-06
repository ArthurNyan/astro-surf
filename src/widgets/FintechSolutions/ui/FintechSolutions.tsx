import React from 'react';
import { ArrowRight } from 'lucide-react';

export const FintechSolutions = () => {
    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="mb-6">
                    <p className="text-sm font-mono uppercase">[ услуги ]</p>
                </div>

                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Решения
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-100 p-6 rounded-xl flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <div className="bg-orange-500 text-white p-3 rounded-md">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z" fill="currentColor" />
                                </svg>
                            </div>
                            <span className="text-lg md:text-xl font-mono uppercase">Разработка финтех-продуктов с нуля</span>
                        </div>
                        <ArrowRight className="text-black" size={24} />
                    </div>

                    <div className="bg-gray-100 p-6 rounded-xl flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <div className="bg-purple-400 text-white p-3 rounded-md">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.7 19L13.6 9.9C14.5 7.6 14 4.9 12.1 3C10.1 1 7.1 0.6 4.7 1.7L9 6L6 9L1.6 4.7C0.4 7.1 0.9 10.1 2.9 12.1C4.8 14 7.5 14.5 9.8 13.6L18.9 22.7C19.3 23.1 19.9 23.1 20.3 22.7L22.6 20.4C23.1 20 23.1 19.3 22.7 19Z" fill="currentColor" />
                                </svg>
                            </div>
                            <span className="text-lg md:text-xl font-mono uppercase">Замена коробочного ДБО на кастомное</span>
                        </div>
                        <ArrowRight className="text-black" size={24} />
                    </div>

                    <div className="bg-gray-100 p-6 rounded-xl flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <div className="bg-green-400 text-white p-3 rounded-md">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 19H16V15H13.32C12.18 17.42 9.72 19 7 19C3.14 19 0 15.86 0 12C0 8.14 3.14 5 7 5C9.72 5 12.18 6.58 13.32 9H22V15H24V19H22ZM18 17H20V11H11.94L11.71 10.33C11.01 8.34 9.11 7 7 7C4.24 7 2 9.24 2 12C2 14.76 4.24 17 7 17C9.11 17 11.01 15.66 11.71 13.67L11.94 13H18V17ZM7 15C5.35 15 4 13.65 4 12C4 10.35 5.35 9 7 9C8.65 9 10 10.35 10 12C10 13.65 8.65 15 7 15ZM7 11C6.45 11 6 11.45 6 12C6 12.55 6.45 13 7 13C7.55 13 8 12.55 8 12C8 11.45 7.55 11 7 11Z" fill="currentColor" />
                                </svg>
                            </div>
                            <span className="text-lg md:text-xl font-mono uppercase">Разработка ДБО для обхода санкций</span>
                        </div>
                        <ArrowRight className="text-black" size={24} />
                    </div>

                    <div className="bg-gray-100 p-6 rounded-xl flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <div className="bg-amber-400 text-white p-3 rounded-md">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 2H3C1.9 2 1 2.9 1 4V16C1 17.1 1.9 18 3 18H10V20H8V22H16V20H14V18H21C22.1 18 23 17.1 23 16V4C23 2.9 22.1 2 21 2ZM21 16H3V4H21V16Z" fill="currentColor" />
                                </svg>
                            </div>
                            <span className="text-lg md:text-xl font-mono uppercase">Создание веб-приложений (PWA)</span>
                        </div>
                        <ArrowRight className="text-black" size={24} />
                    </div>

                    <div className="bg-gray-100 p-6 rounded-xl flex justify-between items-center md:col-span-2">
                        <div className="flex items-center gap-4">
                            <div className="bg-lime-400 text-white p-3 rounded-md">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.97 7.27C21.35 6.9 21.35 6.28 20.97 5.9L18.1 3.03C17.73 2.66 17.1 2.66 16.73 3.03L15 4.75L19.25 9L20.97 7.27ZM9 15H13L18.18 9.82L13.93 5.57L9 10.5V15ZM22 19V21H2V19H22Z" fill="currentColor" />
                                </svg>
                            </div>
                            <span className="text-lg md:text-xl font-mono uppercase">Внедрение системы лояльности, доработка личного кабинета, редизайн</span>
                        </div>
                        <ArrowRight className="text-black" size={24} />
                    </div>
                </div>
            </div>
        </section>
    );
}; 