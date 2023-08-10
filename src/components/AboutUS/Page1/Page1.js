import "./Page1.css";
export default function Page1() {
  return (
    <div>
      <div className="navbar">
        <div>
          <img
            src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/logo.svg"
            id="logo"
            alt=""
          />
        </div>
        <div className="ul">
          <ul className="navul">
            <div>
              <li className="navli">
                <a href="https://create-react-app.dev/docs/getting-started">
                  Solutions &#x25BE;
                </a>
              </li>
            </div>
            <div>
              <li className="navli">
                <a href="https://create-react-app.dev/docs/getting-started">
                  Company &#x25BE;
                </a>
              </li>
            </div>
            <div>
              <li className="navli">
                <a href="https://create-react-app.dev/docs/getting-started">
                  Case studies
                </a>
              </li>
            </div>
            <div>
              <li className="navli">
                <a href="https://create-react-app.dev/docs/getting-started">
                  Blog
                </a>
              </li>
            </div>
            <div>
              <li className="navli">
                <a href="https://create-react-app.dev/docs/getting-started">
                  Resources &#x25BE;
                </a>
              </li>
            </div>
          </ul>
        </div>
        <div id="table">
          <table>
            <tr>
              <th>
                <button className="navbutton2">
                  Client Support <i className="bi bi-arrow-right"></i>
                </button>
              </th>
              <td rowspan="2">
                <button type="submit" className="navbutton">
                  Contact Us
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <span className="navspan">1-800-356-8933</span>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <hr color="lightgrey" />

      <div className="container1">
        <div className="AbtButton1">
          <button className="button1">ABOUT</button>
        </div>
        <div className="AbtH1">
          <h1 className="h1">Dedicated to delivering excellence</h1>
        </div>
        <div className="AbtH2">
          <h2 className="h2">Everyone has a story. Here is ours.</h2>
        </div>
      </div>
      <div className="container2">
        <div className="Card1">
          <div className="Img1">
            <img
              src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/charlesdeluvio-Lks7vei-eAg-unsplash.jpg"
              id="img1"
              alt="jpg"
            />
          </div>
          <div className="box">
            <div>
              <h3 className="h3">Mission</h3>
              <div className="p1">
                <p>
                  At Tecnologia, we’re on a mission to bring <br />
                  together the personal service of local IT <br />
                  providers with the power of a national <br />
                  network. We believe that’s simpler than it <br />
                  sounds. Our offices offer high-touch IT <br />
                  services that clients love from highly <br />
                  experienced local team members.
                </p>
              </div>
            </div>
          </div>
          <div className="Img2">
            <img
              src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/desola-lanre-ologun-IgUR1iX0mqM-unsplash.jpg"
              id="img3"
              alt="jpg"
            />
          </div>
        </div>
        <div className="scrollbar">S</div>
        <div className="Card2">
          <div className="box">
            <h3 className="h3">The Begining</h3>
            <div className="p1">
              <p>
                The Tecnologia journey began in 1995 <br />
                when two college friends, John Salivan and <br />
                Kris Klopperman got together and started <br />
                selling computers and engineering <br />
                calculators.
              </p>
            </div>
          </div>
          <div className="Img1">
            <img
              src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/austin-distel-wD1LRb9OeEo-unsplash.jpg"
              id="img2"
              alt="jpg"
            />
          </div>
          <div className="box">
            <h3 className="h3">We are global</h3>
            <div className="p1">
              <p>
                Our national network allows us to offer <br />
                best-in-className services like dedicated vCIOs, <br />
                specialized security and compliance <br />
                advisory services, a 24/7 help desk, and <br />
                more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
