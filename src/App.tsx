import "./App.css";
import { Routes, Route } from "react-router";
import CreateListPage from "./pages/CreateListPage";
import NotFoundPage from "./pages/NotFoundPage";
import ViewListPage from "./pages/ViewListPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CreateListPage />}></Route>
      <Route path="/u/:user" element={<ViewListPage />}></Route>
      <Route path="/list/:owner" element={<ViewListPage />}></Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
