import classes from "./Footer.module.css";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitch from "../../assets/twitch.png";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.row}>
          <div className={classes.p1}>
            <a
              href="https://www.instagram.com/lsacbucuresti/"
              className={classes.icons}
            >
              <img alt="" src={instagram} />
            </a>
            <a
              href="https://www.twitch.tv/lsac_bucuresti"
              className={classes.icons}
            >
              <img alt="" src={twitch} />
            </a>
            <a
              href="https://www.facebook.com/LsacBucuresti/"
              className={classes.icons}
            >
              <img alt="" src={facebook} />
            </a>
          </div>
          <div className={classes.p2}>
            <p>Copyright 2022 | La muncă, nu la întins mâna.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
