/*
 * interface item {text: string, link: string}
 * interface data: Array<item>
 */

import styles from './header.module.css'
import Link from "next/link";
const Header = ({data}) => {
    return(
        <header>
            <div className="container">
                <nav className={styles.navBar}>
                    {
                        data.map(item =>
                            <Link href={item.link}
                                  key={item.text}
                                  className={styles.navItem}
                            >
                                {item.text}
                            </Link>
                        )
                    }
                </nav>
            </div>
        </header>
    )
}
export default Header