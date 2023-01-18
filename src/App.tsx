import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>notfound</h1>} />
      </Routes>
    </div>
  );
}
