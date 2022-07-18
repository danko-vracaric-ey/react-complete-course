import "./Modal.css";
const Modal = (props) => {
  const changeModalState = () => {
    props.setIsModal("");
  };
  return (
    <div className="modal-container">
      <div className="modal-wrapper">
        <div className="modal-button-wrapper">
          <button className="close-modal" onClick={changeModalState}>
            X
          </button>
          <p>{props.isModal}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
