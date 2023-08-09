import "./Footer1.css";
import Clutch from "./images/clutch.png";
export default function Footer1() {
  return (
    <div className="footer1">
      <div className="f1table1">
        <table>
          <tr>
            <td className="f1td">REVIEWED ON</td>
            <td className="f1stars">
              &nbsp; &#128970;&#128970;&#128970;&#128970;&#128970;
            </td>
          </tr>
          <tr>
            <td>
              <img src={Clutch} id="f1img1" alt="jpeg" />
            </td>
            <td className="f1td">&nbsp; &nbsp; 31 REVIEWS</td>
          </tr>
        </table>
      </div>
      <div className="f1vertical1"></div>
      <div>
        <h2 className="f1h2">
          {" "}
          <span className="f1no1">20</span>{" "}
          <span className="f1text1">Years</span>{" "}
        </h2>
        <span className="f1text2">Proven Track Record</span>
      </div>
      <div className="f1vertical1"></div>
      <div>
        <h2 className="f1h2">
          <span className="f1no1">98</span> <span className="f1text1">%</span>{" "}
        </h2>
        <span className="f1text2">Customer Satisfaction</span>
      </div>
      <div className="f1vertical1"></div>
      <div>
        <h2 className="f1h2">
          <span className="f1no1">1,500</span>{" "}
          <span className="f1text1">Projects</span>{" "}
        </h2>
        <span className="f1text2">We Have Completed</span>
      </div>
      <div className="f1vertical1"></div>

      <div>
        <h2 className="f1h2">
          <span className="f1no1">3</span> <span className="f1text1">Mins</span>{" "}
        </h2>
        <span className="f1text2">Average Answer Time</span>
      </div>
    </div>
  );
}
