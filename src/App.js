import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:mId" element={<Detail />} />
      </Routes>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`}  element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
