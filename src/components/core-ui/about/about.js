import { Container } from "@mui/material";
import React, { useContext } from "react";
import codings from "../../../assets/lottie/coding.json";
import { ThemeContext } from "../../../contexts/theme-context";
import { aboutData } from "../../../data/aboutData";
import AnimationLottie from "../../helper/animation-lottie";
import "./about.css";
import secondImage from "../../../assets/image/img2.jpeg";
import LineStyling from "../lineStyling";

function About({ drawerOpen, classes }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: theme.secondary }}>
      <Container className="about" id="about">
       
        <LineStyling />
        <div
          className="about-body"
          style={{
            height: "100%",
            justifyContent: "space-between",
            margin: "10px",
          }}
        >
          <div
            className="about-description"
            style={{
              width: "80%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h2 style={{ color: theme.orange }}>{aboutData.title}</h2>
            <p style={{ color: theme.tertiary }}>
              {aboutData.description1}
              <br />
              <br />
              {aboutData.description2}
            </p>
          </div>
          <div>
            <img
              src={secondImage}
              className="about-image"
              alt=""
              style={{
                width: "100%",
                border: `solid 5px ${theme.orange}`,
                boxSizing: "border-box",
                borderRadius: "20px",
              }}
            />
          </div>
          {/* <div className="about-animation">
            <AnimationLottie animationPath={codings} />
          </div> */}
        </div>
      </Container>
    </div>
  );
}

export default About;
