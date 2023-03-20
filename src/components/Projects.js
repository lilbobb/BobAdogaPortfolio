import React, { useEffect, useState } from "react";



const Projects = () => {
      const [repos, setRepos] = useState([]);
      const [page, setPage] = useState(1);
    
      useEffect(() => {
        async function fetchRepos() {
          const response = await fetch(
            `https://api.github.com/users/lilbobb/repos?page=${page}&per_page=5`
          );
          const data = await response.json();
          setRepos(data);
        }
    
        fetchRepos();
      }, [page]);
    
      const handlePageChange = (newPage) => {
        setPage(newPage);
      };
    
      return (
        <div className="repolist">
          <h1>My GitHub Repositories</h1>
          <ul>
            {repos.map((repo) => (
              <li key={repo.id}>
              <a href={`https://github.com/${repo.owner.login}/${repo.name}`}>
                {repo.name}
              </a>
              </li>
            ))}
          </ul>
          <div>
            <button onClick={() => handlePageChange(page - 1)}>Prev</button>
            <button onClick={() => handlePageChange(page + 1)}>Next</button>
          </div>
        </div>
      );
};

export default Projects;

