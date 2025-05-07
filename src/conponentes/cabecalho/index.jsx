import React from "react";
import "./style.css"
import { useNavigate } from "react-router";
import { HiChip } from "react-icons/hi";

export default function Cabecalho() {
    const navigate = useNavigate();

    return (
        <div className="cabecalho">
            <div className="logo">
                <HiChip size={60} color="#9333EA" />
                <h1>TecnoParts</h1>
            </div>

            <lu>
                <li onClick={() => navigate("/home")}>Home</li>
                <li onClick={() => navigate("/produtos")}>Produtos</li>
                <li onClick={() => navigate("/login")}>Login</li>
            </lu>
        </div>
    )
}