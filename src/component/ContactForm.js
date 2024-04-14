import React, { useState } from 'react';

const tabTitles = [
    { title: "Customer Details", subtitle: "Please furnish valid customer details, including the name & DR ID, for accurate output" },
    { title: "Business Objectives", subtitle: "Please select top three business objectives for the customer" },
    { title: "Challenges", subtitle: "Please select top three challenges being faced by the customer currently" },
    { title: "Solutions", subtitle: "Please select  up to 3 solutions and a max of 6 sub capabilities across to be part of the output" }
  ];
  
  function ContactForm() {
    const [currentTab, setCurrentTab] = useState(0);
    const totalTabs = tabTitles.length;
  
    const showTab = (tabNumber) => {
      if (tabNumber !== currentTab) {
        setCurrentTab(tabNumber);
      }
      updateButtonVisibility();
      updateSubmitButton();
    };
  
    const showPreviousTab = (event) => {
      event.preventDefault();
      const previousTab = currentTab - 1;
      if (previousTab >= 0) {
        setCurrentTab(previousTab);
      }
    };
  
    const showNextTab = (event) => {
      event.preventDefault();
      const nextTab = currentTab + 1;
      if (nextTab < totalTabs) {
        setCurrentTab(nextTab);
      }
    };
  
    const updateButtonVisibility = () => {
      const previousButton = document.getElementsByClassName("back")[0];
      const nextButton = document.getElementsByClassName("next")[0];
  
      previousButton.style.display = currentTab === 0 ? "none" : "inline-block";
      nextButton.style.display = currentTab === totalTabs - 1 ? "none" : "inline-block";
    };
  
    const updateSubmitButton = () => {
      const submitButton = document.getElementsByClassName("btn")[0];
      submitButton.classList.toggle("active", currentTab === totalTabs - 1);
    };
  
    return (
      <div className="contact-form">
        <div className="container">
          <h2 className="form-title">Generate Point of View (POV)</h2>
          <div className="form-start">
            <form action="#">
              <div className="tab-container">
                {tabTitles.map((tab, index) => (
                  <div key={index} className={`tab ${index === currentTab ? 'active' : ''}`} onClick={() => showTab(index)}>
                    {tab.title}
                    <span className="subtitle">{tab.subtitle}</span>
                  </div>
                ))}
              </div>
              <div className="all-tab-message">
                *Required Fields
              </div>
              {tabTitles.map((tab, index) => (
                <div key={index} className={`tab-content ${index === currentTab ? 'active-content' : ''}`} id={`tab${index}`}>
                  {tab.title} content will here
                </div>
              ))}
              <div className="button-container">
                <input type="reset" value="Reset" />
                <div className="right-side">
                  <button className="back" style={{ display: currentTab === 0 ? 'none' : 'inline-block' }} onClick={showPreviousTab}>Previous</button>
                  <button className="next" style={{ display: currentTab === totalTabs - 1 ? 'none' : 'inline-block' }} onClick={showNextTab}>Next</button>
                  <input type="submit" className={`btn ${currentTab === totalTabs - 1 ? 'active' : ''}`} value="Submit" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

export default ContactForm;