import styles from "./Main2.module.css";
import myImage from "../image/logo1.png";
import yImage from "../image/logo2.png";
import Image from "../image/logo3.png";
import I from "../image/logo4.png";
import Im from "../image/logo5.png";
import Ima from "../image/logo6.png";
const Main2 = () => {

  return <>
    <div className="service" style={{
      height: "80px",
      backgroundColor: "white",

    }}>
      <h6 style={{
        textAlign: 'center',
        color: "orange",
      }}>Welcome to Rigesterkaro.in</h6>
      <h2 style={{
        textAlign: 'center',

      }} >Explore Our Service</h2>

      <br />
      <br />



      <ul className={styles.con2}>
        <li> <img src={myImage} alt="My Image" className="w-96 h-auto" />
          <h6>Company formet</h6>
          <p>Build web-based solution that <br /> enhances customer experience.</p>
          <br />
          <button class="btn btn-warning rounded-pill px-3" type="button">Learn More</button>
        </li>
        <li><img src={yImage} alt="My Image" className="w-96 h-auto" />
          <h6>Company Secretarial Services </h6>
          <p> Make data-driven decisions and <br />utilize <br /> technology to reach business goals.</p>
          <br />
          <button class="btn btn-warning rounded-pill px-3" type="button">Learn More</button>
        </li>
        <li><img src={Image} alt="My Image" className="w-96 h-auto" />
          <h6>Virtual Office Address </h6>
          <p>Foster Customer Relationships by <br /> effectively serving your market. </p>
          <br />
          <button class="btn btn-warning rounded-pill px-3" type="button">Learn More</button>
        </li>
      </ul>

      <br />

      <ul className={styles.con2}>
        <li><img src={I} alt="My Image" className="w-96 h-auto" />
          <h6>Annual Compliance Services </h6>
          <p>turn your ideas into modern <br />Products With Our Design Experts.</p>
          <br />
          <button class="btn btn-warning rounded-pill px-3" type="button">Learn More</button>
        </li>
        <li><img src={Im} alt="My Image" className="w-96 h-auto" />
          <h6>Payroll Services </h6>
          <p>Expand your business across <br /> the <br />globe with minimal effort.</p>
          <br />
          <button class="btn btn-warning rounded-pill px-3" type="button">Learn More</button>
        </li>
        <li><img src={Ima} alt="My Image" className="w-96 h-auto" />
          <h6> Bookkeeping Services</h6>
          <p> Steering user behaviours with<br /> creative<br /> design, data insights & technology</p>
          <br />
          <button class="btn btn-warning rounded-pill px-3" type="button">Learn More</button>
        </li>
      </ul>
      <br />
      <br />

      <div className="d-flex justify-content-center align-items-center vh-60">
        <button className="btn btn-primary rounded-pill px-3" type="button">
          See All Services
        </button>
      </div>
      <br />
      <br />

      <div className={styles.footer1}>
        <div className={styles.footer}>
          <div className="footer-first">
            <h3>develop by abhishek</h3>
          </div>
          <div className="footer-second">
            <ul className={styles.ull}>
              <li>Home</li>
              <li>About</li>
              <li>Experience</li>
              <li>Contect</li>
            </ul>
          </div>

          <div className="footer-third">
            <ul className={styles.ull}>
              <li>Home</li>
              <li>About</li>
              <li>Experience</li>
              <li>Contect</li>
            </ul>
          </div>

          <div className="footer-fourth">
            <ul className={styles.ull}>
              <li>Home</li>
              <li>About</li>
              <li>Experience</li>
              <li>Contect</li>
            </ul>
          </div>
        </div>
        <br />
        <div className="footer-rights" style={{
          textAlign: "center",
        }}>
          copyright &#169;| all rights reserverd
        </div>

      </div>




    </div >



  </>
}

export default Main2