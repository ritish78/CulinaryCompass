import Link from "next/link";

import logoImg from "@/assets/images/logo.png";

import classes from "./header.module.css";

export default function Header() {
    return (
        <header className={classes.header}>
            <Link href="/"  className={classes.logo}>
                <img src={logoImg.src} alt="Logo of website"/>
                Culinary Compass
            </Link>

            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href="/meals">Browse Meals</Link>
                    </li>
                    <li>
                        <Link href="/community">Foodies Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}