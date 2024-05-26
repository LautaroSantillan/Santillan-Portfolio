import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>HI! I'm Lautaro</h1>
                <p className={styles.description}>
                    I'm full-stack developer Jr, with 2 years of experience.
                    I'm always learning and practice about differents programming languages.  
                </p>
                <a href='https://www.linkedin.com/in/lautaro-ezequiel-santillan-65973b205/' className={styles.contactBtn} target="blank">Contact Me</a>
            </div>
            <img src={getImageUrl("hero/fotoLautaro.png")} alt='photoMe' className={styles.meImg}/>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};