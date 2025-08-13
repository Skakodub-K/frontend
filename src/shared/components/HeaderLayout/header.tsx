import { Link } from "react-router-dom";
import type { IItem } from "../types";
import styles from "./header.module.css";
import Dropdown from "antd/es/dropdown/dropdown";
import type { MenuProps } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";

const Header: React.FC<Omit<IItem, "title">> = ({ url }) => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link className={styles.headerLink} to="/">
          <UserOutlined />
          &nbsp;&nbsp;Профиль
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <p
          onClick={() => {
            //logout()
          }}
        >
          <LogoutOutlined />
          &nbsp;&nbsp;Выйти
        </p>
      ),
    },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <img
          className={styles.headerLogo}
          src="icons/T1Logo.png"
          alt="logo"
        ></img>
        <Dropdown menu={{ items }}>
          <div className={styles.headerLink}>
            <img src={url} alt="profilPh"></img>
          </div>
        </Dropdown>
      </div>
    </header>
  );
};
export default Header;
