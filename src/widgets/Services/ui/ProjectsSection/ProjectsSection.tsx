import type { Project } from '../../../../entities/project';

interface ProjectsSectionProps {
    projects: Project[];
    gridCols?: 2 | 3 | 4;
}

export const ProjectsSection = ({
    projects,
    gridCols = 4
}: ProjectsSectionProps) => (
    <div>
        <h3 className="text-5xl font-semibold mb-10">Проекты</h3>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${gridCols} gap-5 mb-20`}>
            {projects.map((project) => (
                <div key={project.id} className="flex flex-col gap-6">
                    <div className="bg-[#F9F4EB] h-[470px] flex items-center justify-center rounded-md">
                        <img src={project.image} alt={project.title} />
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                        <p className="text-gray-700">{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);