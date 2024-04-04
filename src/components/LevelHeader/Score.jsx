import astronaut from '@root/assets/svgs/astronaut.svg';

export default function Score({ score }) {
  return (
    <h3 id="score" className="flex align-center">
      <img src={astronaut} height={50} />
      Player Score: <span>{score}</span>
    </h3>
  );
}
