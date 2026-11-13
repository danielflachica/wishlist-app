import "./App.css";
import { Routes, Route } from "react-router";
import CreateListPage from "./pages/CreateListPage";
import MyListPage from "./pages/MyListPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CreateListPage />}></Route>
      <Route path="/u/:slug" element={<MyListPage />}></Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
