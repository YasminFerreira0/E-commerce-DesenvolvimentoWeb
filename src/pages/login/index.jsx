import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (email && password) {
            localStorage.setItem("auth", "true");
            navigate("/produtos");
        } else {
            alert("Preencha todos os campos.");
        }
    };

    return (
        <div className="containerLogin">
            <form onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
            }} className="login">
                <h2>Bem-vindo de volta <br /> à <b>TecnoParts</b></h2>

                <label>
                    Email
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>

                <label>
                    Senha
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>

                <button type="submit">Entrar</button>

                <p><a href="#">Esqueceu sua senha?</a></p>

                <p>Não tem conta? <a onClick={() => navigate("/cadastroLogin")}>Cadastre-se</a></p>
            </form>
        </div>
    );
}
