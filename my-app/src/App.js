import { useState } from "react";
import "./App.css";
import Button from "./Components/Button/Button";
import Modal from "./Components/Modal/Modal";
const App = () => {
  const [firstModalActive, setFirstModalActive] = useState(false);
  const [secondModalActive, setSecondModalActive] = useState(false);

  const openFirstModal = () => {
    setFirstModalActive(true);
  };

  const closeFirstModal = () => {
    setFirstModalActive(false);
  };

  const openSecondModal = () => {
    setSecondModalActive(true);
  };

  const closeSecondModal = () => {
    setSecondModalActive(false);
  };

  const handleFirstModalConfirm = () => {
    closeFirstModal();
  };

  const handleSecondModalConfirm = () => {
    closeSecondModal();
  };

  const handleModalCancel = () => {
    closeFirstModal();
    closeSecondModal();
  };

  return (
    <div className="App">
      <div className="wrapperBtn">
        <Button onClick={openFirstModal} text="Open first modal" />
        <Button
          onClick={openSecondModal}
          backgroundColor="red"
          text="Open second modal"
        />
      </div>
      {firstModalActive && (
        <Modal
          header="Attention!"
          closeButton
          text="Once you delete this file, it won't be possible to undo this action.
          Are you sure you want to delete it?"
          onCancel={handleModalCancel}
          onConfirm={handleFirstModalConfirm}
        />
      )}
      {secondModalActive && (
        <Modal
          header="Attention!"
          closeButton
          text="You are about to delete this file. This action cannot be undone, and the file will be permanently lost. Are you sure you want to proceed?"
          onCancel={handleModalCancel}
          onConfirm={handleSecondModalConfirm}
        />
      )}
    </div>
  );
};

export default App;
