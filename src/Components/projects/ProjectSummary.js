import React from "react";
function ProjectSummary(props) {
  const id = props.match.params.id;
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">Project Title {id}</span>
        <p>
          Vivid point live yet life her problem nobody because formula
          representing religious prophecy manifest. Vivid hero day manifestation
          far portrays heroic due to his to anyone demise heroic day due to
          anyone been as life specifically story. Whereas for her given life
          doom inevitable ergo her instill doom in as case presents inevitable
          fact faces time so. Some depict given without personal defined faces
          his depict such tragic faces.
        </p>
        <hr />
        <p className="grey-text">Posted by Sanjali Gautam</p>
        <p className="grey-text">27th August</p>
      </div>
    </div>
  );
}
export default ProjectSummary;
