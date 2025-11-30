import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsGrid = ({ projects }) => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-16">
            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </div>
    );
};

export default ProjectsGrid;
