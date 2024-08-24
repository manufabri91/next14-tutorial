"use client";
import { useFormState } from "react-dom";

import styles from "./loginForm.module.css";
import { handleLogin, handleLoginGithub } from "@/lib/actions";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [state, formAction] = useFormState(handleLogin, undefined);
  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      state?.success && router.push("/");
    }
  }, [state?.success, router]);

  return (
    <>
      <div className={styles.wrapper}>
        {state?.error && <div className={styles.error}>{state.error}</div>}
        <form className={styles.form} action={formAction}>
          <input type="text" placeholder="Username" name="username" />
          <input type="password" placeholder="Password" name="password" />
          <button type="submit">Login</button>
        </form>
        <form className={styles.form} action={handleLoginGithub}>
          <button>Login with GitHub</button>
        </form>
        <Link href="/register" className={styles.link}>
          Don&apos;t have an account? <b>Register</b>
        </Link>
      </div>
    </>
  );
};

export default LoginForm;
