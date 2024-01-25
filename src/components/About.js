import React, { Component } from "react";
import ME from "../imgs/ME.jpg"

const AboutSection = () => {
    return(
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>Darius Sparks</h2>
                    </div>
                    <div className="hide">
                        <h2>Full <span>Stack</span> Engineer</h2>
                    </div>
                </div>
                <p>Junior software developer consistently improving technical acumen to jumpstart a career in <span> Front-End Development</span>. 
                    Ability to build web applications utilizing <span>React</span> with advanced skills in <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span> and <span>Pyt</span><span>hon</span>. 
                    Enjoy working with a collaborative company that advocates in making a difference in the community and the world.
                </p>
                <button>Contact me</button>
                <div className="image">
                    <img src={ME} alt="me"/>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;