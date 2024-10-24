import Alert from '@root/assets/svgs/alert.svg';

import './Alertbox.css';

export default function Alertbox({ text }) {
  return (
    <div className="Alertbox">
      <img src={Alert} height={40} />
      <h3>{text}</h3>
    </div>
  );
}
