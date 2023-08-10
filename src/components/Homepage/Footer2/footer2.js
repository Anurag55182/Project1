import "./footer2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer2() {
  return (
    <div>
      <div className="Footer2">
        <div className="footer2A">
          <div>
            <div className="f2p">
              <span className="f1span1">REVIEWED ON</span>
              <img
                src="http://upperlimbtrauma.org/img/stars-red.png"
                id="stars"
                alt="jpg"
              />{" "}
              <br />
              <img
                src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/clutch-logo.svg"
                alt="jpg"
                id="f1img1"
              />
              <span className="f1span2"> 31 REVIEWS</span>
            </div>
          </div>
          <div className="f1vertical1"></div>
          <div className="footer2Para1">
            Seventh Ave, 20th Floor <br />
            New York, NY 10018
          </div>
          <div className="f1vertical1"></div>
          <div className="footer2Para1">
            T: 1-800-356-8933 <br />
            E: office@dummy.com
          </div>
        </div>
        <div className="footer2B">
          <div className="footer2Icon">
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
          </div>
          <div className="footer2Icon">
            <FontAwesomeIcon icon={faTwitter} size="2xl" />
          </div>
          <div className="footer2Icon">
            <FontAwesomeIcon icon={faFacebook} size="2xl" />
          </div>
          <div className="footer2Icon">
            <FontAwesomeIcon icon={faInstagram} size="2xl" />
          </div>
        </div>
      </div>
      <div className="footer2C">
        &#169; 2023 Terms & Conditions &nbsp; &nbsp; Privacy Policy
      </div>
    </div>
  );
}
