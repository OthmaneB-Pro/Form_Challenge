import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/login/LoginPage";
import './index.css';
import ErrorPage from "./components/pages/error/ErrorPage";
import Form2 from "./components/pages/login/Form2";

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path={"*"} element={<ErrorPage/>} />
        <Route path={`/`} element={<LoginPage/>} />
        <Route path={`/form2/:username`} element={<Form2/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

