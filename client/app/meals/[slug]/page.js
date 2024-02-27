import { getMealsBySlug } from "@/lib/mealsData";
import Image from "next/image";

import classes from "./page.module.css";
import NotFoundPage from "@/app/not-found";

// import { notFound } from "next/navigation";
// export async function generateMetadata({ params }) {
//   const meal = await getMealsBySlug(params.slug);

//   if (!meal) {
//     notFound();
//   }

//   return {
//     title: meal.title,
//     description: meal.summary,
//   };
// }

export default async function MealsInfoPage({ params }) {
  const meal = await getMealsBySlug(params.slug);

  //If user inputs incorrect params of meals
  if (!meal) {
    return NotFoundPage();
  }

  //Replacing the empty whitespace saved as lines to a line break in html
  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");
  meal.ingredients = meal.ingredients.replace(/\n/g, "<br/>");

  return (
    <>
      <header className={classes.header}>
        <div>
          <Image
            src={meal.images[0]}
            alt={meal.title}
            width={500}
            height={700}
          />
        </div>
        <div className={classes["header-text"]}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
          <div className={classes.instructions}>
            <h4>Ingredients: </h4>
            <p
              dangerouslySetInnerHTML={{
                __html: meal.ingredients,
              }}
            ></p>
          </div>
        </div>
      </header>
      <main className={classes.instructions}>
        {/* 
                    When we use dangerouslySetInnerHTML, necessary measures to prevent XSS should be taken into place.
                    https://blog.logrocket.com/using-dangerouslysetinnerhtml-react-application/ 
                */}
        <h3>Instructions: </h3>
        <p
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
