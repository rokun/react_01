import React from 'react';
import './style.css';
import Header from './Header';
import ContactForm from './ContactForm';
import Footer from './Footer';

function SubPage1() {
  return (
    <div className='subpage'>
      <Header title="POV Self Serve Platform" />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default SubPage1;
