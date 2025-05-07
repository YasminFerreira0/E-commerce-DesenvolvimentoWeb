import React from "react";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { TbShoppingCartDiscount } from "react-icons/tb";
import { produtos } from "../../produtos";

import "./style.css"
import Carrinho from "../carrinho";
import Cabecalho from "../../conponentes/cabecalho"

export default function Produto() {
    const [carItens, setCarItens] = React.useState([]);
    const [mostrarCar, setMostrarCar] = React.useState(false);

    function addItem(item) {
        setCarItens((prev) => [...prev, item]);
    }
    return (

        <div className="container">
            <Cabecalho />

            <div className="botaoCarrinho">
                <button onClick={() => setMostrarCar(true)}>
                    <RiShoppingCart2Fill />
                </button>
                <span className="carCount">{carItens.length > 0 && carItens.length}</span>
            </div>

            {mostrarCar && (
                <div className="containerCarrinho show">
                    <button className="closeCarrinho" onClick={() => setMostrarCar(false)}>
                        <TbShoppingCartDiscount />
                    </button>

                    <Carrinho
                        carItens={carItens}
                        setCarItens={setCarItens}
                    />
                </div>
            )}

            <div className="containerProdutos">
                {produtos?.map((item) => {
                    return (
                        <div key={item.nome} className="produto">
                            <img src={item.imagem} />
                            <h4>{item.nome}</h4>
                            <p>R$ {item.valor.toFixed(2)}</p>
                            <button onClick={() => addItem(item)}>
                                Comprar
                            </button>
                        </div>
                    )
                })}

            </div>
        </div>

    )

}