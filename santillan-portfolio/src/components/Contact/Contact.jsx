import { getImageUrl } from "../../utils";
import styles from  "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Don't hesitate to contact me!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl('contact/emailIcon.png')} alt="Email Icon" />
                <a href="mailto:santillanlautaro03@gmail.com">santillanlautaro03@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/linkedinIcon.png')} alt="LinkedIn Icon" />
                <a href="https://www.linkedin.com/in/lautaro-ezequiel-santillan-65973b205/" target="blank">Lautaro Ezequiel Santillan</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/githubIcon.png')} alt="GitHub Icon" />
                <a href="https://github.com/LautaroSantillan/" target="blank">LautaroSantillan</a>
            </li>
        </ul>
    </footer>
  )
}
