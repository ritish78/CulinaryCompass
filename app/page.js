import ImageSlideShow from "@/components/image/image-slideshow";
import classes from "./page.module.css";
import Link from "next/link";

import cookingSvgLink from "@/public/homePage.svg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideShow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Savor the Flavor: Culinary Delights Await!</h1>
            <p>
              Dive into a world where every recipe is a culinary masterpiece waiting to be discovered. 
              Taste the magic, savor the moments - because in our kitchen, every dish is an adventure!
            </p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join our community</Link>
            <Link href="/meals">Meals Page</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            Culinary Compass is your guide to a world of delightful recipes shared by passionate foodies. Explore new dishes and connect with fellow culinary enthusiasts.
          </p>
          <p>
            Culinary Compass is where you discover flavors and forge connections with food lovers around the globe.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why Culinary Compass?</h2>
          <p>
            Culinary Compass is your platform to share your favorite recipes with the world. Join us in creating a community of food enthusiasts, discovering new flavors, and connecting with fellow food lovers.
          </p>
          <p>
            Culinary Compass is where you embark on a journey to explore diverse dishes and connect with like-minded individuals who share your passion for food.
          </p>
        </section>        
      </main> */}
      <main className={classes["container"]}>
        <section className={classes["left-side"]}>
          <div className={classes.hero}>
              <h1>Savor the Flavor: Culinary Delights Await!</h1>
              <p>
                Dive into a world where every recipe is a culinary masterpiece waiting to be discovered. 
                Taste the magic, savor the moments - because in our kitchen, every dish is an adventure!
              </p>
            </div>
            <div className={classes.cta}>
              <Link href="/community">Join our community</Link>
              <Link href="/meals">Meals Page</Link>
            </div>
        </section>
        <section className={classes["right-side"]}>
          <Image src={cookingSvgLink} alt="A picture of a person cooking"/>
        </section>
      </main>
    </>
  );
}
