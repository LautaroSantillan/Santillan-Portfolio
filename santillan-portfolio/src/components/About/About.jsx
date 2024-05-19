import { getImageUrl } from '../../utils';
import styles from "./About.module.css"

export const About = () => {
    return (
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img 
                    src={getImageUrl("about/aboutImg.png")}
                    alt='personWithALaptop'
                    className={styles.aboutImg}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt='cursorIcon' />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>
                                I'm a frontend developer with experience in create, code 
                                and realize interfaces of landing pages
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt='serverIcon' />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>
                                I have experience developing differents back-end systems and APIs RESTful
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/screenIcon.png")} alt='screenIcon' />
                        <div className={styles.aboutItemText}>
                            <h3>Landing Pages</h3>
                            <p>
                                I'm a passionate person in the creation, adapt and implement of the web sites. So much 
                                in the part of the front-end and the back-end
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};