import styles from "./adminUsers.module.css";

import Image from "next/image";
import { getUsers } from "@/lib/data";
import { deleteUser } from "@/lib/actions";

const AdminUsers = async () => {
  const users = await getUsers();
  return (
    <div className={styles.container}>
      <h1>Users</h1>
      {users.map((user) => (
        <div className={styles.post} key={user.id}>
          <div className={styles.detail}>
            <Image
              src={user.img || "/noAvatar.png"}
              width={50}
              height={50}
              alt=""
            />
            <h2 className={styles.postTitle}>{user.username}</h2>
            <form action={deleteUser}>
              <input type="hidden" name="id" value={user.id} />
              <button className={styles.postButton}>Delete</button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminUsers;
