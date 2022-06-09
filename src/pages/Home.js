import React from "react";

import GithubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "../Styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        
        <h2> Hi👋, My name is Alok Kumar</h2>
        <div className="prompt">
          <p>A Front-end developer with a passion for learning and creating.</p>
          <a href="https://www.linkedin.com/in/alok-kumar-937840190/">
            <LinkedInIcon />
          </a>
          <a href="#">
            <EmailIcon />
          </a>
          <a href="https://github.com/Alokoct21">
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol class="list">
          <li class="item">
            <h2 class="headline">Front-End</h2>
            <span>
              HTML, CSS, JAVASCRIPT, BOOTSTRAP, REACTJS, MATRIALUI, NPM
            </span>
          </li>
          <li class="item">
            <h2 class="headline">Languages</h2>
            <span>JavaScript, Java, C++</span>
          </li>
          <li class="item">
            <h2 class="headline">Software & Tools</h2>
            <span>GITHUB, VISUAL STUDIO</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
