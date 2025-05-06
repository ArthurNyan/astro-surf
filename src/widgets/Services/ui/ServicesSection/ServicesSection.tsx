import React from 'react';
import { Service } from '../../../../entities/service';

interface ServicesSectionProps {
    services: Service[];
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
    return (
        <>
            <h3 className="text-5xl font-semibold mb-10">Услуги</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
                {services.map((service) => (
                    <div key={service.id} className="flex flex-col gap-7">
                        <div className="flex items-center gap-3">
                            <div className={`w-12 h-12 rounded flex items-center justify-center ${service.id === 'ai' ? 'bg-[#D5B270]' :
                                service.id === 'analytics' ? 'bg-[#EE84D7]' :
                                    service.id === 'research' ? 'bg-[#5EDBFD]' :
                                        'bg-[#FCDE4B]'
                                }`}>
                                <img src={service.icon} alt={service.title} className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-semibold">{service.title}</h4>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            {service.items.map((item, index) => (
                                <div key={index} className="bg-[#F4F4F4] p-3 rounded-md">
                                    <p className="font-mono text-sm uppercase leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}; 