"use client";

import classes from "./error.module.css";

export default function MealsError({ error }) {
    return (
        <div className={classes["error-container"]}>
            <main className="error">
                <p className={classes["error-text"]}>Oh no, something went wrong!</p>
                <p className={classes["error-subtext"]}>It seems our chef got tangled in spaghetti code. Please try again later!</p>
            </main>
        </div>
    )
}