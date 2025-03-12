import React from 'react'
import SliderComponent from './SliderComponent'
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
        <SliderComponent/>      
      </div>
    </div>
  </section>
    </div>
  )
}

export default challenges
