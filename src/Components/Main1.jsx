import styles from "./Main1.module.css";
import ijj from "../image/ijj.png";


const Main1 = () => {



  return <> <div className={styles.img}
    style={{
      backgroundImage: `url(${ijj})`,
      height: "600px",
    }} >
  </div>

    <div className={styles.comp}>
      <h2 className={styles.h}>Trusted By Over 100+ Statups and freelance business</h2>
      <ul className={styles.compp}>
        <li className="or"
          style={{
            color: "#ff0000 ",
          }}>ORACLE</li>
        <li className='mo' style={{
          color: "#0676be ",
        }}>MORPHEUS</li>
        <li className='sv' style={{
          color: " #0010ff",
        }}>SVMSUMG</li>
        <li className='se' style={{
          color: "#55e77b",
        }}>SEGMENT</li>
      </ul>


    </div>
  </>
}
export default Main1