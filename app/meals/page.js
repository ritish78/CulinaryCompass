import Link from "next/link";

export default function MealPage() {
    return (
        <>
            <p>
                Select any of the meals to view their recipe.
            </p>
            <Link href="/meals/share">Share!</Link>
        </>
    )
}