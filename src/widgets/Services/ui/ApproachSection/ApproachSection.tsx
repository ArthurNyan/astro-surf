import React from 'react';
import { ApproachItem } from '../../../../entities/approach';

interface ApproachSectionProps {
    approachItems: ApproachItem[];
}

export const ApproachSection: React.FC<ApproachSectionProps> = ({ approachItems }) => {
    return (
        <>
            <h3 className="text-5xl font-semibold mb-10">Наш подход</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
                {approachItems.map((item) => (
                    <div key={item.id} className="flex flex-col gap-6">
                        <p className="text-sm font-mono uppercase">[ {item.id} ]</p>
                        <p className="text-2xl font-semibold leading-tight">{item.text}</p>
                    </div>
                ))}
            </div>
        </>
    );
}; 