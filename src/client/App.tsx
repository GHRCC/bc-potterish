import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./routes/Home";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
