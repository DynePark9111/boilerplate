import useToggle from "../hooks/useToggle";

export default function Toggle() {
  const [value, toggleValue] = useToggle(false);

  return (
    <div>
      <h1>useToggle</h1>
      <div>{value.toString()}</div>
      <button onClick={() => toggleValue()}>Toggle</button>
      <button onClick={() => toggleValue(true)}>set True</button>
      <button onClick={() => toggleValue(false)}>set False</button>
    </div>
  );
}
