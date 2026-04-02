import styles from "./Header.module.css"

import {Link} from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

  
function Header(){
    
    return(
        <header className={styles.header}>
            <nav>
                <ul className={styles.navBar}>
                    <li className={styles.link}><Link to="/">Home</Link></li>
                    <li className={styles.link}><Link to="/about">About</Link></li>
                    <li className={styles.link}><Link to="/creatures">Creatures</Link></li>
                </ul>
            </nav>

            <div className={styles.mainIcons}>
                <img src="/imgs/symbol-icon.png" alt="Símbolo Lovecraft" className={styles.lvIcon}/>
                <img src="/imgs/tentacles.png" alt="Tentáculos" className={styles.tentacles}/>
            </div>

           <nav className={styles.navBar}>
             <a href="https://instagram.com/msv_vic" target="_blank"><FontAwesomeIcon icon={faInstagram} className={styles.brandIcon}></FontAwesomeIcon></a>
             <a href="https://github.com/ViniciusDuarte09" target="_blank"><FontAwesomeIcon icon={faGithub} className={styles.brandIcon}></FontAwesomeIcon></a>
             <a href="https://www.linkedin.com/in/vinicius-duarte-webdev" target="_blank"><FontAwesomeIcon icon={faLinkedin} className={styles.brandIcon}></FontAwesomeIcon></a>
           </nav>            
        </header>
    )
}

export default Header