import "./Footer1.css";
export default function Footer1() {
  return (
    <div className="footer1">
      <div>
        <div className="f1p">
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
