import { Route, Routes } from "react-router-dom";
import Debounce from "./pages/Debounce";
import Home from "./pages/Home";
import LocalStorage from "./pages/LocalStorage";
import Timeout from "./pages/Timeout";
import Toggle from "./pages/Toggle";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LocalStorage" element={<LocalStorage />} />
        <Route path="/Toggle" element={<Toggle />} />
        <Route path="/Timeout" element={<Timeout />} />
        <Route path="/Debounce" element={<Debounce />} />
        <Route path="*" element={<h1>notfound</h1>} />
      </Routes>
    </div>
  );
}
