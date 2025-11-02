import styles from "./Header.module.css"

import {Link} from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"

  
function Header(){
    
    return(
        <header>
            <nav>
                <ul className={styles.navBar}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/creatures">Creatures</Link></li>
                </ul>
            </nav>

            <div className={styles.mainIcons}>
                <img src="/imgs/symbol-icon.png" alt="Símbolo Lovecraft" className={styles.lvIcon}/>
                <img src="/imgs/tentacles.png" alt="Tentáculos" className={styles.tentaclesAnimation}/>
            </div>

           <nav className={styles.navBar}>
             <a href="https://instagram.com/msv_vic"><FontAwesomeIcon icon={faInstagram} className={styles.brandIcon}></FontAwesomeIcon></a>
             <a href="https://github.com/ViniciusDuarte09"><FontAwesomeIcon icon={faGithub} className={styles.brandIcon}></FontAwesomeIcon></a>
           </nav>            
        </header>
    )
}

export default Header