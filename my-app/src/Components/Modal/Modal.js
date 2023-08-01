import styles from "./Modal.module.scss";

const Modal = ({ header, closeButton, text, onCancel, onConfirm }) => {
  return (
    <div onClick={onConfirm} className={styles.modal}>
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
          <button className={styles.canceBtn} onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
