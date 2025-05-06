import { ProjectsSection } from '../../Services/ui/ProjectsSection';
import { fintechProjects } from '../../../entities/fintechProject';

export const FintechProjects = () => {

    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="mb-6">
                    <p className="text-sm font-mono uppercase">[ Разработка ]</p>
                </div>

                <ProjectsSection
                    projects={fintechProjects}
                    gridCols={3}
                />
            </div>
        </section>
    );
}; 