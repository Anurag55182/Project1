import "./page8.css";

export default function Page8() {
  return (
    <div>
      <div className="page8">
        <div className="pg8div1">
          <button className="pg8button1">CONTACT US</button>
          <h1 className="pg8h1">
            Partner with Us for <br />
            Comprehensive IT
          </h1>
        </div>
        <p className="pg8Para1">
          We re happy to answer any questions you may have and help <br />
          you determine which of our services best fit your needs .
        </p>
        <div className="pg8Text1">Call us at: 1 800 356-8933</div>
        <div className="pg8Text1">Your Benefits:</div>
        <div id="pg8list1">
          <ul id="pg8ul">
            <li>&#10004; &nbsp; Client-oriented</li>
            <li>&#10004; &nbsp; Independent</li>
            <li>&#10004; &nbsp; Competent</li>
          </ul>
        </div>
        <div id="pg8list2">
          <ul id="pg8ul">
            <li>&#10004; &nbsp; Results-driven</li>
            <li>&#10004; &nbsp; Problem-solving</li>
            <li>&#10004; &nbsp; Transparent</li>
          </ul>
        </div>
        <div className="pg8Text1">What happens next?</div>
        <div className="pg8Flex1">
          <div className="pg8number">1</div>
          <div>
            We Schedule a call at <br />
            your convenience
          </div>
          <div className="pg8number">2</div>
          <div>
            We do a discovery <br />
            and consulting meting
          </div>
          <div className="pg8number">3</div>
          <div>
            We prepare a <br />
            proposal
          </div>
        </div>
        <div className="pg8container">
          <form action="submit">
            <div className="pg8h2">
              <h2>Schedule a free Consultation</h2>
            </div>
            <hr className="pg8hr" />

            <div className="pg8formflexbox">
              <div className="pg8Name">
                <div>
                  <label for="pg8firstname"> First Name</label>
                  <input type="text" id="pg8firstname" required />
                </div>
                <div>
                  <label for="pg8lastname"> Last Name</label>
                  <input type="text" id="pg8lastname" required />
                </div>
              </div>
              <div className="pg8container2">
                <div className="pg8flex2">
                  <label for="pg8label1"> Company / Organization</label>
                  <input type="text" id="pg8label1" required />
                </div>
                <div className="pg8flex2">
                  <label for="pg8label2"> Company email</label>
                  <input type="email" id="pg8label2" required />
                </div>
                <div className="pg8flex2">
                  <label for="pg8label3"> Phone</label>
                  <input type="tel" id="pg8label3" required />
                </div>
                <div className="pg8flex2">
                  <label for="pg8label4"> How Can We Help You?</label>
                  <input
                    type="text"
                    id="pg8label4"
                    required
                    placeholder="Select Option"
                  />
                </div>
                <div className="pg8flex2">
                  <label for="pg8label5"> Message</label>
                  <input type="text" id="pg8label5" required />
                </div>
                <div className="pg8flex2">
                  <button className="pg8button2" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
