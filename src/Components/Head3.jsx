import styles from "./Head3.module.css";
import i4 from "../image/i4.jpg";


const Head3 = () => {

  return <div className={styles.main}
    style={{ backgroundImage: `url(${i4})` }} >
    <div className={styles.mainin}>
      <h3 >
        Best Service. Best Products.
        <br />
        Be Happy &amp; Be Safe.
      </h3>
      <br />
      <h6>
        VERY LOW COST PRICE AVLABLE.
        <br />
        GET LOW PRICE FOR PRODUCTS AND SERVICES.
      </h6>
    </div>
    <div className="cont">
      <ul className={styles.content}>
        <li><input type="email" class="form-control" id="exampleFormControlInput1" placeholder="your name" /></li>
        <li><input type="email" class="form-control" id="exampleFormControlInput1" placeholder="your number" /></li>
        <li><input type="email" class="form-control" id="exampleFormControlInput1" placeholder="your email" /></li>
        <li><button class="btn btn-success rounded-pill px-3" type="button">Request Callback</button></li>
      </ul>
    </div>

  </div>



}
export default Head3