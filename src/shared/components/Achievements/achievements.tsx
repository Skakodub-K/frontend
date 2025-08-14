import OpacityImg from "../OpacityImg";
import type { ISliderAdvProps } from "../types";
import styles from "./achievements.module.css";
import EditPage from "@/pages/edit-page";
import { ArrowRightOutlined } from "@ant-design/icons";
const Achievements: React.FC<ISliderAdvProps> = ({ items }) => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>
          Достижения &nbsp; <span>{items.length}</span>
        </h3>
        <EditPage />
        <button className={styles.button}>
          <ArrowRightOutlined style={{ opacity: 1 }} />
        </button>
      </div>
      <div className={styles.sectionContent}>
        {items.slice(0, 3).map((item, index) => {
          return (
            <OpacityImg
              key={`op-img-${index}`}
              isActive={false}
              steps={2}
              currentStep={index}
              bgColor="white"
            >
              <img
                className={styles.imgAchiv}
                key={index}
                src={item.url}
                alt={item.title}
              ></img>
            </OpacityImg>
          );
        })}
      </div>
    </section>
  );
};
export default Achievements;
