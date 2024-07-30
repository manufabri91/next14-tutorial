import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2>About Agency</h2>
        <h1>
          We create digital ideas that are bigger, bolder, braver and better
        </h1>
        <p>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas, flexibility and precision. We want to be the
          best agency team in the world, delivering value according to our
          client needs.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <p>10k</p>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <p>10k</p>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <p>10k</p>
            <p>Years of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="" fill />
      </div>
    </div>
  );
};

export default AboutPage;
