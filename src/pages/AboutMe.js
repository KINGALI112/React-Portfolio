import React from "react";
import "../pages";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

// profile picture and about me
import ProfilePic from "../assets/Hammad.png";

export default function AboutMe() {
  return (
    <div>
      <div>
        <div className="aboutMe aboutMeContainer">
          <img
            src={ProfilePic}
            className="profile-picture"
            alt="profile"
            style={{
              paddingTop: "35px",
            }}
          />
          <p
            className="aboutMe text"
            style={{
              paddingTop: "35px",
              fontSize: "20px",
            }}
          >
            Hi there, I'm Hammad, and I am a frontend web developer.
            {/* <br />
        I am excited to solve real-world problems with my applications.
        <br />
        I have recently completed a full-stack web development course at the
        University of Birmingham.
        <br />
        This is where I gained invaluable experience in React JS, Javascript{" "}
        <br />
        TypeScript, APIs as well as HTML and CSS. */}
            <br />
            You are welcome to look around.
            <br />
            Email me at kingali112@gmail.com
            <br />
            <span>
              <a href="https://github.com/kingali112">GitHub {"   "} </a>
            </span>
            <span>
              <a href="https://www.linkedin.com">
                LinkedIn {"   "}
              </a>
            </span>
            <span>
              <a href="add CV Link here!!!!">
                CV{"   "}
              </a>
            </span>
        
            <br />
          </p>
        </div>
        <MDBCard
          alignment="center"
          className="myBackgroundcard w-auto p-3 text-start"
        >
          <MDBCardHeader>Let's work together</MDBCardHeader>
          <MDBCardBody style={{ backgroundColor: "#F2FCFA" }}>
            <MDBCardTitle>My Background</MDBCardTitle>
            <MDBCardText className="myBackgroundText">
              Full-stack web developer with a teaching background. Focused on building practical, intuitive and user-friendly web applications which solve real-world problems, with emphasis on mobile-first design and development. Experience in JavaScript, Bootstrap, React.js, MongoDB, NoSQL, SQL, Express.js, React j.s and Node.js, as well as responsive web design. Soft-skills gained from previous employment include project management, leadership, teamwork and communication. I’m excited to use my skills as part of a quality-driven team to build better experiences for web-users.
              <br />
              <br />

              My other interests include language learning, especially new languages and sports. I have also been mastering boxing for 5 years.
            </MDBCardText>
           
          </MDBCardBody>
          <MDBCardFooter className="text-muted"></MDBCardFooter>
        </MDBCard>
      </div>
    </div>
  );
}
