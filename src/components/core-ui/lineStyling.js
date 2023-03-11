import React, { useContext } from "react";
import "./lineStyling.css";
import { ThemeContext } from "../../contexts/theme-context";

const LineStyling = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="line-styling">
      <div
        className="style-circle"
        style={{ backgroundColor: theme.buttonColor }}
      ></div>
      <div
        className="style-circle"
        style={{ backgroundColor: theme.buttonColor }}
      ></div>
      <div
        className="style-line"
        style={{ backgroundColor: theme.buttonColor }}
      ></div>
    </div>
  );
};

export default LineStyling;
