import "./Navbar.css";
export default function Navbar() {
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
                  Client Support &rarr; <i className="bi bi-arrow-right"></i>
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
                <span className="navspan">
                  <b>1-800-356-8933</b>
                </span>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <hr />
    </div>
  );
}
