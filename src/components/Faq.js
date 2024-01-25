import React, { Component } from "react";

const FaqSection = () => {
    return (
        <div className="core skills">
            <h2>Core Skills</h2>
            <div className="question">
                <h3>Software</h3>
                <div className="answer">
                    <p>Visual Studio Code, Adobe Creative Cloud, Adobe Illustrator, Adobe InDesign</p>
                </div>
            </div>
            <div className="question">
                <h3>Languages</h3>
                <div className="answer">
                    <p>JavaScript(ES6), Python, Java, CSS, HTML</p>
                </div>
            </div>
            <div className="question">
                <h3>Front End</h3>
                <div className="answer">
                    <p>React, Angular, jQuery, AJAX, JSON, RESTful APIs, Bootstrap, Spring</p>
                </div>
            </div>
            <div className="question">
                <h3>Back End</h3>
                <div className="answer">
                    <p>Node.js, Express, Django, Flask, AWS, Socket.io, OOP</p>
                </div>
            </div>
            <div className="question">
                <h3>Database</h3>
                <div className="answer">
                    <p>SQL (MySQL, SQLite), NoSQL (MongoDB), Mongoose, Django ORM</p>
                </div>
            </div>
        </div>
    )
}

export default FaqSection;