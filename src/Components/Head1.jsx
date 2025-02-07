import styles from "./Head1.module.css";
import { FaFacebook } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";

const Head1 = () => {

  return <div className={styles.Head}>
    <ul className={styles.firstHead}>
      <li className={styles.name}><MdOutlineEmail className="gml" /> www.rigesterkaro.com</li>
      <li className={styles.name}><IoCall className="gml" />+91844774638 </li>
      <li className={styles.name}><FaFacebook className="gml" /></li>
      <li className={styles.name} ><FaInstagram className="gm;" /></li>
    </ul >



  </div>
}
export default Head1;