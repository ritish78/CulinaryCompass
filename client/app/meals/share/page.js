import ImagePicker from "@/components/meals/image-picker";
import classes from "./page.module.css";

export default function MealSharePage() {
    async function printFormData(formData) {
        "use server";
        const meal = {
            title: formData.get('title'),
            summary: formData.get('summary'),
            recipe: formData.get('recipe'),
            instructions: formData.get('instructions'),
            images: formData.getAll('images'),
            creator: formData.get('name'),
            creator_email: formData.get('email')
        }
    
        console.log(meal);
    }

    return (
        <>
            <header className={classes.header}>
                <h1>Share the recipe of meal that <span className={classes.highlight}>you love</span> the most</h1>
                <p>Or share any other recipe that you would like the rest of the world to know.</p>
            </header>
            <main className={classes.main}>
                <form className={classes.form} action={printFormData}>
                    <div className={classes.row}>
                        <p>
                            <label htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                            />
                        </p>
                        <p>
                            <label htmlFor="email">Email address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                            />
                        </p>
                    </div>
                    <div className={classes.div}>
                        <p>
                            <label htmlFor="title">Name of meal</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                required
                            />
                        </p>
                    </div>
                    <div className={classes.div}>
                        <p>
                        <label htmlFor="summary">Short Summary</label>
                            <input
                                type="text"
                                id="summary"
                                name="summary"
                                required
                            />
                        </p>
                    </div>
                    <div className={classes.div}>
                        <p>
                        <label htmlFor="ingredients">Ingredients</label>
                            <textarea
                                id="ingredients"
                                name="ingredients"
                                rows={8}
                                required
                            />
                        </p>
                    </div>
                    <div className={classes.div}>
                        <p>
                        <label htmlFor="title">Instructions</label>
                            <textarea
                                id="instructions"
                                name="instructions"
                                rows={12}
                                required
                            />
                        </p>
                    </div>
                    <ImagePicker label="Your image" name="images" />
                    <p className={classes.actions}>
                        <button type="submit">
                            Share Meal
                        </button>
                    </p>
                </form>
            </main>
        </>
    )
}