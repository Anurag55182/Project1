import "./page7.css";
import logo from "./images/img1.jpg";
import Google from "./images/img2.jpg";
import pg6Clutch from "./images/clutch.png";

export default function Page7() {
  return (
    <div className="pg7">
      <img src={logo} id="pg7img1" alt="jpg" />
      <p className="pg7p1">
        Tecnologia implemented such a powerful platform that <br />
        we had no break in service when our employees had to <br />
        work from home due to the COVID-19 pandemic. We <br />
        weren't concerned about how to shift to a remote <br />
        working environment because Integris facilitated a <br />
        seamless transition.
      </p>
      <h4 className="pg7h4">Amanda Parks</h4>
      <div className="pg7text">Network Manager , Healthcare Organization</div>
      <div className="pg7table1">
        <table>
          <tr>
            <td className="pg7td">REVIEWED ON</td>
            <td className="pg7stars">
              &nbsp; &#128970;&#128970;&#128970;&#128970;&#128970;
            </td>
          </tr>
          <tr className="pg7tr">
            <td>
              <img src={pg6Clutch} id="pg7img2" alt="jpeg" />
            </td>
            <td className="pg7td">&nbsp; &nbsp; 31 REVIEWS</td>
          </tr>
        </table>
      </div>
      <div className="Google">
        <img src={Google} id="pg7img3" alt="jpeg" />
      </div>
    </div>
  );
}
