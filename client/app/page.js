import ImageSlideShow from "@/components/image/image-slideshow";
import classes from "./page.module.css";
import Link from "next/link";

import cookingSvgLink from "@/public/homePage.svg";
import Image from "next/image";
import MainHeaderBackground from "@/components/header/header-background";

export default function Home() {
  return (
    <>
      <MainHeaderBackground />
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
      <main className={classes.container}>
        <div className={classes["left-side-slideshow"]}>
          <ImageSlideShow />
        </div>
        <div className={classes["right-side-text"]}>
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
            <h2>Discover the Culinary Compass Difference</h2>
            <p>
              Uncover a culinary haven at Culinary Compass, where your favorite recipes become part of a global gastronomic symphony. Engage with a vibrant community of food enthusiasts, share your passion for flavors, and create lasting connections with fellow food lovers.
            </p>
            <p>
              Culinary Compass is not just a platform; it&apos;s your passport to a world of diverse dishes and shared culinary experiences. Join us as we navigate through a tapestry of tastes, connecting people through the universal language of food.
            </p>
            <h2>Embark on a Culinary Adventure with Us</h2>
            <p>
              Welcome to Culinary Compass, where your culinary journey begins. Share your favorite recipes with a global audience, building connections with fellow food enthusiasts who share your love for extraordinary flavors.
            </p>
            <p>
              Culinary Compass is more than a platform; it&apos;s a community united by the passion for good food. Explore the world of diverse cuisines, forge new friendships, and let every recipe be a compass guiding you to delightful culinary experiences.
            </p>
          </section>        
        </div>
      </main>
    </>
  );
}
