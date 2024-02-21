import classes from "./loading.module.css";

export default function MealsLoadingPage() {
    return (
        <div className={classes["loading-container"]}>
            <p className={classes["loading-text"]}>Stirring the pot to bring you amazing meals...</p>
            <div className={classes["loading-spinner"]}></div>
            <p className={classes["loading-joke"]}>Why did the cookie go to the doctor? It was feeling crumbly!</p>
        </div>
    )
}