import React from "react";
import { Link } from "react-router-dom";
const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title " style={{ color: "black" }}>
          {project.title}
        </span>

        <p>Posted by {project.user}</p>
        <p className="grey-text">{project.time}</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
