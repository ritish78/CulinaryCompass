'use server';

import { saveMeal } from "./mealsData";

//creating a server action to save meal to database
export async function saveMealToDB(formData) {
    console.log('Saving Meal!');

    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        ingredients: formData.get('ingredients'),
        instructions: formData.get('instructions'),
        images: formData.get('images'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    }

    const anotherFormData = new FormData();
    anotherFormData.append('file', meal.images);

    //Now finally uploading the image to cloudinary
    const uploadedImageUrl = await fetch('http:/backend:5000/api/upload/meal/image', {
        method: 'POST',
        body: anotherFormData
    })

    /*
        We get the url of the uploaded image as:
        {
            imageUrl: "Link to the image" 
        }

    */
    const urlObject = await uploadedImageUrl.json();
    meal.images = [urlObject.imageUrl];
      

    console.log("To be saved Meal: ", meal);
    saveMeal(meal);
}