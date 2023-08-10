import "./page4.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndustry,
  faTruckFast,
  faNotesMedical,
  faPiggyBank,
  faUsers,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
export default function Page4() {
  return (
    <div class="page4">
      <button className="pg4button1">How We Do</button>
      <div className="h1">
        Solving IT challenges in every <br />
        industry, every day.
      </div>
      <div className="lables1">
        <button className="pg4button2">
          <FontAwesomeIcon
            icon={faIndustry}
            beat
            size="xl"
            style={{ color: "#6695e5" }}
          />
          &nbsp; &nbsp;Industry & Manufacturing
        </button>
        <button className="pg4button2">
          <FontAwesomeIcon
            icon={faTruckFast}
            beat
            size="xl"
            style={{ color: "#6695e5" }}
          />
          &nbsp;&nbsp; Transportation & Logistics
        </button>
        <button className="pg4button2">
          <FontAwesomeIcon
            icon={faNotesMedical}
            beat
            size="xl"
            style={{ color: "#6695e5" }}
          />
          &nbsp;&nbsp; Healthcare
        </button>
      </div>
      <div className="lables2">
        <button className="pg4button2">
          <FontAwesomeIcon
            icon={faPiggyBank}
            beat
            size="xl"
            style={{ color: "#6695e5" }}
          />
          &nbsp;&nbsp; Bank & Insurance
        </button>
        <button className="pg4button2">
          <FontAwesomeIcon
            icon={faUsers}
            size="xl"
            beat
            style={{ color: "#6695e5" }}
          />
          &nbsp;&nbsp; Consulting Providers
        </button>
        <button className="pg4button2">
          <FontAwesomeIcon
            icon={faLightbulb}
            beat
            size="xl"
            style={{ color: "#6695e5" }}
          />
          &nbsp;&nbsp; Non Profit
        </button>
      </div>
      <div className="text">
        <u>View All Industries</u>
      </div>
    </div>
  );
}
