import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/note/:id" element={<Detail />} />
        <Route path="/note/:id/edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
