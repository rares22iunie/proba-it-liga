import { Fragment, useState } from "react";

import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import AuthForm from "../Auth/AuthForm";
import Modal from "react-overlays/Modal";
import classes from "./Layout.module.css";
import logo1 from "../../assets/logo.png";

const Layout = (props) => {
  const [showModal, setModalState] = useState(false);
  const renderBackdrop = (props) => (
    <div className={classes.backdrop} {...props} />
  );
  const [isLoginValue, setisLoginValue] = useState(false);
  var handleClose = () => setModalState(false);
  const handleOpen = (value) => {
    setModalState(true);
    setisLoginValue(value);
    console.log(value);
  };

  return (
    <Fragment>
      <MainNavigation buttonClicked={handleOpen} />
      <Modal
        className={classes.modal}
        show={showModal}
        onHide={handleClose}
        renderBackdrop={renderBackdrop}
      >
        <div className={classes.container}>
          <div className={classes.header}>
            <div className={classes.logo}>
              <img src={logo1} alt="" />
            </div>
            <div>
              <span className={classes.close} onClick={handleClose}>
                x
              </span>
            </div>
          </div>
          <div className={classes.wrapper}>
            <AuthForm buttonClicked={handleClose} isLog={isLoginValue} />
          </div>
        </div>
      </Modal>
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
