import Navbar from "./components/Navbar/Navbar.js";
import Homepage from "./components/Home Page/homepage.js";
import Footer1 from "./components/Footer1/Footer1.js";
import Page2 from "./components/page2/page2.js";
import Page3 from "./components/page3/page3.js";
import Page4 from "./components/page4/page4.js";
import Page5 from "./components/page5/page5.js";
import Page6 from "./components/page6/page6.js";
import Page7 from "./components/page7/page7.js";
import Page8 from "./components/page8/page8.js";
import Page9 from "./components/page9/page9.js";
import Footer2 from "./components/Footer2/footer2.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <Homepage></Homepage>
        <Footer1></Footer1>
        <Page2></Page2>
        <Page3></Page3>
        <Page4></Page4>
        <Page5></Page5>
        <Page6></Page6>
        <Page7></Page7>
        <Page8></Page8>
        <Page9></Page9>
        <Footer2></Footer2>
      </header>
    </div>
  );
}

export default App;
