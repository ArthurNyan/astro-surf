import { IndustriesSection } from './IndustriesSection';
import { ServicesSection } from './ServicesSection';
import { ApproachSection } from './ApproachSection';
import { ProjectsSection } from './ProjectsSection';

import { industries } from '../../../entities/industry';
import { services } from '../../../entities/service';
import { approachItems } from '../../../entities/approach';
import { projects } from '../../../entities/project';

export const Services = () => {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="mb-20">
                    <IndustriesSection industries={industries} />
                    <ServicesSection services={services} />
                    <ApproachSection approachItems={approachItems} />
                    <ProjectsSection projects={projects} />
                </div>
            </div>
        </section>
    );
}; 