import Lightbulb from '@root/assets/svgs/light-bulb.svg';

export default function Tipbox({ text }) {
  return (
    <div className="Tipbox">
      <img src={Lightbulb} height={40} />
      <h3>{text}</h3>
    </div>
  );
}
