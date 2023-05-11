import React from "react";

const ProjectPanel1 = () => {


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
            position:'absolute',
            right:'5vw',
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
        <div style={{overflow:'scroll',overflowY:'hidden',height:'100%'}}>
          <table
            style={{
              tableLayout: "fixed",
              cellPadding: "0",
              cellSpacing: "0",
              groupView: "false",
              stickLeft: "true",
            }}
          >
            <tr>
              <th style={{ width: "5vw"}}>#</th>
              <th style={{ width: "20vw"}}>Project Name</th>
              <th style={{ width: "2vw"}}>%</th>
              <th style={{ width: "10vw"}}>Owner</th>
              <th style={{ width: "15vw"}}>Status</th>
              <th style={{ width: "12vw"}}>Tasks</th>
              <th style={{ width: "12vw"}}>MileStones</th>
              <th style={{ width: "12vw"}}>StartDate</th>
              <th style={{ width: "12vw"}}>EndDate</th>
              <th style={{ width: "12vw"}}>Completed On</th>
              <th style={{ width: "12vw"}}>Layout</th>
              <th style={{ width: "12vw"}}>Group Name</th>
              <th style={{ width: "12vw"}}>Tags</th>
              <th style={{ width: "12vw"}}>Created On</th>
              <th style={{ width: "12vw"}}>Last Modified</th>
              <th style={{ width: "12vw"}}>Created By</th>
              <th style={{ width: "12vw"}}>Modified By</th>



            </tr>
            <tr>
              <td>A</td>
              <td>Standard Layout</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
            </tr>
            <tr>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
            </tr>
            <tr>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProjectPanel1;
