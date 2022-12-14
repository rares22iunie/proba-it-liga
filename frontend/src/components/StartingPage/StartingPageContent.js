import classes from "./StartingPageContent.module.css";
import photo1 from "../../assets/photo1.png";

const StartingPageContent = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.row}>
          <div className={classes.p1}>
            <div className={classes.textWrap}>
              <div className={classes.heading}>
                Partajarea de meme-uri nu a fost niciodata mai simpla!
              </div>
              <div className={classes.subtitle}>
                Platforma ideală pentru studenții de la Politehnică, amuzați de
                câte materii o să pice semestrul asta.
              </div>
              <div className={classes.btnWrap}>
                <a href="#scrl" className={classes.btna}>
                  <button className={classes.btn}>Upload a MEME</button>
                </a>
              </div>
            </div>
          </div>
          <div className={classes.p2}>
            <div className={classes.imgWrap}>
              <img className={classes.imgg} src={photo1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartingPageContent;
