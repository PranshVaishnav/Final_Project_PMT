import React from "react";

const ProjectPanel2 = () => {
  return (
    <div>
      <div
        style={{
          paddingInline: "1rem",
          paddingBlockStart: "1rem",
          display: "flex",
          paddingBottom: "2%",
        }}
      >
        <div
          className="btn"
          style={{
            width: "fit-content",
            height: "fit-content",
            marginRight: "2rem",
            marginTop: "0 ",
            padding: "0.5rem",
            backgroundColor: "black",
            fontSize: "0.8rem",
          }}
        >
          New Project
        </div>
        <div
          className="btn"
          style={{
            width: "fit-content",
            height: "fit-content",
            marginRight: "2rem",
            marginTop: "0 ",
            padding: "0.5rem",
            backgroundColor: "black",
            fontSize: "0.8rem",
          }}
        >
          Bookmark
        </div>
        <div
          className="btn"
          style={{
            width: "fit-content",
            height: "fit-content",
            marginRight: "2rem",
            marginTop: "0 ",
            padding: "0.5rem",
            backgroundColor: "black",
            fontSize: "0.8rem",
          }}
        >
          My Projects
        </div>
        <input
          type="text"
          style={{
            width: "fit-content",
            textDecoration: "none",
            marginLeft: "55%",
            alignSelf: "right",
            textAlign: "right",
          }}
          name=""
          id=""
        />
      </div>
      <div
        style={{
          paddingInline: "1rem",
          paddingBlockStart: "1rem",
        }}
      >
      </div>
    </div>
  );
};

export default ProjectPanel2;
