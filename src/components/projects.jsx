import React from 'react'
import NFT from '../assets/nft.png'

function Projects() {
  return (
    <div>
      <section id="projects">
    <div className="container">
      <div className="row">
        <h1 className="section__title">Here are some of my <span className="text--purple">Projects</span> I have completed aswell</h1>
        <ul className="project__list">
          <li className="project">
            <div className="project__wrapper">
              <img src={NFT} className="project__img" alt="Concurrency project"/>
              <a href="https://github.com/BrandenJoe/Branden-internship"  target='_blank' >

              <div className="project__description">
                <h3 className="project__description--title">NFT Project</h3>
                <h4 className="project__description--sub-title">
                  Html, CSS, JavaScript, React
                </h4>
                <p className="project__description--para">
                 This project is about turning a website fulling dyanmic with loading skeleton states, using the fetch API to get data from a server and displaying it on the page. I also used async await to make the code cleaner and more readable. I also made every image functional and authors.
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
            </div>
          </li>
          <li className="project">
            <div className="project__wrapper">
              <img src="" className="project__img" alt="Car subscription project"/>
              <div className="project__description">
                <h3 className="project__description--title">Car sales project</h3>
                <h4 className="project__description--sub-title">
                  Html, CSS, JavaScript, Vue, Vuex
                </h4>
                <p className="project__description--para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam leo, scelerisque sed odio eget,
                  luctus faucibus augue. Fusce volutpat iaculis dapibus. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Maecenas id eleifend libero. In hac habitasse platea dictumst.
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
            </div>
          </li>
          <li className="project">
            <div className="project__wrapper">
              <img src="" className="project__img" alt="Car subscription project"/>
              <div className="project__description">
                <h3 className="project__description--title">Stopwatch Challenge</h3>
                <h4 className="project__description--sub-title">
                  Html, CSS, JavaScript, Vue, Vuex
                </h4>
                <p className="project__description--para">
                 This Challenge was creating a stopwatch that could start time, reset, and pause with all of it functioning.
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
            </div>
          </li>
        </ul>      
      </div>
    </div>
  </section>
    </div>
  )
}

export default Projects
