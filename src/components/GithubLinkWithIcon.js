import React from "react";
import { makeStyles, Link } from "@material-ui/core";
import GitLogo from "../images/github-icon.png";
import "../App.css";

const useStyles = makeStyles((theme) => ({
  gitLink: {
    position: "absolute",
    bottom: "0",
    color: "#ffffff",
    fontFamily: "Century Gothic",
    // fontSize: "1.1rem",
    fontWeight: "600",
    "&:hover": {
      filter:
        "invert(48%) sepia(13%) saturate(3207%) hue-rotate(360deg) brightness(100%) contrast(190%)",
    },
  }
}));

export default function GithubLinkWithIcon() {
  const gitUrl = "https://github.com/aleksns";
  const classes = useStyles();

  const openInNewTab = () => {
    const newWindow = window.open(gitUrl, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="container-git-link">
      <Link
        className={`git-text ${classes.gitLink}`}
        component="button"
        underline="none"
        onClick={openInNewTab}
      >
        <img src={GitLogo} className="git-logo"></img>Github: Aleksns
      </Link>
    </div>
  );
}
