
import { FaLock, FaLockOpen, FaUser, FaAngleLeft } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";
import React, { useState } from "react";
import "../Assets/css/login.css";

const First = () => {
  return (
    <div className="login-form">
      <div class="login-field">
        <i class="login-icon fas fa-user"> </i>
        <input type="text" class="login-input" placeholder="Name" />
      </div>
      <div class="login-field ">
        <input type="email" class="login-input" placeholder="Email" />
      </div>
      <div class="login-field ">
        <input type="password" class="login-input" placeholder="Password" />
      </div>
    </div>
  );
};
const Second = () => {
  return (
    <div>
      <div className="login-form">
        <div class="login-field ">
          <input
            type="text"
            class="login-input"
            placeholder="Select Username"
          />
        </div>
        <div class="login-field ">
          <input type="text" class="login-input" placeholder="Phone" />
        </div>
        <div class="login-field ">
          <input type="text" class="login-input" placeholder="DOB " />
        </div>
        <div class="login-field ">
          <input type="text" class="login-input" placeholder="College " />
        </div>
      </div>
    </div>
  );
};

const Saved = () => {
  const [showComponent1, setShowComponent1] = useState(true);

  const handleButtonClick = () => {
    setShowComponent1(!showComponent1);
  };

  const img1 =
    "https://github.com/AnuragRoshan/images/blob/main/23.jpg?raw=truecd c ";
  return (
    <div className="login-top">
      <div>
        <div className="login-form-top display-flex-row">
          <div
            className="login-form-right"
            style={{ paddingInlineStart: "1rem" }}
          >
            <div className="login-title">
              <h2>SIGN UP</h2>
            </div>
            <div>
              <CSSTransition
                in={showComponent1}
                classNames="component-transition"
                unmountOnExit
              >
                <First />
              </CSSTransition>

              <CSSTransition
                in={!showComponent1}
                classNames="component-transition"
                unmountOnExit
              >
                <div>
                  <div
                    style={{
                      marginBlockStart: "1rem",
                      marginBlock: "auto",
                      width: "10%",
                      // border: "1px solid grey",
                      height: "2rem",
                    }}
                  >
                    <div
                      style={{
                        margin: "0.3rem auto ",
                        cursor: "pointer",
                      }}
                    >
                      <FaAngleLeft onClick={handleButtonClick} />
                    </div>
                  </div>
                  <Second />
                </div>
              </CSSTransition>
            </div>
            <div className="">
              <button onClick={handleButtonClick} type="submit" className="btn">
                Continue
              </button>
            </div>
          </div>
          <div className="login-form-right">
            <div className="">
              <img src={img1} alt="" srcset="" />
            </div>
            <div className="login-new-user">
              New User ? <a href="">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saved;
