import React from 'react';
import { Button } from '../../../shared/ui/Button';

export const ContactForm: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="flex flex-col lg:flex-row justify-between gap-24 py-[140px] pb-[100px]">
                    <div className="flex-1 flex flex-col gap-[60px]">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-6xl md:text-7xl font-semibold leading-[0.87em] tracking-[-0.04em]">Расскажите<br />о проекте</h2>
                            <p className="text-2xl tracking-[-0.02em]">И мы предложим подходящие решения</p>
                        </div>

                        <div className="inline-flex items-center gap-3 bg-[#F3F3F3] px-4 py-3 rounded-lg">
                            <span className="flex items-center justify-center w-6 h-6 bg-black text-white rounded">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor" />
                                </svg>
                            </span>
                            <span className="text-sm uppercase font-mono tracking-[-0.02em]">Или напишите нашему Telegram-боту</span>
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="bg-[#F3F3F3] p-4 rounded-2xl relative overflow-hidden">
                            {/* Декоративные элементы */}
                            <div className="absolute -top-32 -left-24 w-64 h-64 rounded-full bg-[#F3C0FC] opacity-50 blur-[114px]"></div>
                            <div className="absolute top-40 -right-20 w-40 h-40 rounded-full bg-[#DC5C40] opacity-50 blur-[114px]"></div>
                            <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-[#9AFE51] opacity-50 blur-[93px]"></div>

                            <form className="relative z-10 flex flex-col gap-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    <input
                                        type="text"
                                        placeholder="Имя"
                                        className="bg-white p-7 rounded-md text-lg outline-none border-none"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Компания"
                                        className="bg-white p-7 rounded-md text-lg outline-none border-none"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    <input
                                        type="tel"
                                        placeholder="Телефон"
                                        className="bg-white p-7 rounded-md text-lg outline-none border-none"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="bg-white p-7 rounded-md text-lg outline-none border-none"
                                    />
                                </div>

                                <textarea
                                    placeholder="«Планируем запустить MVP онлайн-магазина…»"
                                    className="bg-white p-7 rounded-md text-lg outline-none border-none h-32"
                                ></textarea>

                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
                                    <div className="flex gap-2">
                                        <Button size="lg" className="font-mono uppercase text-base py-6 px-6">
                                            Начать разработку
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="lg"
                                            className="border-dashed font-mono uppercase text-base py-6 px-6 flex items-center gap-3"
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="currentColor" />
                                            </svg>
                                            Добавить файл
                                        </Button>
                                    </div>

                                    <p className="text-xs">
                                        Отправляя запрос, вы соглашаетесь с политикой конфиденциальности
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}; 