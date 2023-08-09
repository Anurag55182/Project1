import "./footer2.css";
import Icon from "./images/clutch.png";
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
          <div className="footer2table">
            <table>
              <tr>
                <td className="f1td">REVIEWED ON</td>
                <td className="f1stars">
                  &nbsp; &#128970;&#128970;&#128970;&#128970;&#128970;
                </td>
              </tr>
              <tr>
                <td>
                  <img src={Icon} id="f1img1" alt="jpeg" />
                </td>
                <td className="f1td">&nbsp; &nbsp; 31 REVIEWS</td>
              </tr>
            </table>
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
