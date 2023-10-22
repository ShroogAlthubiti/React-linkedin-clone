import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import "./Widgets.css";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function Widgets() {
  const newArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
       <FiberManualRecordIcon/>
      </div>
      <div className="widgets__articleRight">
        <h2>{heading}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newArticle("Shroog is the best!!", "Top news - 555 readers")}
      {newArticle("PHP ", "Top news - 555 readers")}
      {newArticle("Shroog is the best!!", "Top news - 555 readers")}
      {newArticle("Shroog is the best!!", "Top news - 555 readers")}
      {newArticle("Shroog is the best!!", "Top news - 555 readers")}
    </div>
  );
}

export default Widgets;
