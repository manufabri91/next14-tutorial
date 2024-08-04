import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/27203450/pexels-photo-27203450/free-photo-of-ciudad-vacaciones-calle-azul.jpeg"
            alt=""
            className={styles.img}
            fill
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          doloremque aliquam facilis deleniti dolores in officia veritatis
          dignissimos dolorum commodi unde, quasi quidem asperiores temporibus
          enim quia qui, sunt molestiae.
        </p>
        <Link className={styles.link} href="/blog/post">
          Read More...
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
