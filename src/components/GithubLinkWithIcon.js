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
    fontSize: "1.1rem",
    fontWeight: "600",
    "&:hover": {
      filter:
        "invert(48%) sepia(13%) saturate(3207%) hue-rotate(360deg) brightness(100%) contrast(190%)",
    },
  },
  gitLogo: {
    width: "40px",
    height: "40px",
    marginRight: "2px",
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
    <div className="container-git-link">
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
