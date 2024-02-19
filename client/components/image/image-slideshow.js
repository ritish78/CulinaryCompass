'use client';

import { useEffect, useState } from 'react';

import classes from "./image-slideshow.module.css";
  
import carbonaraImg from "@/public/foodImages/Carbonara.jpg";
import chocChipCookieImg from "@/public/foodImages/ChocolateChipCookie.jpg";
import classicCheeseBurgerImg from "@/public/foodImages/ClassicCheeseBurger.jpg";
import grilledChickenCeaserSaladImg from "@/public/foodImages/GrilledChickenCeaserSalad.jpg";
import mangoSmoothieImg from "@/public/foodImages/MangoSmoothie.jpg";
import margheritaPizzaImg from "@/public/foodImages/MargheritaPizza.jpg";
import salamiPizzaImg from "@/public/foodImages/SalamiPizza.jpg";
import sushiRollImg from "@/public/foodImages/SushiRoll.jpg";
import Image from 'next/image';


const images = [
    { title: 'Carbonara', images: [carbonaraImg], alt: 'Authentic Carbonara Pasta' },
    { title: 'Chocolate Chip Cookie', images: [chocChipCookieImg], alt: 'Delicious Chocolate Chip Cookie' },
    { title: 'Classic Cheese Burger', images: [classicCheeseBurgerImg], alt: 'Classic Cheese Burger with toppings' },
    { title: 'Grilled Chicken Caesar Salad', images: [grilledChickenCeaserSaladImg], alt: 'Healthy Grilled Chicken Caesar Salad' },
    { title: 'Mango Smoothie', images: [mangoSmoothieImg], alt: 'Refreshing Mango Smoothie' },
    { title: 'Margherita Pizza', images: [margheritaPizzaImg], alt: 'Classic Margherita Pizza with fresh ingredients' },
    { title: 'Salami Pizza', images: [salamiPizzaImg], alt: 'Savory Salami Pizza' },
    { title: 'Sushi Roll', images: [sushiRollImg], alt: 'Assorted Sushi Roll Platter' }
]

export default function ImageSlideShow() {
     const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((previousIndex) => 
                previousIndex < (images.length - 1) ? (previousIndex + 1) : 0
            )
        }, 5000);

        return () => clearInterval(interval);
    }, []);
    
    return (
        <div className={classes.slideshow}>
            {
                images.map((image, index) => (
                    <Image
                        key={index}
                        src={image.images[0]}
                        alt={image.alt}
                        className={index === currentImageIndex ? classes.active : ''}
                    />
                ))
            }
        </div>
    )
}