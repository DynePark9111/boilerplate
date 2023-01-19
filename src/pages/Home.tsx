import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import useUpdateLogger from "../hooks/useUpdateLogger";

export default function Home() {
  const [input, setInput] = useLocalStorage("theme", "");
  useUpdateLogger(input);

  return (
    <div>
      <h1>Custom Hooks</h1>
      <Link to={"/LocalStorage"}>LocalStorage</Link>
      <Link to={"/Toggle"}>Toggle</Link>
      <Link to={"/Timeout"}>Timeout</Link>
      <Link to={"/Debounce"}>Debounce</Link>
    </div>
  );
}
