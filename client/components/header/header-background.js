import classes from "@/components/header/header-background.module.css";

export default function MainHeaderBackground() {
    return (
        <div className={classes["header-background"]}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 75">
            <defs>
              <linearGradient gradientTransform="rotate(90)" id="pillGradient">
                <stop stopColor="#5ebd38" offset="0%"/>
                <stop stopColor="#8fe76b" offset="100%"/>
              </linearGradient>
            </defs>
            <g>
              <g id="svg_2">
                <path id="svg_1" d="m73.06197,-76.13025c3.79648,-6.81659 12.37429,-9.15273 18.78541,-5.11614l12.35259,7.77749c6.41111,4.03659 8.60829,13.15692 4.81181,19.97351l-52.87981,93.68972c-7.30068,11.19039 -22.58207,10.93463 -28.99319,6.89804l-1.38308,-0.97379c-7.93466,-7.27641 -8.76061,-21.58051 -4.96412,-28.39711l52.27039,-93.85171z" opacity="undefined" fill="url(#pillGradient)"/>
              </g>
            </g>
            </svg>
        </div>
    )
}