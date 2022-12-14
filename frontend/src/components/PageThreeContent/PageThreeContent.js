import classes from "./PageThreeContent.module.css";
import im1 from "../../assets/image 1.png";
import im2 from "../../assets/image 2.png";
import im3 from "../../assets/image 3.png";

const PageThreeContent = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.ch1}>Most viewed</h1>
      <div className={classes.wrapper}>
        <div className={classes.card}>
          <img className={classes.c1} src={im1} alt="" />
        </div>
        <div className={classes.card}>
          <img className={classes.c2} src={im2} alt="" />
        </div>
        <div className={classes.card}>
          <img className={classes.c3} src={im3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PageThreeContent;
