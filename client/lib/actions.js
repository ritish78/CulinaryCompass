'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./mealsData";

function isInValidText(text) {
    return !text || text.trim() === '';
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
}

//creating a server action to save meal to database
export async function saveMealToDB(prevState, formData) {
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        ingredients: formData.get('ingredients'),
        instructions: formData.get('instructions'),
        images: formData.get('images'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    }

    if (
        isInValidText(meal.title) || 
        isInValidText(meal.summary) || 
        isInValidText(meal.ingredients) ||
        isInValidText(meal.instructions) ||
        isInValidText(meal.creator) ||
        isInValidText(meal.creator_email) ||
        !isValidEmail(meal.creator_email) ||
        !meal.images || meal.images.size === 0
    ) {
        return {
            message: 'Invalid Form Input! Please check the provided data!'
        }
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
      
    const savedMeal = await saveMeal(meal);
    redirect(`/meals/${savedMeal.slug}`);
}