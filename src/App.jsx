import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import Upload from "./pages/Upload/Upload";
import Navbar from "./components/Navbar/Navbar";
import Editor from "./pages/Editor/Editor";
import EditLog from "./pages/EditLog/Editlog";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/upload"} element={<Upload />} />
        <Route path={"/editor"} element={<Editor />} />
        <Route path={"/log/:logId/edit"} element={<EditLog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
