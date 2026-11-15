import "./App.css";
import { Routes, Route } from "react-router";
import CreateListPage from "./pages/CreateListPage";
import NotFoundPage from "./pages/NotFoundPage";
import ViewListPage from "./pages/ViewListPage";
import CreateWishPage from "./pages/CreateWishPage";
import EditWishPage from "./pages/EditWishPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CreateListPage />}></Route>
      <Route path="/u/:user" element={<ViewListPage />}></Route>
      <Route path="/list/:owner" element={<ViewListPage />}></Route>
      <Route path="/u/:user/wish/new" element={<CreateWishPage />}></Route>
      <Route path="/u/:user/wish/edit/:id" element={<EditWishPage />}></Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
