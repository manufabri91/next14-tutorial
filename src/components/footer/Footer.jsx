import stlyes from "./footer.module.css";

const Footer = () => {
  return (
    <div className={stlyes.container}>
      <div className={stlyes.logo}>mfdev</div>
      <div className={stlyes.text}>
        Manuko creative thoughts agency (C) All rights reserved
      </div>
    </div>
  );
};

export default Footer;
