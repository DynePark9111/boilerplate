import { useState } from "react";
import usePrevious from "../hooks/usePrevious";

export default function Previous() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Dyne");
  const previousCount = usePrevious(count);

  return (
    <div>
      <h1>Previous</h1>
      <div>
        count: {count} - previous:{previousCount}
      </div>
      <div>name:{name}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setName("Danny")}>Change name</button>
    </div>
  );
}
