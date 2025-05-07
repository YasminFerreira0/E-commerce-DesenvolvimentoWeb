import React from "react";
import "./style.css"
import { useNavigate } from "react-router";

export default function Login(){
    const navigate = useNavigate();

    return(
        <div className="containerLogin">
            <form action="submit" className="login">
                <h2>Bem-vindo de volta <br></br> à <b>TecnoParts</b></h2>

                <label>
                    Email
                    <input type="email" />
                </label>

                <label>
                    Senha
                    <input type="password" />
                </label>

                <button>Entrar</button>
                <p><a href="">Esqueceu sua senha?</a></p>

                <p>Nao tem conta? <a onClick={() => navigate("/cadastroLogin")}>Cadastre-se</a></p>
            </form>
        </div>
    )
}