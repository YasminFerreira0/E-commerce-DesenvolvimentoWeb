import React from "react";
import "./style.css";
import { HiChip } from "react-icons/hi";
import { useNavigate } from "react-router";

export default function CadastroLogin(){
    const navigate = useNavigate();

    return(
        <div className="containerCadastroLogin">
            <form action="submit" className="CadastroLogin">
                <div className="logoCadastroLogin">
                    <div className="logotec">
                        <HiChip  size={60} color="#9333EA"/>
                        <h1>TecnoParts</h1>
                    </div>

                    <h2>Criar uma conta</h2>
                </div>

                <label>
                    Nome Completo
                    <input type="text" />
                </label>

                <label>
                    Email
                    <input type="email" />
                </label>

                <label>
                    Senha
                    <input type="password" />
                </label>

                <button>Criar conta</button>
                <p>Já tem conta?</p>

                <p><a onClick={() => navigate("/login")}>Entrar</a></p>
            </form>
        </div>
    )
}