import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Projects = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchRepos = async () => {
            const manuallyAddedRepo = {
                id: 1,
                name: 'UML Editor',
                description: 'UML Editor built using Python and various other libraries',
                clone_url: 'https://github.com/mucsci-students/2024sp-420-PythonB.git',
                html_url: 'https://github.com/mucsci-students/2024sp-420-PythonB',
                stargazers_count: 3,
                forks_count: 10,
                languages_url: 'https://api.github.com/repos/mucsci-students/2024sp-420-PythonB/languages',
                updated_at: '2024-05-29T03:00:00Z',
                owner: {
                    login: 'mucsci-students',
                },
            };

            const username = 'almostTaklu';
            const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos`);
            const sortedRepos = reposResponse.data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
            const reposWithLanguages = await Promise.all(
                sortedRepos.map(async (repo) => {
                    const languagesResponse = await axios.get(repo.languages_url);
                    return { ...repo, languages: languagesResponse.data };
                })
            );
            setRepos([manuallyAddedRepo, ...reposWithLanguages]);
        };

        fetchRepos();
    }, []);

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="projects-title">Recent Projects</h2>
                <div className="projects-list">
                    {repos.map((repo) => (
                        <div key={repo.id} className="project-item">
                            <div className="card-body">
                                <h5 className="project-title">{repo.name}</h5>
                                <p className="project-description">{repo.description}</p>
                                <div className="project-buttons">
                                    <a href={repo.clone_url} className="btn btn-outline-secondary">
                                        <i className="fab fa-github"></i> Clone Project
                                    </a>
                                    <a href={repo.html_url} className="btn btn-outline-secondary">
                                        <i className="fab fa-github"></i> Repo
                                    </a>
                                </div>
                                <hr />
                                <div className="languages">
                                    <span className="language-title">Languages: </span>
                                    {repo.languages && Object.entries(repo.languages).map(([key, value]) => (
                                        <span key={key} className="language-badge">
                                            {key}: {(value / Object.values(repo.languages).reduce((a, b) => a + b, 0) * 100).toFixed(1)}%
                                        </span>
                                    ))}
                                </div>
                                <div className="project-stats">
                                    <span className="username">@{repo.owner.login}</span>
                                    {repo.stargazers_count > 0 && (
                                        <span>
                                            <i className="fas fa-star"></i> {repo.stargazers_count}
                                        </span>
                                    )}
                                    {repo.forks_count > 0 && (
                                        <span>
                                            <i className="fas fa-code-branch"></i> {repo.forks_count}
                                        </span>
                                    )}
                                    <span className="last-updated">
                                        Updated on {new Date(repo.updated_at).toLocaleDateString()}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
