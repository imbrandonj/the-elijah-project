export default function LevelUp({ path, level, setLevel }) {
  if (path === 'math') {
    return <div>Math level up.</div>;
  } else if (path === 'lit') {
    return <div>Lit level up.</div>;
  }
}
