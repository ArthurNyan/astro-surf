import React from 'react';
import { Button } from './Button';

export const Header = () => {
    return (
        <header className="bg-white py-6">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <a href="/">
                            <img src="/images/surf-logo.svg" alt="Surf" className="h-8 mr-10" />
                        </a>

                        <nav className="hidden md:flex items-center space-x-1">
                            <NavItem href="/fintech">Финтех</NavItem>
                            <NavItem href="#">Услуги</NavItem>
                            <NavItem href="#">Проекты</NavItem>
                            <NavItem href="#">Экспертиза</NavItem>
                            <NavItem href="#">Блог</NavItem>
                            <NavItem href="#">О нас</NavItem>
                            <NavItem href="#">Карьера</NavItem>
                        </nav>
                    </div>

                    <div className="flex items-center space-x-2">
                        <div className="hidden md:block">
                            <Button variant="light" >en</Button>
                        </div>
                        <div className="hidden md:block">
                            <Button>Начать разработку</Button>
                        </div>
                    </div>

                    <button className="block md:hidden">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="currentColor" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

const NavItem: React.FC<{ children: React.ReactNode; href: string }> = ({ children, href }) => {
    return (
        <a
            href={href}
            className="px-4 py-3 text-xs font-mono uppercase bg-[#EEEEEE] rounded-md hover:bg-gray-200 transition-colors"
        >
            {children}
        </a>
    );
}; 