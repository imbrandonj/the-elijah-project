import objIcon from '@root/assets/svgs/objective.svg';

export default function Objective({ text }) {
  return (
    <h2 className="objective">
      <img src={objIcon} height={40} />
      <span>Objective: </span>
      {text}
    </h2>
  );
}
