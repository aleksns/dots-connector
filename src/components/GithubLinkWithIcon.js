import React from "react";
import { makeStyles, Link } from "@material-ui/core";
import GitLogo from "../images/github-icon.png";
import "../App.css";

const useStyles = makeStyles((theme) => ({
  gitLink: {
    position: "relative",
    top: "-5px",
    right: "-5px",
    textDecoration: "none",
    color: "#ffffff",
    fontFamily: "Century Gothic",
    fontSize: "1.1rem",
    fontWeight: "600",
    "&:hover": {
      filter:
        "invert(48%) sepia(13%) saturate(3207%) hue-rotate(170deg) brightness(100%) contrast(90%)",
    },
  },
  gitLogo: {
    position: "relative",
    top: "5px",
    right: "5px",
    width: "40px",
    height: "40px",
  },
}));

export default function GithubLinkWithIcon() {
  const gitUrl = "https://github.com/aleksns";
  const classes = useStyles();

  const openInNewTab = () => {
    const newWindow = window.open(gitUrl, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="git-link-box">
      <Link
        className={classes.gitLink}
        component="button"
        underline="disabled"
        onClick={openInNewTab}
      >
        <img src={GitLogo} className={classes.gitLogo}></img>Github: Aleksns
      </Link>
    </div>
  );
}
