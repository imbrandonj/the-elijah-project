import './Popup.css'; // Import your popup styles

const Popup = ({ closePopup, para1, para2, buttonText }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={closePopup}>
          &times;
        </span>
        <p>{para1}</p>
        <p>{para2}</p>
        <button onClick={closePopup}>{buttonText}</button>
      </div>
    </div>
  );
};

export default Popup;
