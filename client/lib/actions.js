'use server';

//creating a server action to save meal to database
export async function saveMealToDB(formData) {

    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        recipe: formData.get('recipe'),
        instructions: formData.get('instructions'),
        images: formData.get('images'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    }

    console.log(meal);
}