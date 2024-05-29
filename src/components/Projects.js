import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaStar, FaCodeBranch, FaGithub } from 'react-icons/fa';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const username = "almostTaklu";
  
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        const sortedRepos = response.data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        const manuallyAddedRepo = {
          id: 1,
          name: 'UML Editor',
          description: 'UML Editor built using Python and various other libraries',
          clone_url: 'https://github.com/mucsci-students/2024sp-420-PythonB.git',
          html_url: 'https://github.com/mucsci-students/2024sp-420-PythonB',
          stargazers_count: 3,
          forks_count: 0,
          languages_url: 'https://api.github.com/repos/mucsci-students/2024sp-420-PythonB/languages',
        };
        const reposWithManual = [manuallyAddedRepo, ...sortedRepos];
        
        const reposWithLanguages = await Promise.all(reposWithManual.map(async (repo) => {
          const languagesResponse = await axios.get(repo.languages_url);
          return { ...repo, languages: languagesResponse.data };
        }));
        
        setRepos(reposWithLanguages);
      } catch (error) {
        console.error('Error fetching repos:', error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <Container className="projects-section">
      <h2 className="projects-title">Recent Projects</h2>
      <Row className="projects-list">
        {repos.map((repo) => (
          <Col md={6} key={repo.id} className="d-flex">
            <Card className="project-item flex-fill">
              <Card.Body>
                <Card.Title className="project-title">{repo.name}</Card.Title>
                <Card.Text className="project-description">
                  {repo.description}
                </Card.Text>
                <div className="project-buttons">
                  <Button href={repo.clone_url} variant="outline-secondary" className="mr-2">
                    <FaGithub /> Clone Project
                  </Button>
                  <Button href={repo.html_url} variant="outline-secondary">
                    <FaGithub /> Repo
                  </Button>
                </div>
                <hr />
                <div className="languages">
                  {repo.languages && Object.entries(repo.languages).map(([language, _bytes]) => (
                    <span key={language} className="language-badge">
                      {language}
                    </span>
                  ))}
                </div>
                <div className="project-stats">
                  <span className="username">@{username}</span>
                  {repo.stargazers_count > 0 && (
                    <span>
                      <FaStar /> {repo.stargazers_count}
                    </span>
                  )}
                  {repo.forks_count > 0 && (
                    <span>
                      <FaCodeBranch /> {repo.forks_count}
                    </span>
                  )}
                </div>
                <div className="project-updated">
                  Updated on {new Date(repo.updated_at).toLocaleDateString()}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
