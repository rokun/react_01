import React from 'react';

function Footer() {
  return (
    <div class="section-footer-top">
        <div class="container">
            <div class="row">
                <div class="col-9">
                    <div class="footer-top-text">
                        <h4>Share your feedback  to help us grow</h4> 
                        To keep improving the POV Self Serve Tool we need your insights. Please inform of missing solutions or any  other data discrepancies. We appreciate your feedback!

                    </div>
                </div>
                <div class="col-3">
                    <div class="footer-bottom-btn">
                        <sp-button>Provide Feedback</sp-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright">
            <div class="container">Copyright © 2023 Adobe Systems Incorporated. All rights reserved.</div> 
        </div>
    </div>
  );
}

export default Footer;