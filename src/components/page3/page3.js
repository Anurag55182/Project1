import "./page3.css";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image 3.jpeg";
import image4 from "./images/image 4.jpeg";
import image5 from "./images/image 5.jpeg";
import image6 from "./images/image 6.jpeg";

export default function Page3() {
  return (
    <div className="page3">
      <div>
        <button className="pg3button1">How we do</button>
      </div>
      <div className="heading">
        <h1>Solutions</h1>
      </div>
      <div className="group1">
        <img src={image1} alt="jpgx" />
        <img src={image2} alt="jpgx" />
        <img src={image3} alt="jpgx" />
      </div>
      <div className="group2">
        <img src={image4} alt="jpgx" />
        <img src={image5} alt="jpgx" />
        <img src={image6} alt="jpgx" />
      </div>
      <div>
        <button className="pg3button2">View All Solutions</button>
      </div>
    </div>
  );
}
