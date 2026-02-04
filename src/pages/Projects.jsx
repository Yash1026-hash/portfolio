import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects, categories } from '../data/projects';
import ProjectDetailCard from '../components/ProjectDetailCard';
import ProjectModal from '../components/ProjectModal';
import CategoryFilter from '../components/CategoryFilter';
import Footer from '../components/Footer';

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <div className="projects-page">
            {/* Page Header */}
            <div className="page-header">
                <Link to="/" className="back-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    <span>Back</span>
                </Link>

                <div className="page-title-section">
                    <h1 className="page-title">Projects</h1>
                </div>

                <p className="page-description">
                    A collection of research, AI/ML, and web development projects
                    that blend technology with purpose.
                </p>
            </div>

            {/* Category Filter */}
            <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
            />

            {/* Projects Grid */}
            <div className="projects-grid">
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        onClick={() => setSelectedProject(project)}
                        className="project-card-wrapper"
                    >
                        <ProjectDetailCard project={project} />
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
                <div className="empty-state">
                    <p>No projects found in this category.</p>
                </div>
            )}

            {/* Footer */}
            <div className="projects-footer">
                <Footer />
            </div>

            {/* Project Modal */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </div>
    );
}
