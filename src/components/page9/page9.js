import "./page9.css";
import Img1 from "./images/img1.png";
import Img2 from "./images/img2.png";
import Img3 from "./images/img3.png";
import Img4 from "./images/img4.png";
import Img5 from "./images/img5.jpg";
import Img6 from "./images/img6.jpg";
import Img7 from "./images/img7.png";
import Img8 from "./images/img8.png";

export default function Page9() {
  return (
    <div>
      <div className="pg9container1">
        <div>
          <button className="pg9button1">Where We Do</button>
        </div>
        <div>
          <h1 className="pg9h1">Recognised by the best</h1>
        </div>
        <div className="pg9para1">
          <p className="pg9para1">
            The company needed to complete a complex <br />
            migration on a tight deadline to avoid millions of <br />
            dollars in post contract fees and fines.
          </p>
        </div>
      </div>
      <div className="pg9container2">
        <img id="pg9img1" src={Img1} alt="jpg" />
        <img id="pg9img2" src={Img2} alt="jpg" />
        <img id="pg9img3" src={Img3} alt="jpg" />
        <img id="pg9img4" src={Img4} alt="jpg" />
        <img id="pg9img5" src={Img5} alt="jpg" />
        <img id="pg9img6" src={Img6} alt="jpg" />
        <img id="pg9img7" src={Img7} alt="jpg" />
        <img id="pg9img8" src={Img8} alt="jpg" />
      </div>
      <div className="pg9container3">
        <h1 className="pg9h2">Solutions</h1>
        <div className="pg9listA">
          <div className="pg9list1">
            <ul className="pg9ul">
              <li className="pg9li">Managed Services</li>
              <li className="pg9li">IT Consulting & Advisory</li>
              <li className="pg9li">Cyber Security</li>
              <li className="pg9li">Web Development</li>
            </ul>
          </div>
          <div className="pg9list2">
            <ul className="pg9ul">
              <li className="pg9li">Mobile Development</li>
              <li className="pg9li">Cloud Services</li>
              <li className="pg9li">Network Connectivity</li>
              <li className="pg9li">ERP Solutions</li>
            </ul>
          </div>
        </div>
        <h1 className="pg9h2">Company</h1>
        <div className="pg9listB">
          <div className="pg9list1">
            <ul className="pg9ul">
              <li className="pg9li">About us</li>
              <li className="pg9li">Why Us</li>
              <li className="pg9li">Team</li>
              <li className="pg9li">Career</li>
              <li className="pg9li">Partners & Certifications</li>
              <li className="pg9li">Reviews & Awards</li>
            </ul>
          </div>
          <div className="pg9list2">
            <ul className="pg9ul">
              <li className="pg9li">Blog</li>
              <li className="pg9li">Case Studies</li>
              <li className="pg9li">Events</li>
              <li className="pg9li">FAQs</li>
            </ul>
          </div>
        </div>
        <div className="pg9logo">
          <h1>LOGOIPUSIM</h1>
        </div>
        <button className="pg9button2">Schedule Consultation</button>
      </div>
    </div>
  );
}
