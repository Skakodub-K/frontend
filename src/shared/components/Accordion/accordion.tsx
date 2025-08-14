import React, { useState, useRef, type ReactNode } from "react";
import styles from "./accordion.module.css";

interface IAccordionItem {
  header: ReactNode;
  children: ReactNode;
}

const Accordion: React.FC<IAccordionItem> = ({ header, children }) => {
  const [active, setActive] = useState<boolean>(false);
  const bodyRefs = useRef<HTMLDivElement>(null);

  return (
    <div
      className={styles.accordion}
      style={{
        borderRadius: active ? "20px 20px 0 0" : "20px",
      }}
    >
      <div className={styles.accordionItem}>
        <button
          className={`${styles.accordionHeader} ${active ? " activeHdr" : ""}`}
          onClick={() => {
            setActive(!active);
          }}
        >
          {header}
          <div className={styles.lineLink}>
            <p className={styles.link}>{active ? "Скрыть" : "Посмотреть"}</p>
            <div className={styles.popupLine}></div>
          </div>
        </button>
        <div
          className={`${styles.accordionBody} ${active ? "activeBdy" : ""}`}
          ref={bodyRefs}
          style={{
            borderTop: active ? "1px solid silver" : "0px",
            maxHeight: active ? "fit-content" : "0",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
