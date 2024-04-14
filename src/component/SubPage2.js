import React from 'react';
import './style.css';
import Header from './Header';
import Footer from './Footer';
import Resources from './Resources';
import image from '../assets/img/message-bg.jpg';

function SubPage2() {
  return (
    <div className='subpage'>
      <Header title="POV Self Serve Platform" />
      <div class="container contact-user">
            <div class="innersec">
                <img src={image} alt="Message" />
                <h2 class="title">Thank you!</h2>
                <h3 class="subtitle">Your request has been submitted successfully!</h3>
                <div class="mailtext">The generated POV will be sent to your inbox shortly.</div>
                <div class="lasttext">For any inquiries or assistance, please feel free to contact us at: <a href="#">Click here</a></div>
            </div>
       </div>
      <Resources />
      <Footer />
    </div>
  );
}

export default SubPage2;
