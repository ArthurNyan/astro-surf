import React from 'react';

export const BankLogos = () => {
    const banks = [
        { name: 'Сбербанк', id: 1 },
        { name: 'ВТБ', id: 2 },
        { name: 'Газпромбанк', id: 3 },
        { name: 'Альфа-Банк', id: 4 },
        { name: 'Тинькофф Банк', id: 5 },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-wrap justify-center items-center gap-16">
                    {banks.map((bank) => (
                        <div
                            key={bank.id}
                            className="h-10 min-w-[120px] bg-gray-100 rounded flex items-center justify-center grayscale opacity-70"
                        >
                            <span className="text-gray-500 font-mono text-sm">{bank.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}; 