import { Route, Routes } from "react-router";
import Login from "../../pages/login";
import CadastroLogin from "../../pages/cadastroLogin";
import PaginaProduto from "../../pages/produtos";
import Home from "../../pages/home";

export default function Routers() {
    return (
        <Routes>
            <Route index element={<PaginaProduto/>}/>
            <Route
                path="/login"
                element={<Login />}
            />
            <Route
                path="/cadastroLogin"
                element={<CadastroLogin />}
            />
            <Route
                path="/produtos"
                element={<PaginaProduto />}
            />
            <Route
                path="/home"
                element={<Home />}
            />
        </Routes>
    );
}