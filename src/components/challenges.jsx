import React from 'react'
import concurrency from '../assets/concurrency.png'
import pomodoro from '../assets/pomodoro.PNG'
import stopwatch from '../assets/stopwatch.png'
function challenges() {
  return (
    <div>
      <section id="projects">
    <div className="container">
      <div className="row">
        <h1 className="section__title">Here are some of my <span className="text--purple">Challenges</span> I have completed</h1>
        <ul className="project__list">
          <li className="project">
            <div className="project__wrapper">
              <img src={concurrency} className="project__img" alt="Concurrency project"/>
              <div className="project__description">
                <h3 className="project__description--title">Concurrency project</h3>
                <h4 className="project__description--sub-title">
                  Html, CSS, JavaScript, React
                </h4>
                <p className="project__description--para">
                 This project is about loading 100 user profiles in under 1.5 seconds and doing that is using Promise.all to call all of them at once.
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
              <img src={pomodoro} className="project__img" alt="Car subscription project"/>
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
              <img src={stopwatch} className="project__img" alt="Car subscription project"/>
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
        </ul>      
      </div>
    </div>
  </section>
    </div>
  )
}

export default challenges
