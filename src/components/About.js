import React, { Component } from "react";
import ME from "../imgs/ME.jpg"
//design
import styled from "styled-components"

const AboutSection = () => {
    return(
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>Darius Sparks</h2>
                    </Hide>
                    <Hide>
                        <h2>Full <span>Stack</span> Engineer</h2>
                    </Hide>
                </div>
                <p>Junior software developer consistently improving technical acumen to jumpstart a career in <span> Front-End Development</span>. 
                    Ability to build web applications utilizing <span>React</span> with advanced skills in <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span> and <span>Pyt</span><span>hon</span>. 
                    Enjoy working with a collaborative company that advocates in making a difference in the community and the world.
                </p>
                <button>Contact me</button>
            </Description>
                <Image>
                    <img src={ME} alt="me"/>
                </Image>
        </About>
    )
}

//styled component
const About = styled.div`
    min-height: 85vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 7rem;
    color: white;
    @media (max-width: 1300px){
        display: block;
        padding: 2rem 2rem;
        text-align: center;
    }

`

const Description = styled.div`
flex: 1;
    z-index: 2;
    padding-right: 2rem;
    h2{
        font-weight:lighter;
    }
    h4{
        font-family: 'Inter', sans-serif;
    }
    span:nth-child(2){
        color: #61DAFB
    }
    span:nth-child(3){
        color: #E96228
    }
    span:nth-child(4){
        color: #2965F1
    }
    span:nth-child(5){
        color: #FEDC6F
    }
    span:nth-child(6){
        color: #4D84A3
    }
    span:nth-child(7){
        color: #FEDC6F
    }
    @media (max-width: 1300px){
        padding: 0;
        button{
            margin: 2rem 0rem 5rem 0rem;
        }
    }
`

const Image = styled.div`
    flex: 0.8;
    overflow: hidden;
    z-index: 2;
    img{
        width:100%;
        height: 60vh;
        object-fit: cover;
    }
`

const Hide = styled.div`
overflow: hidden;
`

export default AboutSection;