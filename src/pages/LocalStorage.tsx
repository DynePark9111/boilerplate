import useLocalStorage from "../hooks/useLocalStorage";
import useUpdateLogger from "../hooks/useUpdateLogger";

export default function LocalStorage() {
  const [input, setInput] = useLocalStorage("theme", "");
  useUpdateLogger(input);

  function refresh() {
    window.location.reload();
  }

  return (
    <div>
      <h1>useLocalStroage</h1>
      <button onClick={refresh}>refresh page</button>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}
