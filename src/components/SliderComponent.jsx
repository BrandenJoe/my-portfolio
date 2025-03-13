import React from 'react'
import Slider from 'react-slick'
import concurrency from '../assets/concurrency.png'
import pomodoro from '../assets/pomodoro.PNG'
import stopwatch from '../assets/stopwatch.png'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './SliderComponent.css' // Import the CSS file


function SliderComponent() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 2,
      speed: 500
    };

  return (
    <div className="slider-container">
    <Slider {...settings}>
      <div className="project">
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
      </div>
      <div className="project">
        <div className="project__wrapper">
          <img src={pomodoro} className="project__img" alt="Pomodoro project"/>
          <div className="project__description">
            <h3 className="project__description--title">Pomodoro project</h3>
            <h4 className="project__description--sub-title">
              Html, CSS, JavaScript, Vue, Vuex
            </h4>
            <p className="project__description--para">
              This challenge is about creating a pomodoro clock that counts down from 25 minutes and you can reset it or stop it.
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
      </div>
      <div className="project">
        <div className="project__wrapper">
          <img src={stopwatch} className="project__img" alt="Stopwatch project"/>
          <div className="project__description">
            <h3 className="project__description--title">Stopwatch project</h3>
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
      </div>
    </Slider>
  </div>
  )
}

export default SliderComponent