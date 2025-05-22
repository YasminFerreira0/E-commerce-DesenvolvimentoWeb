import { Route, Routes } from "react-router-dom";
import Login from "../../pages/login";
import CadastroLogin from "../../pages/cadastroLogin";
import PaginaProduto from "../../pages/produtos";
import Home from "../../pages/home";
import PrivateRoute from "../privateRouter";

export default function Routers() {
    return (
        <Routes>
            <Route index element={<Home />}/>
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
                element={
                    <PrivateRoute>
                        <PaginaProduto />
                    </PrivateRoute>
                }
            />
            <Route
                path="/home"
                element={<Home />}
            />
        </Routes>
    );
}