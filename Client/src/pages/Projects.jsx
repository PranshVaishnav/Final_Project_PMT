import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../Assets/css/project.css";
import ProjectPanel1 from "./ProjectPanel1";
import ProjectPanel2 from "./ProjectPanel2";
import ProjectPanel3 from "./ProjectPanel3";

const Projects = () => {
  const[projectPage,setProjectPage]=useState(0);
  


  useEffect(()=>{
   
  },[]);

  return (
    <div
      className="project-top"
      style={{ padding: "2rem", fontFamily: "Montserrat" }}
    >
      <div
        className="project-InnerTop"
        style={{
          boxShadow: "0 0 6px rgb(0 0 0 / 30%)",
          backgroundColor: "white",
          borderRadius: "5px",
          height: "100%",
        }}
      >
        <div style={{ padding: "2rem" }}>
          <div
            style={{
              paddingInline: "1rem",
              paddingBlockStart: "1rem",
              fontWeight: "500",
              fontSize: "1.8rem",
            }}
          >
            Projects
          </div>
          <div
            style={{
              paddingInline: "1rem",
              paddingBlockStart: "1rem",
              color: "grey",
            }}
            className="box"
          >
            <div className="sec"><span onClick={() => setProjectPage(0)} value="Project">Project</span></div>
            <div className="sec"><span onClick={() => setProjectPage(1)} value="Project TimeLine">Project TimeLine</span></div>
            <div className="sec"><span onClick={() => setProjectPage(2)} value="Project Option 2">Project Option 2</span></div>
          </div>

          <hr style={{ marginInlineStart: "1rem" }} />
          {projectPage===0 && <ProjectPanel1/>}
          {projectPage===1 && <ProjectPanel2/>}
          {projectPage===2 && <ProjectPanel3/>}
        </div>
      </div>
    </div>
  );
};

export default Projects;
