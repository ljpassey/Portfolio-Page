import React from "react";
import { HashLink as NavLink } from "react-router-hash-link";
import Typed from "react-typed";
import { headerData } from "../../../data/headerData";
import "./landing.css";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { contactsData } from "../../../data/contactsData";

function LandingUI({ theme, drawerOpen, classes }) {
  return (
    <div className="landing" style={{ backgroundColor: theme.quaternary }}>
      <div className="landing--container">
        <div
          className="landing--container-left"
          style={{ backgroundColor: theme.quaternary }}
        >
          <div className="lcl--content">
            {contactsData.linkedIn && (
              <a href={contactsData.linkedIn} target="_blank" rel="noreferrer">
                <FaLinkedin
                  className="landing--social linkedin-icon"
                  style={{ color: theme.primary }}
                  aria-label="LinkedIn"
                />
              </a>
            )}
            {contactsData.github && (
              <a href={contactsData.github} target="_blank" rel="noreferrer">
                <FaGithub
                  className="landing--social"
                  style={{ color: theme.primary }}
                  aria-label="GitHub"
                />
              </a>
            )}
          </div>
        </div>
        <img
          src={headerData.image}
          alt=""
          className="landing--img"
          style={{
            opacity: `${drawerOpen ? "0" : "1"}`,
            borderColor: theme.primary,
          }}
        />
        <div
          className="landing--container-right"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="lcr--content" style={{ color: theme.tertiary }}>
            <h6 style={{ color: theme.primary }}>{headerData.title}</h6>
            <h1>{headerData.name}</h1>
            <Typed
              strings={[
                "Full Stack Web Developer",
                "Software Engineer",
                "Amateur Guitarist",
                "Cat Dad",
                "Husband",
                "Film Photographer",
              ]}
              typeSpeed={40}
              backSpeed={60}
              className="typed-header"
              style={{ color: '#D65A31', fontSize: "25px" }}
              loop
            />
            <p>{headerData.desciption}</p>

            <div className="lcr-buttonContainer">
              {headerData.resumePdf && (
                <a
                  href={headerData.resumePdf}
                  download="resume"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className={classes.resumeBtn}>Resume</button>
                </a>
              )}
              <NavLink to="/#projects" smooth={true} spy="true" duration={2000}>
                <button className={classes.contactBtn} mouse="pointer">Projects</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingUI;
