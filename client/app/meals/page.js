import Link from "next/link";

import { getMeals } from "@/lib/mealsData";

import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";

import MealsLoadingPage from "./loading";
import { Suspense } from "react";

async function Meals() {
    const mealsFromDB = await getMeals();

    return <MealsGrid meals={mealsFromDB} />
}

export default function MealPage() {

    return (
        <>
            <header className={classes.header}>
                <h1>
                    Exquisite Culinary Creations Crafted{' '}
                    <span className={classes.highlight}>by You!</span>
                </h1>
                <p>
                    Select your preferred recipe and prepare it either for personal enjoyment or for sharing with others. The experience is both enjoyable and fulfilling. 
                </p>
                <p className={classes.cta}>
                    <Link href="/meals/share">Share your favourite recipe!</Link>        
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<MealsLoadingPage />}>
                    <Meals />
                </Suspense>
            </main>
        </>
    )
}