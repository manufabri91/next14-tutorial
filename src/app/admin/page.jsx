import { Suspense } from "react";
import styles from "./admin.module.css";
import AdminPosts from "@/components/adminPostForm/AdminPosts";
import AdminPostForm from "@/components/adminPosts/AdminPostForm";
import AdminUsers from "@/components/adminUsers/adminUsers";
import AdminUserForm from "@/components/adminUserForm/AdminUserForm";

export const metadata = {
  title: "Admin",
  description: "Manage your posts",
};

const AdminPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.column}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={styles.column}>
          <AdminPostForm />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={styles.column}>
          <AdminUserForm />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
