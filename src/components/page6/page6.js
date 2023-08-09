import "./page6.css";
import upstock from "./images/img1.jpg";
import nespresso from "./images/img2.png";
import underground from "./images/img3.png";

export default function Page6() {
  return (
    <div>
      <button className="pg6button1">Where we do</button>
      <h1 className="pg6h1">Success Stories</h1>
      <div className="pg6cards">
        <div className="pg6card1">
          <div className="pg6img">
            <img src={upstock} id="pg6img1" alt="jpeg" />
          </div>
          <div className="pg6h8">
            <h4>CLOUD HOSTING</h4>
          </div>
          <div className="pg6title">
            <h3>
              Major Insurance Provider Saves <br />
              $750k per Month With Big Data <br />
              Migration
            </h3>
          </div>
          <div className="pg6description">
            <p>
              The company needed to complete a complex <br />
              migration on a tight deadline to avoid millions <br />
              of dollars in post contract fees and fines.
            </p>
          </div>
          <div className="pg6para">
            <p>
              Modern infrastructure <br />
              Consulting services
            </p>
          </div>
          <div className="pg6link">
            <a href="https://upstox.com/open-demat-account/?f=4RBJVU&gclid=Cj0KCQjwn_OlBhDhARIsAG2y6zOgVuW_W4V-pKFB6xzPoJuS5vzG5z7n-RWTsc91EcM4iDteN1GQJuUaAq1vEALw_wcB">
              Learn More
            </a>
          </div>
        </div>
        <div className="pg6card2">
          <div className="pg6img">
            <img src={nespresso} id="pg6img2" alt="" />
          </div>
          <div className="pg6h8">
            <h4>IT CONSULTING</h4>
          </div>
          <div className="pg6title">
            <h3>
              Maximizing Efficiency with Proper <br />
              Technology Implementation - Coffee <br />
              Success Story
            </h3>
          </div>
          <div className="pg6description">
            <p>
              The company needed to complete a complex <br />
              migration on a tight deadline to avoid millions <br />
              of dollars in post contract fees and fines.
            </p>
          </div>
          <div className="pg6para">
            <p>
              Modern infrastructure <br />
              Consulting services
            </p>
          </div>
          <div className="pg6link">
            <a href="https://www.nespresso.com/worldofcoffee/WCP/">
              Learn More
            </a>
          </div>
        </div>
        <div className="pg6card3">
          <div className="pg6img">
            <img src={underground} id="pg6img3" alt="" />
          </div>
          <div className="pg6h8">
            <h4>MOBILE DEVELOPMENT</h4>
          </div>
          <div className="pg6title">
            <h3>
              Strategic Move to an AI-supported <br />
              application for Public Safety Travel <br />
              App in London
            </h3>
          </div>
          <div className="pg6description">
            <p>
              Travel confidently around London with maps <br />
              and live travel updates. Our reliable journey <br />
              planner will map a safe route.
            </p>
          </div>
          <div className="pg6para">
            <p>
              Modern infrastructure <br />
              Consulting services
            </p>
          </div>
          <div className="pg6link">
            <a href="https://tfl.gov.uk/modes/tube/">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
}
