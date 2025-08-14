import styles from "./menu.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
export const ButtonMenu: React.FC<{ title: string; path: string }> = ({
  title,
  path,
}) => {
  const location = useLocation();
  const isActive = location.pathname === path;
  return (
    <Link
      to={path}
      className={`${styles.buttonMenu} ${isActive ? styles.active : ""}`}
    >
      <span>{title}</span>
    </Link>
  );
};

const Menu: React.FC = () => {
  return (
    <div className={styles.menuContainer}>
      <ButtonMenu title="Профиль" path="/" />
      <ButtonMenu title="Достижения" path="/achievements" />
      <ButtonMenu title="Настройки" path="/admin" />
    </div>
  );
};
export default Menu;
