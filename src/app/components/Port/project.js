import React from 'react';


const Project = ({project}) => {
  return (
    <div className="projecs-item">
      <a href={project.url}>{project.name}</a>
      <div>{project.detail}</div>
    </div>
  )
};

export default Project;