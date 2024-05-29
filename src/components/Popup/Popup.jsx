import RedirectButton from '../RedirectButton/RedirectButton';

import './Popup.css';

const Popup = ({
  buttonAction,
  closePopup,
  para1,
  para2,
  buttonText,
  buttonText2,
}) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={closePopup}>
          &times;
        </span>
        <p>{para1}</p>
        <p>{para2}</p>
        <div className="flex justify-evenly">
          <RedirectButton
            onclick={buttonAction}
            text={buttonText}
            css={'bkg-blk-overlay clr-btn-blue small-caps'}
          />
          {buttonText2 !== null ? (
            <RedirectButton
              onclick={closePopup}
              text={buttonText2}
              css={'bkg-blk-overlay clr-btn-blue small-caps'}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Popup;
