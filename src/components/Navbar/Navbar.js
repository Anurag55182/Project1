import "./Navbar.css";
import logo from "./Logo/logo.svg";
export default function Navbar() {
  return (
    <div>
      <nav>
        <div>
          <img src={logo} id="logo" alt="" />
        </div>
        <div className="ul">
          <ul className="navul">
            <div>
              <li className="navli">
                <a href="https://create-react-app.dev/docs/getting-started">
                  Services &#x25BE;
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
              <th>Client support &#x25BE;</th>
              <td rowspan="2">
                <button type="submit" className="button1">
                  Contact Us
                </button>
              </td>
            </tr>
            <tr>
              <td>1-800-356-8933</td>
            </tr>
          </table>
          <hr color="lightgrey" />
        </div>
      </nav>
    </div>
  );
}
