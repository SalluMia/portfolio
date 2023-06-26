import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import LinearProgress from "@material-ui/core/LinearProgress"; // Import the linear progress component from Material-UI

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "about");

  return (
    <React.Fragment>
      <Helmet>
        <title>{`About | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="about" />
        <div className="content-wrapper">
          <div className="about-container">
            <div className="about-main">
              <div className="about-right-side">
                <div className="title about-title">{INFO.about.title}</div>
                <div className="subtitle about-subtitle">
                  {INFO.about.description}
                </div>

                {/* Add the linear progress bars for each skill */}
                <div className="skills-container">
                  <div className="skill">
                    <span className="skill-title">Node.js</span>
                    <LinearProgress
                      variant="determinate"
                      value={90}
                      className="skill-progress"
                    />
                  </div>
                  <div className="skill">
                    <span className="skill-title">Express.js</span>
                    <LinearProgress
                      variant="determinate"
                      value={80}
                      className="skill-progress"
                    />
                  </div>
                  <div className="skill">
                    <span className="skill-title">React</span>
                    <LinearProgress
                      variant="determinate"
                      value={85}
                      className="skill-progress"
                    />
                  </div>
                  <div className="skill">
                    <span className="skill-title">Mongo</span>
                    <LinearProgress
                      variant="determinate"
                      value={75}
                      className="skill-progress"
                    />
                  </div>
                  <div className="skill">
                    <span className="skill-title">CSS</span>
                    <LinearProgress
                      variant="determinate"
                      value={95}
                      className="skill-progress"
                    />
                  </div>
                  <div className="skill">
                    <span className="skill-title">Material UI</span>
                    <LinearProgress
                      variant="determinate"
                      value={70}
                      className="skill-progress"
                    />
                  </div>
                </div>
              </div>

              <div className="about-left-side">
                <div className="about-image-container">
                  <div className="about-image-wrapper">
                    <img
                      src="about.jpg"
                      alt="about"
                      className="about-image"
                    />
                  </div>
                </div>

                <div className="about-socials">
                  <Socials />
                </div>
              </div>
            </div>
            <div className="about-socials-mobile">
              <Socials />
            </div>
          </div>
          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
