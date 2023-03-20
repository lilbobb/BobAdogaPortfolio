import React from "react";
import pic from "../profilePhoto.jpg";

const Home = () => {
  return (
    <div>
      <section className="main-container">
        <section className="hero">
          <div className="hero-El">
            <h1>
              Hi, I am Robert, <br />
              Creative Technologist
            </h1>
            <p>
              I'm a Software Engineer, currently studying Software Engineering
              at AltSchool of Africa. I'm passionate about sharing knowledge,
              documentation, web engineering, and others. I promote admirable
              leadership.
            </p>
            <div>
              <a href="files/Robert'CV.pdf " download="Robert's CV">
                <button>Download CV</button>
              </a>
            </div>
          </div>
          <div>
            <img src={pic} alt="profilePhoto" />;
          </div>
        </section>
        <section className="second-div">
          <p className="para">Recent Works </p>
          <div className="second-template">
            <div className="section-2-div1">
              <h1>Setup a Counter App with useReducer and a Custom Hook</h1>
              <p id="para2">Nov 2022 | Design, Pattern</p>
              <p>
                A counter app that allows user to increment, decrement, set
                value and reset a value, using Custom hook and useReducer.
              </p>
            </div>
            <div className="section-2-div1">
              <h1>Fetching Randomuser using randomuser.me</h1>
              <p id="para2">September 2022 </p>
              <p>
                An API call that renders random users and their details using
                Randomuser.me API
              </p>
            </div>
          </div>
        </section>
        <section className="third-div">
          <p id="para">Featured works</p>
          <div className="dashboard-design">
            <div className="third-template">
              <div className="section-3-div1">
                <h1>Phonie: Identify telecoms carrier from a phone number</h1>

                <button className="btn">2022</button>
                <h3>Phonie(a hackaton)</h3>

                <p>
                  implementing HTML form field Pattern attribute to restrict
                  phone numbers to a certain carrier, e.g restrict to only
                  Airtel such that entering an MTN/GLO number would be invalid
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="third-div small">
          <div className="dashboard-design">
            <div className="third-template">
              <div className="section-3-div1">
                <h1>Random Password Generator</h1>

                <button className="btn">2022</button>
                <h3>Password Generator</h3>

                <p>
                  implementing a random password generator cast a random numbers
                  (in the range 0..1) to a base36 string (lowercase a-z plus
                  0-9), and then fetch the first 12 characters after the leading
                  zero and decimal point.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};
export default Home;
