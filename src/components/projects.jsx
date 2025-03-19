import React from 'react'
import NFT from '../assets/nft.png'
import MMO from '../assets/mmo.png'
import Netflix from '../assets/NetflixClone.png'

function Projects() {
  return (
    <div>
      <section id="projects">
    <div className="container">
      <div className="row">
        <h1 className="section__title">Here are some of my <span className="text--purple">Projects</span> I have completed aswell</h1>
        <ul className="project__list">
          <li className="project">
            <a 
            href="https://github.com/BrandenJoe/Branden-internship"
            target="_blank"
            rel="noopener noreferrer"
            className="project__wrapper"
            style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <img src={NFT} className="project__img" alt=""/>
             
              <div className="project__description" href="https://github.com/BrandenJoe/Branden-internship">
                <h3 className="project__description--title">NFT Project</h3>
                <h4 className="project__description--sub-title">
                  Html, CSS, JavaScript, React
                </h4>
                <p className="project__description--para">
                This project is about turning a website fully dynamic with loading skeleton states,
        using the fetch API to get data from a server and displaying it on the page.
        I also used async/await to make the code cleaner and more readable.
        Every image is functional and includes author attribution.                </p>
              </div>
              </a>
          </li>
          <li className="project">
          <a 
            href="https://github.com/BrandenJoe/mmo-react-web"
            target="_blank"
            rel="noopener noreferrer"
            className="project__wrapper"
            style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <img src={MMO} alt="Car subscription project" className="project__img"/>
              <div className="project__description">
                <h3 className="project__description--title">MMO Website</h3>
                <h4 className="project__description--sub-title">
                  Html, CSS, JavaScript, React
                </h4>
                <p className="project__description--para">
                  This project was creating a search engine for mmo games and displaying them on a website. I had a search function that filtered from A to Z and vice versa. I got the games from an API link.
                </p>
                <div className="project__description--links">
                  <a href="https://www.github.com/yourlink" target="_blank" className="project__description--link">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://www.yourwebsite.com" className="project__description--link">
                    <i className="fas fa-link"></i>
                  </a>
                </div>
              </div>
            </a>
          </li>
          <li className="project">
          <a 
            href="https://github.com/BrandenJoe/Neflix-Clone"
            target="_blank"
            rel="noopener noreferrer"
            className="project__wrapper"
            style={{ textDecoration: 'none', color: 'inherit' }}
            >
            
              <img src={Netflix} className="project__img" alt="Car subscription project"/>
              <div className="project__description">
                <h3 className="project__description--title">Netflix Clone Project</h3>
                <h4 className="project__description--sub-title">
                  Html, CSS, JavaScript, React
                </h4>
                <p className="project__description--para">
               This challenge was creating a Netflix clone with a login and fetch an api from a server and displaying it on the page. Also each image is functional and links it to the movie trailer.
                </p>
                <div className="project__description--links">
                  <a href="https://www.github.com/yourlink" target="_blank" className="project__description--link">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://www.yourwebsite.com" className="project__description--link">
                    <i className="fas fa-link"></i>
                  </a>
                </div>
              </div>
            </a>
          </li>
        </ul>      
      </div>
    </div>
  </section>
    </div>
  )
}

export default Projects
