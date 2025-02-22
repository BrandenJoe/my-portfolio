import React from 'react'

function languages() {
  return (
    <div>
  <section id="languages">
    <div class="container">
      <div class="row">
        <h1 class="section__title">This is my <span class="text--purple">technology stack</span></h1>
        <div class="language__list">
          <div class="language">
            <figure class="language__img--wrapper">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png"
                alt="Html Logo" class="language__img" />
            </figure>
            <span class="language__name">HTML</span>
          </div>
          <div class="language">
            <figure class="language__img--wrapper">
              <img src="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png" alt="CSS Logo"
                class="language__img" />
            </figure>
            <span class="language__name">CSS</span>
          </div>
          <div class="language">
            <figure class="language__img--wrapper">
              <img src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png" alt="JavaScript Logo"
                class="language__img" />
            </figure>
            <span class="language__name">JavaScript</span>
          </div>
          <div class="language">
            <figure class="language__img--wrapper">
              <img src="https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png" alt="React Logo"
                class="language__img" />
            </figure>
            <span class="language__name">React</span>
          </div>
        </div>
      </div>
    </div>
  </section>      
      
    </div>
  )
}

export default languages
