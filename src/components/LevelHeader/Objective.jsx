import objIcon from '@root/assets/svgs/objective.svg';

export default function Objective({ text }) {
  return (
    <h2 id="objective" className="flex align-center">
      <img src={objIcon} height={40} />
      <span className="small-caps">objective: </span>
      {text}
    </h2>
  );
}
