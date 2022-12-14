import classes from "./PageTwoContent.module.css";
import DropzoneComponent from "../Layout/DropzoneComponent";

const PageTwoContent = () => {
  return (
    <div className={classes.container} id="scrl">
      <div className={classes.wrapper}>
        <div className={classes.row}>
          <div className={classes.p1}>
            <div className={classes.textWrap}>
              <div className={classes.heading}>
                Ai tupeu și crezi că ești amuzant?
              </div>
              <div className={classes.subtitle}>
                Trimite-ne un mail și poate ai noroc să ne apuce râsul când îți
                vedem meme-ul.
              </div>
            </div>
          </div>
          <div className={classes.p2}>
            <div className={classes.formWrap}>
              <form className={classes.formm}>
                <div className={classes.labell}>
                  <label>Descriere</label>
                </div>
                <input
                  className={classes.inputt}
                  placeholder="descriere"
                  type="text"
                />
                <div className={classes.labell}>
                  <label>Meme (jpg, jpeg, png, gif)</label>
                </div>
                <DropzoneComponent />
                <button type="submit" className={classes.buton}>
                  Trimite
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTwoContent;
