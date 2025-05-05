import React from 'react';
import { Button } from '../../../shared/ui/Button';

export const Hero: React.FC = () => {
    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                <h1 className="text-7xl md:text-8xl font-bold mb-20 leading-tight">Переносим бизнес<br />в карман пользователя</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-24">
                    <div className="p-4">
                        <p className="text-lg font-medium">Даём жизнь застопорившимся проектам</p>
                    </div>
                    <div className="p-4">
                        <p className="text-lg font-medium">Инновационные решения для бизнеса</p>
                    </div>
                    <div className="p-4">
                        <p className="text-lg font-medium">Надёжный партнер для цифрового прорыва</p>
                    </div>
                </div>
            </div>
        </section>
    );
}; 