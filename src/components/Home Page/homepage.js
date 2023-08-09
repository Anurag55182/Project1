import "./homepage.css";

import building from "./images/icon1.jpg";
import people from "./images/icon2.png";
export default function Homepage() {
  return (
    <div>
      <div className="homepageBlock1">
        <div className="Para1">
          <p>
            We Build, Operate,
            <br />
            Transform your <br />
            businesses <span id="Digitally">Digitally</span>
          </p>
        </div>
        <div className="Para2">
          <p>
            Take charge of your business continuity <br />
            with innovative IT solutions
          </p>
        </div>
        <div className="buttons">
          <button type="submit" className="button2">
            Schedule a free consultation
          </button>
          <button type="submit" className="button3">
            Services
          </button>
        </div>
      </div>
      <div>
        <form action="#">
          <div className="form1">
            <div>
              <p id="para3">Get a quote from our experts.</p>
            </div>
            <div>
              <p id="para4">
                Find the Services you need and recieve quotes <br />
                from our team of Specialists.
              </p>
            </div>
            <div>
              <input type="text" id="search1" required />
            </div>
            <div>
              <input
                type="tell"
                id="number"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </div>
            <div>
              <button type="submit" className="button4">
                Submit and Next
              </button>
            </div>
            <div className="Tables">
              <div>
                <table id="agencies">
                  <tr>
                    <td rowSpan={2}>
                      <img src={building} className="icon" alt="building" />
                    </td>
                    <th>1000</th>
                  </tr>
                  <tr>
                    <td className="td">Agencies</td>
                  </tr>
                </table>
              </div>
              <div>
                <table id="clients">
                  <tr>
                    <td rowSpan={2}>
                      <img src={people} className="icon" alt="building" />
                    </td>
                    <th>1000</th>
                  </tr>
                  <tr>
                    <td className="td">Clients</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </form>
      </div>

      <hr className="homepageHr" color="lightgray" />
    </div>
  );
}
