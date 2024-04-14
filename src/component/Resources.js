import React from "react";
import '@spectrum-web-components/card/sp-card.js';
import '@spectrum-web-components/theme/sp-theme.js';
import post1 from '../assets/img/post-1.png';
import post2 from '../assets/img/post-2.png';
import post3 from '../assets/img/post-3.png';
function Resources(){
    return(
        <div class="section-two">
            <div class="container">
                    <h3 class="title">Explore other resources</h3>
                    <div class="row">
                        <div class="col-4">
                        <sp-card>
                            <img alt="" slot="cover-photo" src={post3} />
                            <div slot="subheading" className="des">
                                <span>Bespoke POV</span> Take action now! Submit your request for a bespoke POV and let our team craft a customized & detailed POV for you!</div>
                            <div slot="footer">
                                <sp-button>Submit Request</sp-button>
                            </div>
                        </sp-card>
                        </div>
                        <div class="col-4">
                            <sp-card>
                                <img alt="" slot="cover-photo" src={post2} />
                                <div slot="subheading" className="des">
                                    <span>POV Resources</span> Learn about POV Service with quick, on-demand videos and guides on our Resources Page. Get started now!</div>
                                <div slot="footer">
                                    <sp-button>Learn More</sp-button>
                                </div>
                            </sp-card>
                        </div>
                        <div class="col-4">
                            <sp-card>
                                <img alt="" slot="cover-photo" src={post1} />
                                <div slot="subheading" className="des">
                                    <span>POV Service Portal</span> Explore the POV Portal - your onestop hub for all things POV service. Checkout now and simplify your POV experience!</div>
                                <div slot="footer">
                                    <sp-button>Go to Portal</sp-button>
                                </div>
                            </sp-card>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Resources;