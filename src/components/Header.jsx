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

            <img src="/imgs/symbol-icon.png" alt="Símbolo Lovecraft" className={styles.lvIcon}/>

           <nav className={styles.navBar}>
             <a href="https://instagram.com/msv_vic"><FontAwesomeIcon icon={faInstagram} className={styles.brandIcon}></FontAwesomeIcon></a>
             <a href="https://github.com/ViniciusDuarte09"><FontAwesomeIcon icon={faGithub} className={styles.brandIcon}></FontAwesomeIcon></a>
           </nav>

            <img src="/imgs/tentacles (2).png" alt="Tentáculos" className={styles.tentaclesAnimation}/>
            
        </header>
    )
}

export default Header