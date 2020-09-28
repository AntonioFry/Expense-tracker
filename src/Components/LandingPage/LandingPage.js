import React from 'react';
import './LandingPage.css';
import { landingPageData } from './landingPageData';
var demoGif = require('./expense-tracker-demo.gif')

const LandingPage = () => {
  const mappedLinks = landingPageData.socialLinks.map(obj => {
    return (
      <a className='social-link' href={obj.link}><img className="social-image" src={obj.src} alt={obj.alt}/></a>
    )
  })
  return (
    <section className="landing-page-container">
      <article className="project-info-container">
        <div className="text-container">
          <h2>Introduction</h2>
          <p className="intro-text">{landingPageData.introduction}</p>
        </div>
        <div className="gif-container">
          <img src={demoGif} alt="demo of site" />
        </div>
      </article>
      <footer className="external-links-container">
        {mappedLinks}
      </footer>
    </section>
  )
}

export default LandingPage;