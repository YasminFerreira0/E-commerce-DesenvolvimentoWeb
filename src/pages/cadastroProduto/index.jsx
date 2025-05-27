import React, { useState } from 'react';
import './style.css'

export default function CadastroProduto() {
    const [nome, setNome] = useState("");
    const [valor, setValor] = useState("");
    const [descricao, setDescricao] = useState("");
    const [imagem, setImagem] = useState("");

    return (
        <>
            <div>
                <h1>Cadastro de produto</h1>
                <form action="" className='caixaCadastro'>
                    <div className='campos'>
                        <label>
                            nome do produto
                            <input type="text" value={nome}
                                onChange={(e) => setNome(e.target.value)} required />
                        </label>
                        <label>
                            valor
                            <input type="number"
                                step="0.01"
                                value={valor}
                                onChange={(e) => setValor(e.target.value)}
                                required />
                        </label>
                        <label>
                            descrição
                            <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                        </label>
                        <label>
                            imagem
                            <input type="text" value={imagem}
                                onChange={(e) => setImagem(e.target.value)} />
                        </label>

                        <button>Cadastrar</button>
                        <button>Cancelar</button>
                    </div>

                    <h2></h2>
                </form>
                {imagem && (
                    <div style={{ marginTop: 20 }}>
                        <p>Prévia da imagem:</p>
                        <img
                            src={imagem}
                            alt="Prévia"
                            style={{ width: "100%" }}
                        />
                    </div>
                )}
            </div>
        </>
    )
}