import React from "react";
import "animate.css";
import TrackVisibility from "react-on-screen";

// import skill data
import { skills } from "../data";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="d-flex align-items-center justify-content-evenly">
        {skills.map((skill, index) => {
          return (
            <TrackVisibility once>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__fadeIn animate__slower	2s"
                      : ""
                  }
                >
                  <div className="flex items-center justify-center" key={index}>
                    <img className="lg:h-20" src={skill.image} alt="" />
                  </div>
                </div>
              )}
            </TrackVisibility>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
