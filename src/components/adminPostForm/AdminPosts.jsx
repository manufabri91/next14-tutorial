import { getPosts } from "@/lib/data";
import styles from "./adminPosts.module.css";
import Image from "next/image";
import { deletePost } from "@/lib/actions";

const AdminPosts = async () => {
  const posts = await getPosts();
  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div className={styles.post} key={post.slug}>
          <div className={styles.detail}>
            <Image
              src={post.img || "/noAvatar.png"}
              width={50}
              height={50}
              alt=""
            />
            <h2 className={styles.postTitle}>{post.title}</h2>
            <form action={deletePost}>
              <input type="hidden" name="id" value={post.id} />
              <button className={styles.postButton}>Delete</button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminPosts;
