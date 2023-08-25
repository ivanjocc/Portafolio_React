import React, { useState, useEffect } from 'react';
import '../styles/ProjectList.css';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(6);
  const [filterName, setFilterName] = useState('');
  const [filterLanguage, setFilterLanguage] = useState('');

  useEffect(() => {
    fetch('https://api.github.com/users/ivanjocc/repos')
      .then(response => response.json())
      .then(data => {
        // Filter repositories to show only public ones
        const publicProjects = data.filter(repo => !repo.private);
        setProjects(publicProjects);
      });
  }, []);

  // List of unique programming languages
  const uniqueLanguages = Array.from(
    new Set(projects.map(project => project.language))
  ).filter(language => language);

  // Filter by name and language
  const filteredProjects = projects.filter(project => {
    return (
      project.name.toLowerCase().includes(filterName.toLowerCase()) &&
      (filterLanguage === '' || project.language === filterLanguage)
    );
  });

  // Pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <section className="project-list-container" id="projects">
      <div className="project-list-content">
        <h2 className="project-list-heading">My Projects</h2>
        <div className="project-list-filters">
          <input
            type="text"
            placeholder="Filter by name"
            value={filterName}
            onChange={e => setFilterName(e.target.value)}
          />
          <select
            value={filterLanguage}
            onChange={e => setFilterLanguage(e.target.value)}
          >
            <option value="">All languages</option>
            {uniqueLanguages.map(language => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </select>
        </div>
        <div className="projects">
          {currentProjects.map(project => (
            <div key={project.id} className="project">
              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-language">
                Language: {project.language || 'Not specified'}
              </p>
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
        <div className="pagination">
          {Array.from({ length: Math.ceil(filteredProjects.length / projectsPerPage) }).map((_, index) => (
            <span
              key={index}
              className={`pagination-link ${currentPage === index + 1 ? 'active' : ''}`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
