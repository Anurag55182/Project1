import "./page2.css";

export default function Page2() {
  return (
    <div>
      <div className="Page2">
        <div className="pg2container1">
          <button className="pg2button1">WHAT WE DO</button>
          <h1 className="pg2h1">
            Simplifying IT <br />
            for a complex world.
          </h1>
        </div>
        <div className="pg2container2">
          <div className="pg2card">
            <div className="pg2img">
              <img
                src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/Cost-effectiveness.svg"
                className="pg2logo"
                alt=""
              />
            </div>
            <div className="pg2h2">
              <h2>Cost-Effectiveness</h2>
            </div>
            <div className="pg2p1">
              We offer affordable IT solutions that <br />
              help you reduce costs and improve your <br />
              bottom line.
            </div>
          </div>
          <div className="pg2card">
            <div className="pg2img">
              <img
                src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/Innovative.svg"
                className="pg2logo"
                alt=""
              />
            </div>
            <div className="pg2h2">
              <h2>Innovative Technology</h2>
            </div>
            <div className="pg2p1">
              We stay up to date with the latest <br />
              technology trends and offer innovative <br />
              solutions that help you stay ahead of <br />
              the competition.
            </div>
          </div>
          <div className="pg2card">
            <div className="pg2img">
              <img
                src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/Industry.svg"
                className="pg2logo"
                alt=""
              />
            </div>
            <div className="pg2h2">
              <h2>Industry Expertise</h2>
            </div>
            <div className="pg2p1">
              We specialize in serving specific <br />
              industries, such as healthcare, finance, <br />
              or manufacturing, and offer tailored <br />
              solutions that meet your unique needs.
            </div>
          </div>
          <div className="pg2card">
            <div className="pg2img">
              <img
                src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/Scalability.svg"
                className="pg2logo"
                alt=""
              />
            </div>
            <div className="pg2h2">
              <h2>Scalability</h2>
            </div>
            <div className="pg2p1">
              Our solutions are scalable and can grow <br />
              with your business, ensuring that you <br />
              get the most value out of your <br />
              investment .
            </div>
          </div>
        </div>
        <hr className="pg2hr" />
      </div>
    </div>
  );
}
