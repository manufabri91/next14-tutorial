import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          alt=""
          src="https://images.pexels.com/photos/27203450/pexels-photo-27203450/free-photo-of-ciudad-vacaciones-calle-azul.jpeg"
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            alt=""
            src="https://images.pexels.com/photos/27203450/pexels-photo-27203450/free-photo-of-ciudad-vacaciones-calle-azul.jpeg"
            height="50"
            width="50"
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Manu</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>04/08/2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          autem cum, officiis exercitationem ea voluptas sit quas! Tempore
          beatae, consequuntur quisquam corrupti esse tempora, aspernatur
          perferendis quae blanditiis repellat sed?. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Nihil vero quisquam optio cum debitis
          placeat repellat illum qui odio pariatur mollitia eveniet voluptate,
          ipsam quo fugit sit, aut recusandae! Fuga?
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
