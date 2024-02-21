'use client';

import { useEffect, useState } from 'react';

import classes from "./image-slideshow.module.css";
  
// import carbonaraImg from "@/public/foodImages/Carbonara.jpg";
// import chocChipCookieImg from "@/public/foodImages/ChocolateChipCookie.jpg";
// import classicCheeseBurgerImg from "@/public/foodImages/ClassicCheeseBurger.jpg";
// import grilledChickenCeaserSaladImg from "@/public/foodImages/GrilledChickenCeaserSalad.jpg";
// import mangoSmoothieImg from "@/public/foodImages/MangoSmoothie.jpg";
// import margheritaPizzaImg from "@/public/foodImages/MargheritaPizza.jpg";
// import salamiPizzaImg from "@/public/foodImages/SalamiPizza.jpg";
// import sushiRollImg from "@/public/foodImages/SushiRoll.jpg";


import Image from 'next/image';


const images = [
    { title: 'Carbonara', images: ["https://res.cloudinary.com/dljohw82z/image/upload/v1708498582/CulinaryCompass/Carbonara_bgqhos.jpg"], alt: 'Authentic Carbonara Pasta' },
    { title: 'Chocolate Chip Cookie', images: ["https://res.cloudinary.com/dljohw82z/image/upload/v1708498583/CulinaryCompass/Chocolate_Chip_Cookie_x5iywk.jpg"], alt: 'Delicious Chocolate Chip Cookie' },
    { title: 'Classic Cheese Burger', images: ["https://res.cloudinary.com/dljohw82z/image/upload/v1708498583/CulinaryCompass/Classic_Cheese_Burger_fsqv8u.jpg"], alt: 'Classic Cheese Burger with toppings' },
    { title: 'Grilled Chicken Caesar Salad', images: ["https://res.cloudinary.com/dljohw82z/image/upload/v1708498584/CulinaryCompass/Grilled_Chicken_Ceaser_Salad_emv1bj.jpg"], alt: 'Healthy Grilled Chicken Caesar Salad' },
    { title: 'Mango Smoothie', images: ["https://res.cloudinary.com/dljohw82z/image/upload/v1708498815/CulinaryCompass/Mango_Smoothie_dcnbv6.jpg"], alt: 'Refreshing Mango Smoothie' },
    { title: 'Margherita Pizza', images: ["https://res.cloudinary.com/dljohw82z/image/upload/v1708498583/CulinaryCompass/Margherita_Pizza_he0tzc.jpg"], alt: 'Classic Margherita Pizza with fresh ingredients' },
    { title: 'Salami Pizza', images: ["https://res.cloudinary.com/dljohw82z/image/upload/v1708498584/CulinaryCompass/Salami_Pizza_lcumww.jpg"], alt: 'Savory Salami Pizza' },
    { title: 'Sushi Roll', images: ["https://res.cloudinary.com/dljohw82z/image/upload/v1708498583/CulinaryCompass/Sushi_roll_cyxfxe.jpg"], alt: 'Assorted Sushi Roll Platter' }
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
                        width={400}
                        height={700}
                    />
                ))
            }
        </div>
    )
}