import React, { Component } from "react";
import experience1 from "../imgs/experience1.png"
import aboutmeicon from "../imgs/aboutmeicon.png"
import stairs from "../imgs/stairs.jpg"

const ExperienceSection = () => {
    return(
        <div className="experiences">
            <div className="description">
                <h1>Experience</h1>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={experience1}/>
                            <h3>Eduction</h3>
                        </div>
                        <p> Full Stack Developer Certificate from Coding Dojo, Web Development classes from De Anza CC, self study through courses online such as Dev Ed, Udemey, and more.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={aboutmeicon}/>
                            <h3>Experience</h3>
                        </div>
                        <p> Super Micro Computer, Inc - San Jose,CA </p>
                        <p> ISE Labs - Fremont, CA</p>
                        <p> Athelas - Mountain View, CA </p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={experience1}/>
                            <h3>Eduction</h3>
                        </div>
                        <p> Full Stack Developer Certificate from Coding Dojo, Web Development classes from De Anza CC, self study through courses online such as Dev Ed, Udemey, and more.</p>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={stairs} />
            </div>
        </div>
    )

}

export default ExperienceSection;