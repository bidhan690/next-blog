import Link from "next/link"
import styles from './MainNav.module.css'
import Logo from './Logo'

export default function MainNav(){
    return <>
    <header className={styles.header} >
        <Link href='/'>
        <Logo /> 
        </Link>
        
        <ul>
            <li>
                <Link href='/posts' >Posts</Link>
                
            </li>
            <li>
            <Link href='/contact' >Contact</Link>
            </li>
        </ul>
    </header>
    </>
}