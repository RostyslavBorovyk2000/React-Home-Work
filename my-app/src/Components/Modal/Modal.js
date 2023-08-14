import React from "react";
import styles from "./Modal.module.scss";

const Modal = ({ header, closeButton, text, onCancel, onConfirm }) => {
  return (
    <div className={styles.modal} onClick={onCancel}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2>{header}</h2>
          {closeButton && (
            <button className={styles.closeBtn} onClick={onCancel}>
              <img className={styles.imgCross} src="/cross.png" alt="cross" />
            </button>
          )}
        </div>
        <div className={styles.modalBody}>
          <p className={styles.contant}>{text}</p>
        </div>
        <div className={styles.modalFooter}>
          <button className={styles.okBtn} onClick={onConfirm}>
            OK
          </button>
          <button className={styles.cancelBtn} onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
