import classes from "./footer.module.css";

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <div className={classes.footer}>
            <p>Culinary Compass &copy; {currentYear}</p>
        </div>
    )
}