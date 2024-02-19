import Link from "next/link";

import logoImg from "@/assets/images/logo.png";

import classes from "./header.module.css";
import Image from "next/image";

import NavLink from "./navLink";

export default function Header() {
    return (
        <>
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
                            <NavLink href="/meals">
                                Browse Meals
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">
                                Foodies Community
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}