import React from 'react'

function languages() {
  return (
    <div>
  <section id="languages">
    <div className="container">
      <div className="row">
        <h1 className="section__title">This is my <span className="text--purple">technology stack</span></h1>
        <div className="language__list">
          <div className="language">
            <figure className="language__img--wrapper">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png"
                alt="Html Logo" className="language__img" />
            </figure>
            <span className="language__name">HTML</span>
          </div>
          <div className="language">
            <figure className="language__img--wrapper">
              <img src="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png" alt="CSS Logo"
                className="language__img" />
            </figure>
            <span className="language__name">CSS</span>
          </div>
          <div className="language">
            <figure className="language__img--wrapper">
              <img src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png" alt="JavaScript Logo"
                className="language__img" />
            </figure>
            <span className="language__name">JavaScript</span>
          </div>
          <div className="language">
            <figure className="language__img--wrapper">
              <img src="https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png" alt="React Logo"
                className="language__img" />
            </figure>
            <span className="language__name">React</span>
          </div>
        </div>
      </div>
    </div>
  </section>      
      
    </div>
  )
}

export default languages
