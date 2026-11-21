import { Routes, Route } from "react-router";
import WelcomePage from "./pages/WelcomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ViewListPage from "./pages/ViewListPage";
import CreateWishPage from "./pages/CreateWishPage";
import EditWishPage from "./pages/EditWishPage";
import InstallPage from "./pages/InstallPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/u/:user" element={<ViewListPage />} />
      <Route path="/list/:owner" element={<ViewListPage />} />
      <Route path="/u/:user/wish/new" element={<CreateWishPage />} />
      <Route path="/u/:user/wish/edit/:id" element={<EditWishPage />} />
      <Route path="/install" element={<InstallPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
