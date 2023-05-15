//6 project cards inside.
import React from "react";
import { MDBBadge } from "mdb-react-ui-kit";
import "./pages.css";

import BlogPost from "../assets/BlogPost.JPG";
import weatherForcast from "../assets/weatherForcast.JPG";
import WorkDaySchedule from "../assets/WorkDaySchedule.JPG";
import passwordGeneratorScreenshot from "../assets/passwordGeneratorScreenshot.png";
import BasicPortfolio from "../assets/BasicPortfolio.JPG";
import GeographicalQuiz from "../assets/GeographicalQuiz.JPG";

//JSX 6 cards.
export default function Portfolio() {
  return (
    <div class="row row-cols-1 row-cols-sm-3 g-4">
      <div className="col">
        <div className="card w-60 h-40 m-5">
          <img
            className="imgScreenshot"
            src={BlogPost}
            class="card-img-top"
            alt="Palm Springs Road"
          />
          <div className="card-body">
            <h5 className="card-title">Blogging Application</h5>
            <p className="card-text">
              An application to post the blogs save them and access the user accounts.
            </p>
            <div className="d-flex justify-content-evenly">
              <a
                href="https://blogtech.herokuapp.com/"
                className="btn btn-primary"
              >
                APP
              </a>
              <a
                href="https://github.com/KINGALI112/Blog-Tech"
                className="btn btn-primary"
              >
                GITHUB
              </a>
            </div>
            <div className="maifrigoTechnologies">
              <MDBBadge pill className="mx-2" color="info" light>
                Node JS
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Javascript
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                SQL
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Express JS
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                API - Server Side
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                JWT Authentification
              </MDBBadge>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card w-60 h-40 m-5">
          <img
            className="imgScreenshot"
            src={weatherForcast}
            class="card-img-top"
            alt="Hollywood Sign on The Hill"
          />
          <div className="card-body">
            <h5 className="card-title">Weather Forcast Application</h5>
            <p className="card-text">
              Built using a third-party server-side Weather API, search for your
              your 5 day weather conditions of your favourite cities
            </p>
            <div className="d-flex justify-content-evenly">
              {/* links to github and deployed app */}
              <a
                href="https://kingali112.github.io/WeatherAPI/#"
                className="btn btn-primary"
              >
                App
              </a>
              <a
                href="https://github.com/KINGALI112/WeatherAPI"
                className="btn btn-primary"
              >
                Github
              </a>
            </div>
            <MDBBadge
              pill
              className="mx-2"
              color="info"
              light
              style={{ margin: "23px" }}
            >
              HTML5
            </MDBBadge>
            <MDBBadge
              pill
              className="mx-2"
              color="info"
              light
              style={{ margin: "23px" }}
            >
              CSS
            </MDBBadge>
            <MDBBadge
              pill
              className="mx-2"
              color="info"
              light
              style={{ margin: "23px" }}
            >
              JavaScript
            </MDBBadge>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card w-60 h-40 m-5">
          <img
            className="imgScreenshot"
            src={BasicPortfolio}
            class="card-img-top"
            alt="Palm Springs Road"
          />
          <div className="card-body">
            <h5 className="card-title">Basic Portfolio</h5>
            <p className="card-text">
              A basic version of portfolio application to showcast the projects made in the bootcamp.
            </p>
            <div className="d-flex justify-content-evenly">
              <a
                href="https://kingali112.github.io/Portfolio-Challenge-2/"
                className="btn btn-primary"
              >
                App
              </a>
              <a
                href="https://github.com/KINGALI112/Portfolio-Challenge-2"
                className="btn btn-primary"
              >
                Github
              </a>
            </div>
            <div className="textEdTechnologies">
              <MDBBadge pill className="mx-2" color="info" light>
                JavaScript
              </MDBBadge>
             
              <MDBBadge pill className="mx-2" color="info" light>
                HTML
              </MDBBadge>
             
              <MDBBadge pill className="mx-2" color="info" light>
                CSS
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Bootstrap
              </MDBBadge>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card w-60 h-40 m-5">
          <img
            className="imgScreenshot"
            src={GeographicalQuiz}
            class="card-img-top"
            alt="Palm Springs Road"
          />
          <div className="card-body">
            <h5 className="card-title">Geographical Quiz Challenge</h5>
            <p className="card-text">
              An application that is used to built 
            </p>
            <div className="d-flex justify-content-evenly">
              <a
                href="https://kingali112.github.io/Geography-Quiz/"
                className="btn btn-primary"
              >
                APP
              </a>
              <a
                href="https://github.com/KINGALI112/Geography-Quiz"
                className="btn btn-primary"
              >
                Github
              </a>
            </div>
            <div className="organiseMyShopStockTechnologies">
              <MDBBadge pill className="mx-2" color="info" light>
                Node JS
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                JavaScript
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                MySQL
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                API- Client Side
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Express JS
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Sequelize
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Insomnia
              </MDBBadge>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card w-60 h-40 m-5">
          <img
            className="imgScreenshot"
            src={WorkDaySchedule}
            class="card-img-top"
            alt="Los Angeles Skyscrapers"
          />
          <div className="card-body">
            <h5 className="card-title">Work Day Schedule</h5>
            <p className="card-text">
              An app built with JavaScript, using a client-side API,this is a
              colour-coded schedule app, allowing you to save events in a
              calender.
            </p>
            <div className="d-flex justify-content-evenly">
              <a
                href="https://kingali112.github.io/Callender-Challenge/"
                className="btn btn-primary"
              >
                App
              </a>
              <a
                href="https://github.com/KINGALI112/Callender-Challenge"
                className="btn btn-primary"
              >
                Github
              </a>
            </div>
            <div className="scheduleMyLifeTechnologies">
              <MDBBadge pill className="mx-2" color="info" light>
                HTML5
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                CSS
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                JavaScript
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                JQuery
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Moment JS
              </MDBBadge>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card w-60 h-40 m-5">
          <img
            className="imgScreenshot"
            src={passwordGeneratorScreenshot}
            class="card-img-top"
            alt="Skyscrapers"
          />
          <div className="card-body">
            <h5 className="card-title">Generate My Password App</h5>
            <p className="card-text">
              This app was created with JavaScript, it allows the user to
              generate a random password for websites.
            </p>
            <div className="d-flex justify-content-evenly">
              <a
                href="https://github.com/KINGALI112/PasswordGeneratorCL"
                className="btn btn-primary"
              >
                App
              </a>
              <a
                href="https://github.com/KINGALI112/PasswordGeneratorCL"
                className="btn btn-primary"
              >
                Github
              </a>
            </div>
            <div className="generateMyPasswordTechnologies">
              <MDBBadge pill className="mx-2" color="info" light>
                HTML5
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                CSS
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                JavaScript
              </MDBBadge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
