import React from 'react';
import { Industry } from '../../../../entities/industry';

interface IndustriesSectionProps {
    industries: Industry[];
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ industries }) => {
    return (
        <>
            <h3 className="text-5xl font-semibold mb-10">Отрасли</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
                {industries.map((industry) => (
                    <div key={industry.id} className="flex flex-col gap-7">
                        <div className="flex items-center gap-3">
                            <div className={`w-12 h-12 rounded flex items-center justify-center ${industry.id === 'foodtech' ? 'bg-[#DDFD5E]' :
                                industry.id === 'banking' ? 'bg-[#FF7238]' :
                                    industry.id === 'ecommerce' ? 'bg-[#75E47A]' :
                                        'bg-[#CB9FD2]'
                                }`}>
                                <img src={industry.icon} alt={industry.title} className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-semibold">{industry.title}</h4>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            {industry.services.map((service, index) => (
                                <div key={index} className="bg-[#F4F4F4] p-3 rounded-md">
                                    <p className="font-mono text-sm uppercase leading-relaxed">{service}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}; 