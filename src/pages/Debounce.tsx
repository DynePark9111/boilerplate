import { useState } from "react";
import useDebounce from "../hooks/useDebounce";

export default function Debounce() {
  const [count, setCount] = useState(10);
  useDebounce(() => alert(count), 1000, [count]);
  return (
    <div>
      <h1>useToggle</h1>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Toggle</button>
    </div>
  );
}
