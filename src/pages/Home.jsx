import React from 'react';
import '../App.css'; // Make sure this is correctly imported

const Home = () => {
  return (
    <div className="app">
      <div className="content">
        <div className="container text-white">
          <br></br>
          <h5 className="mt-4 heading" style={{ paddingTop: 20 }}> Welcome to My World</h5>
          <div className="row" style={{ marginTop: 20 }}>
            <div className="col-md-6 col-sm-12">
              <h4 className="headingname">
                Hello, I'm <span className="name-highlight">Shalini Rajput</span><br />
                a professional Junior Software Developer
              </h4>
              <h6 className="detail">
                  Motivated software developer with 1years plus of experience working on web-based applications using C#, .NET Framework, and SQL. Comfortable working with .NET Core for modern application development and experienced in using Entity Framework for database operations. Skilled in front-end technologies including HTML, CSS, and Bootstrap, enabling the creation of responsive and user-centric interfaces. Known for a strong analytical mindset, attention to detail, and a commitment to writing efficient, maintainable code.              </h6>
              <br /><br /><br /><br />
              <h6 className="detail">FIND WITH ME</h6>
              <ul className="contact-list">
                <li>Phone: 8279551734</li>
                <li>Email: shalinipfl2002@gmail.com</li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-12 d-flex justify-content-center mt-5 mt-md-0">
            <img src="/SR.jpg" alt="Profile" className="rounded-circle img-fluid shadow" style={{width: '70%',height: '60%',objectFit: 'cover',border: '3px solid white',marginTop: '-5px', }} />
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

export default Home;
