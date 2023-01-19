import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LocalStorage from "./pages/LocalStorage";
import Toggle from "./pages/Toggle";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LocalStorage" element={<LocalStorage />} />
        <Route path="/Toggle" element={<Toggle />} />
        <Route path="*" element={<h1>notfound</h1>} />
      </Routes>
    </div>
  );
}
