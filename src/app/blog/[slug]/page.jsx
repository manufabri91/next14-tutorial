import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";
import { getPostBySlug } from "@/lib/data";

export const generateMetadata = async ({ params }) => {
  const post = await getPostBySlug(params.slug);
  return {
    title: post.title,
    description: post.title,
  };
};
const SinglePostPage = async ({ params }) => {
  const post = await getPostBySlug(params.slug);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {post.img && (
          <Image className={styles.img} alt="" src={post.img} fill />
        )}
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(0, 10)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.description}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
