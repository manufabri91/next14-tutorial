import styles from "./login.module.css";
import LoginForm from "./components/LoginForm";

const LoginPage = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
