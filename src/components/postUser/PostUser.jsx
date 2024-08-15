import { getUserById } from "@/lib/data";
import styles from "./postUser.module.css";
import Image from "next/image";

const PostUser = async ({ userId }) => {
  const user = await getUserById(userId);
  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        alt=""
        src={user.img ? user.img : "/noavatar.png"}
        height="50"
        width="50"
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
