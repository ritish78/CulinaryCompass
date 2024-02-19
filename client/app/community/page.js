import Image from "next/image";
import classes from "./page.module.css";

import communitySvg from "@/public/community.svg";
import cookingSvg from "@/public/cooking.svg";
import foodSvg from "@/public/food.svg";
import eatingSvg from "@/public/eating.svg";
import CommunityPageBackground from "@/components/community/community-background";

export default function CommunityTabPage() {
  return (
    <>
      <main className={classes.container}>
        <section className={classes["left-side"]}>
          <div className={classes.hero}>
            <h1>Join the Culinary Compass Community</h1>
            <p>
              Embark on a culinary journey with fellow food enthusiasts at
              Culinary Compass.
            </p>
            <p>
              Discover, share, and learn as we navigate the world of delightful
              flavors together.
            </p>
          </div>
        </section>
        <section className={classes["right-side"]}>
            <CommunityPageBackground />
            <Image src={communitySvg} alt="A picture of people gathering" />
        </section>
      </main>
      <main className={classes.container}>
            <div className={classes.hero}>
                <h1 className={classes["join-now"]}>Don&apos;t wait! Join NOW!</h1>
            </div>
      </main>
    </>
  );
}
