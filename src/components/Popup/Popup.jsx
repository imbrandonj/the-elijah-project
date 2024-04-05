import RedirectButton from '../RedirectButton/RedirectButton';

import './Popup.css';

const Popup = ({ closePopup, para1, para2, buttonText }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={closePopup}>
          &times;
        </span>
        <p>{para1}</p>
        <p>{para2}</p>
        <RedirectButton
          onclick={closePopup}
          text={buttonText}
          css={'bkg-blk-overlay clr-btn-blue small-caps'}
        />
      </div>
    </div>
  );
};

export default Popup;
