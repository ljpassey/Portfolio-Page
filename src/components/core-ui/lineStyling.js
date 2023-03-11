import React, { useContext } from "react";
import "./lineStyling.css";
import { ThemeContext } from "../../contexts/theme-context";

const LineStyling = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="line-styling">
      <div
        className="style-circle"
        style={{ backgroundColor: theme.primary }}
      ></div>
      <div
        className="style-circle"
        style={{ backgroundColor: theme.primary }}
      ></div>
      <div
        className="style-line"
        style={{ backgroundColor: theme.primary }}
      ></div>
    </div>
  );
};

export default LineStyling;
