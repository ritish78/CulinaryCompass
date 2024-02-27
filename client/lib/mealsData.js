import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache"; 
import slugify from "slugify";
import xss from "xss";
import { v4 as uuid } from "uuid"; 
// import fs from "node:fs";


export async function getMeals() {
    //First let's say to next to not use cached data
    noStore();

    try {
        // throw new Error('Testing error screen!');
        const data = await sql`SELECT * FROM meals ORDER BY title ASC`;

        return data.rows;
    } catch (error) {
        console.error('Error occurred while reading meals from postgres!', error);
        throw new Error('Could not retrieve meals from database!');
    }
}

export async function getMealsBySlug(slug) {
    //Again, we don't use cached data
    noStore();

    const sanitisedSlug = xss(slugify(slug, { lower: true }));

    try {
        const data = await sql`SELECT * FROM meals WHERE slug=${sanitisedSlug}`;

        //Making a shallow copy so that mealFromDB is independent from data.rows
        const mealFromDB = data.rows.map(meal => ({
            ...meal
        }))

        return mealFromDB[0];
    } catch (error) {
        console.error("Error occurred searching for provided meal from postgres!", error);
        throw new Error('Could not retrieve provided meal from database!');
    }
}

export async function saveMeal(meal) {
    meal.id = uuid();
    // meal.title = xss(slugify(meal.title, { lower: true }));
    meal.title = meal.title.trim();
    meal.instructions = xss(slugify(meal.instructions, { lower: true }));
    meal.slug = xss(slugify(meal.title + "-" + meal.id, { lower: true }));

    try {
        // To store in the public folder
        // Sunsetting it to store the uploaded images in cloudinary instead
        
        // if (meal.images && meal.images.length > 0) {
        //     const imagePromises = meal.images.map(async (image, index) => {
        //         if (image instanceof File) {
        //             const fileName = image.name;
        //             const stream = fs.createWriteStream(`public/foodImages/${fileName}`);
        //             const bufferedImage = await image.arrayBuffer();

        //             stream.write(Buffer.from(bufferedImage), error => {
        //                 if (error) {
        //                     throw new Error(`Could not save image ${index + 1}!`);
        //                 }
        //             });

        //             meal.images[index] = `/foodImages/${fileName}`;
        //         }
        //     });

        //     await Promise.all(imagePromises);
        // }

        const data = await sql`
            INSERT INTO meals (id, title, slug, images, summary, ingredients, instructions, creator, creator_email)
            VALUES (${meal.id}, ${meal.title}, ${meal.slug}, ${meal.images}, ${meal.summary}, ${meal.ingredients}, ${meal.instructions}, ${meal.creator}, ${meal.creator_email})
            RETURNING *;
        `;

        return data.rows[0];
    } catch (error) {
        console.error("Error occurred while saving meal to Postgres!");
        throw new Error("Could not save meal to database!");
    }
}