import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/login/LoginPage";
import ErrorPage from "./components/pages/error/ErrorPage";
import Form2 from "./components/pages/login/form2/Form2";
import ArticlePage from "./components/pages/article/ArticlePage";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"*"} element={<ErrorPage />} />
          <Route path={`/`} element={<LoginPage />} />
          <Route path={`/form2/:username`} element={<Form2 />} />
          <Route path={`/article/:username`} element={<ArticlePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
