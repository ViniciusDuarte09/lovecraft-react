import styles from "./Footer.module.css"

function Footer(){
    return(
        <footer>
            <p>© {new Date().getFullYear()} Lovecraft Bestiary — desenvolvido por Vinícius 🦑</p>
        </footer>
    )
}

export default Footer