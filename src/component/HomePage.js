import React from 'react';
import './style.css';
import Footer from './Footer';
import Resources from './Resources';
import icon01 from '../assets/img/icon01.png';
import icon02 from '../assets/img/icon02.png';
import icon03 from '../assets/img/icon03.png';
import icon04 from '../assets/img/icon04.png';
import icon05 from '../assets/img/icon05.png';

import '@spectrum-web-components/button/sp-button.js';

function HomePage() {
  return (
    <div className='homePage'>
      <div id="header">
        <div class="container">
            <h1>POV Self Serve Platform</h1>
            <h3 class="light">Craft initial sales stage POVs within minutes and leverage this content to<br/>
                facilitate customer discovery and advance deal momentum</h3>
        </div>
        <div class="video-button btn">
            <div className='btnPrimary'>
                <sp-button className="primaryBtn" href="#">Generate your POV</sp-button>
            </div>
        </div>
      </div>

      <div class="container">
          <div class="video-title">
              <h2>How to use the tool?</h2>
          </div>
                <div class="video-section">
                    <div className="video-box">
                    <div class="col-1 box">
                            <div class="icon">
                                <img src={icon01} alt="" />
                            </div>
                            <div class="title">
                                Generate POV
                            </div>
                            <div class="des">
                                Click on the "Generate your POV" button to initiate the process
                            </div>
                        </div>
                        <div class="col-1 box">
                            <div class="icon">
                                <img src={icon02} alt="" />
                            </div>
                            <div class="title">
                                Fill Intake Form
                            </div>
                            <div class="des">
                                Add details around Customer, business objectives, challenges and solutions.
                            </div>
                        </div>
                        <div class="col-1 box mailArrow">
                            <div class="icon">
                                <img src={icon03} alt="" />
                            </div>
                            <div class="title">
                                Submit request
                            </div>
                            <div class="des">
                                The output will be delivered to your email address within minutes.
                            </div>
                        </div>
                        <div class="col-1 box arrowDe">
                            <div class="icon">
                                <img src={icon04} alt="" />
                            </div>
                            <div class="title">
                                Review Output
                            </div>
                            <div class="des">
                                The PPT document will feature the POV content, tailored to your inputs.
                            </div>
                        </div>
                        <div class="col-1 box last">
                            <div class="icon">
                                <img src={icon05} alt="" />
                            </div>
                            <div class="title">
                                Provide Feedback
                            </div>
                            <div class="des">
                                Your feedback is essential to the tool's maturity. Report in case of issues or concerns
                            </div>
                        </div>
                    </div>
                    <div class="videoTitle">
                        Still confused? Follow along to see how easy it is to generate a POV. <a href="#home">Watch a video</a>
                    </div>
                </div>
            </div>

      <Resources />
      <Footer />
    </div>
  );
}

export default HomePage;