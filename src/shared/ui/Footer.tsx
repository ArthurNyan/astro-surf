import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-white py-6 border-t border-gray-100">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <img src="/assets/surf-logo.svg" alt="Surf" className="h-8" />

                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <a
                            href="mailto:hello@surfstudio.com"
                            className="text-sm uppercase font-mono hover:underline"
                        >
                            hello@surfstudio.com
                        </a>

                        <a
                            href="/privacy-policy"
                            className="text-sm uppercase font-mono hover:underline"
                        >
                            Политика конфиденциальности
                        </a>
                    </div>

                    <p className="text-sm text-gray-600">© 2025 Surf. Все права защищены</p>
                </div>
            </div>
        </footer>
    );
}; 