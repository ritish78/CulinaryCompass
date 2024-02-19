import Image from "next/image";

import classes from "./community-background.module.css";

import communityBackgroundSvg from "@/public/communityBackground.svg";


export default function CommunityPageBackground() {
    return (
        <div className={classes["header-background"]}>
            <Image src={communityBackgroundSvg} alt="Background shape for community picture" />
        </div>
    )
}