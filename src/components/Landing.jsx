import React  from 'react'
import Me from '../assets/me.jpeg'
function Landing() {
  return (
 <section>
<div className="flex flex-1">
<div className="about-me__info row">
  <div className="about-me__info--container">
    <figure className="about-me__picture--mask">
      <img src={Me}  className="about-me__picture" alt="Picture of Me!" />
    </figure>
    <h1 className="about-me__info--title">
      Hey! I'm <span className="text--purple">Branden</span>&nbsp;<span className="wave">👋</span>
    </h1>
    <p className="about-me__info--para">
      I'm a <strong className="text--purple">frontend software engineer</strong> with a strong passion for building
      responsive and performant web
      applications with great user experiences that positively impacts the world.
    </p>
    <div className="about-me__links">
      <a href="" className="about-me__link">
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a href="" className="about-me__link">
        <i className="fab fa-github"></i>
      </a>
      <a href="" className="about-me__link">
        <i className="far fa-envelope"></i>
      </a>
      <a href="./assets/Example Resume.pdf" target="_blank" className="about-me__link">
        <i className="fas fa-file-pdf"></i>
      </a>
    </div>
  </div>
  <figure className="about-me__img--container">
    <img src="./assets/undraw_websites.svg" className="about-me__img" alt=""/>
  </figure>
</div>
</div>
</section>
  )
}

export default Landing

