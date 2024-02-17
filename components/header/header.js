import Link from "next/link";

import logoImg from "@/assets/images/logo.png";

import classes from "./header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./header-background";

export default function Header() {
    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link href="/"  className={classes.logo}>
                    <Image 
                        src={logoImg} 
                        alt="Logo of website"
                        priority
                    />
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
        </>
    )
}