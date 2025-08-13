import type { ReactNode } from "react";
import styles from "./opacity-img.module.css";
interface IOpacityImage {
  isActive: boolean;
  steps: number;
  currentStep: number;
  children: ReactNode;
  bgColor: string;
}
const OpacityImg: React.FC<IOpacityImage> = ({
  isActive,
  steps,
  currentStep,
  children,
  bgColor,
}) => {
  const sectors = Array.from({ length: steps }).map((_ , index) => {
    const opacityValue = Number(index) + 1 <= currentStep ? 0 : 0.8;
    return (
      <div
        key={`id${index}`}
        className={styles.sector}
        style={{
          height: `${100 / steps}%`,
          width: "100%",
          backgroundColor: bgColor,
          opacity: opacityValue,
        }}
      ></div>
    );
  });
  return (
    <div className={styles.imgContainer}>
      {children}
      {isActive ? <></> : sectors.reverse()}
    </div>
  );
};
export default OpacityImg;
