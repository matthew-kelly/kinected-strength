import styles from "./LogoSpinner.module.css";

export default function LogoSpinner({ size = 100 }) {
  return (
    <svg height={size} viewBox="0 0 100 100">
      <defs>
        <path
          id="circlepath"
          d="
              M 25, 50
              a 25,25 0 1,1 50,0
              a 25,25 0 1,1 -50,0
            "
        />
      </defs>
      <text
        className={`${styles.spinner} uppercase font-display font-bold fill-primary-dark text-[8px] tracking-[0.125rem]`}
      >
        <textPath xlinkHref="#circlepath">Kinected • Strength</textPath>
      </text>
    </svg>
  );
}
