import useLocalStorage from "../hooks/useLocalStorage";
import useUpdateLogger from "../hooks/useUpdateLogger";

export default function Home() {
  const [input, setInput] = useLocalStorage("theme", "");
  useUpdateLogger(input);

  return (
    <div>
      <h1>useLocalStroage</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}
