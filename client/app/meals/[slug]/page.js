import { getMealsBySlug } from "@/lib/mealsData";
import Image from "next/image";

import classes from "./page.module.css";

export default async function MealsInfoPage({ params }) {
    const meal = await getMealsBySlug(params.slug);
    meal.instructions = meal.instructions.replace(/\n/g, '<br/>')

    return (
        <>
            <header className={classes.header}>
                <div>
                    <Image src={meal.images[0]} alt={meal.title} width={500} height={700}/>
                </div>
                <div className={classes["header-text"]}>
                    <h1>{meal.title}</h1>
                    <p className={classes.creator}>
                        by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                    </p>
                    <p className={classes.summary}>
                        {meal.summary}
                    </p>
                </div>
            </header>
            <main className={classes.instructions}>
                {/* 
                    When we use dangerouslySetInnerHTML, necessary measures to prevent XSS should be taken into place.
                    https://blog.logrocket.com/using-dangerouslysetinnerhtml-react-application/ 
                */}

               <p
                    dangerouslySetInnerHTML={{
                        __html: meal.instructions
                    }}
                >

               </p>
            </main>
        </>
    )
}