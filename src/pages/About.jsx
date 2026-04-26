// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
     <div className="app">
      <div className="content">
        <div className="container text-white c1">
          <div className="row d-flex gap-5">
             <div className="col-md-7">
                <h4 className="headingname">Education</h4>
                <hr className="section-hr" />
                 <br></br>
              <ul className="edu-list">
                  <li>
                    <img src="/school.png" alt="GLA University Logo" className="school-logo" />
                    <strong>2022–2024:</strong> Master of Computer Applications – GLA University
                  </li>
                  <li>
                    <img src="/school.png" alt="JS University Logo" className="school-logo" />
                    <strong>2019–2022:</strong> Bachelor of Science – JS University
                  </li>
                  <li>
                    <img src="/school.png" alt="UP Board Logo" className="school-logo" />
                    <strong>2018–2019:</strong> Senior Secondary (PCM) – UP Board
                  </li>
                  <li>
                    <img src="/school.png" alt="CBSE Logo" className="school-logo" />
                    <strong>2016–2017:</strong> High School – CBSE Board
                  </li>
              </ul>
             </div>
             <div className="col-md-4">
              <h4 className="headingname">Certificate</h4>
              <hr className="section-hr" />
              <br></br>
              <ul className="certificate-list">
                  <li>CCC Diploma</li>
                  <li>AI Tool Certificate</li>
                  <li>3 Months Internship <br></br>
                      (8 Jan 2024 to 8 April 2024)
                  </li>
                </ul>
             </div>
          </div>
          <br></br>
          <hr></hr>
          <br></br>
          <div className="row d-flex gap-5">
            <div className="col-md-6 col-sm-12">
              <h4 className="headingname">Technical Skills</h4>
              <br></br>
              <ul className="skill-list">
                  <li>
                    <img src="/dotnet.jpg" alt=".NET Logo" className="tec-logo" />
                    <span>.NET Framework</span>
                  </li>
                  <li>
                    <img src="/dotnetcore.png" alt=".NET core Logo" className="tec-logo" />
                    <span>.NET Core Framework</span>
                  </li>
                  <li>
                    <img src="/mvc.png" alt="mvc Logo" className="tec-logo" />
                    <span>MVC Framework</span>
                  </li>
                  <li>
                    <img src="/csharp.png" alt="c# Logo" className="tec-logo" />
                    <span>C# (OOps)</span>
                  </li>
                  <li>
                    <img src="/sql.jpg" alt="sql Logo" className="tec-logo" />
                    <span>SQL [Structure Query Language]</span>
                  </li>
                  <li>
                    <img src="/hcj11.jpeg" alt="Hcj Logo" className="tec-logo" />
                    <span>HTML,CSS & JavaScript</span>
                  </li>
                  <li>
                    <img src="/json.jpg" alt="json Logo" className="tec-logo" />
                    <span>Json [JavaScript Object Notation]</span>
                  </li>
                  <li>
                    <img src="/reactjs.png" alt="react Logo" className="tec-logo" />
                    <span>React Js</span>
                  </li>
                </ul>
            </div>
            <div className="col-md-5 col-sm-12">
              <h4 className="headingname">Technical Skills</h4>
              <br></br>
             <ul className="pskill-list">
                  <li>
                    <img src="/skills1.jpeg" alt="icon" className="tec-logo"/>
                    <span>Team Work</span>
                  </li>
                  <li>
                    <img src="/skills1.jpeg" alt="icon" className="tec-logo"/>
                    <span>Creativity</span>
                  </li>
                  <li>
                    <img src="/skills1.jpeg" alt="icon" className="tec-logo"/>
                    <span>Positive Attitude</span>
                  </li>
                  <li>
                    <img src="/skills1.jpeg" alt="icon" className="tec-logo"/>
                    <span>Problem Solving</span>
                  </li>
                  <li>
                    <img src="/skills1.jpeg" alt="icon" className="tec-logo"/>
                    <span>Discipline</span>
                  </li>
                  <li>
                    <img src="/skills1.jpeg" alt="icon" className="tec-logo"/>
                    <span>Time Punctual</span>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
          &copy; {new Date().getFullYear()} Shalini Rajput. All rights reserved.
        </footer>
    </div>
  );
};

export default About;
