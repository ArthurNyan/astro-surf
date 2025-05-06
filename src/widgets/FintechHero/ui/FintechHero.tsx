import { Button } from "../../../shared/ui";


export const FintechHero = () => {
    return (
        <section className="relative bg-gradient-to-b from-purple-200 to-purple-50">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16 md:py-32">
                    <div className="flex flex-col items-start justify-center space-y-8">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            Мобильные приложения для банкинга и финтех-компаний
                        </h1>
                        <p className="text-xl md:text-2xl">
                            Создали мобильные приложения для главных банков страны.
                            В них ежедневно оплачивают услуги, берут кредиты и совершают переводы более 30 млн жителей России.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-6">
                            <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md">
                                <span className="text-sm font-mono uppercase">Приложение для страховой</span>
                            </div>
                            <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md">
                                <span className="text-sm font-mono uppercase">Программа лояльности</span>
                            </div>
                            <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md">
                                <span className="text-sm font-mono uppercase">Инвест-платформа</span>
                            </div>
                            <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md">
                                <span className="text-sm font-mono uppercase">мобильный банк</span>
                            </div>
                            <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md">
                                <span className="text-sm font-mono uppercase">банковское pwa</span>
                            </div>
                        </div>

                        <Button className="mt-8 bg-black text-white uppercase">Обсудить проект</Button>
                    </div>

                    <div className="hidden md:flex items-center justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-400 to-purple-200 rounded-2xl opacity-50 blur-3xl"></div>
                            <img
                                src="/assets/images/fintech-hero.png"
                                alt="Финтех приложения"
                                className="relative z-10 max-w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-7xl py-16">
                <p className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-gray-800">
                    Приложение — это лицо банка. Мы делаем его современным, привлекательным, «своим».
                    Первыми внедряем инновации, которые перенимает весь рынок.
                    Помогаем банкам быть ближе к клиентам, обходить ограничения сторон и попадать в первые строчки Markswebb.
                </p>
            </div>
        </section>
    );
}; 