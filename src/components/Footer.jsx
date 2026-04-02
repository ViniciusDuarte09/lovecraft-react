import styles from "./Footer.module.css"
import { Link } from "react-router-dom"

function Footer(){
    return(
        <footer className={styles.footer}>

            <nav>
                <ul className={styles.navBar}>
                    <li>
                        <Link to={"/"} className={styles.link}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"} className={styles.link}>About</Link>
                    </li>
                    <li>
                        <Link to={"/creatures"} className={styles.link}>Creatures</Link>
                    </li>
                </ul>
            </nav>

            <hr />

            <div className={styles.rights}>    
                <p>Copyright ©{new Date().getFullYear()} All rights reserved | Lovecraft Bestiary — desenvolvido por <a href= "https://github.com/ViniciusDuarte09">Vinícius</a> 🦑</p>
            </div>
        </footer>
    )
}

export default Footer