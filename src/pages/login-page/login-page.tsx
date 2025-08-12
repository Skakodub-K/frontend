import styles from "./login-page.module.css";
import LoginForm from "@/widgets/login-form";

const LoginPage = () => {
  return (
    <main className={styles.formWrapper}>
      <img src='icons/T1Logo.png' alt='logo' />
      <img src='http://localhost:8080/uploads/achievements/4f526ab2-0474-4e53-8114-bd2b15cbb9a2.png'/>
      <div className={styles.formContent}>
        <LoginForm/>
      </div>
    </main>
  );
};

export default LoginPage;