import { useState } from "react";
import Card from "../atomos/Card"

export interface IProduct {

    nome: string;
    valor: string
    url: string;
    id: string;

}

interface ICards {
    data: IProduct[]
    status: string
}


const Cards: React.FC<ICards> = ({ data, status }) => {
    const [decrescent, setDecrescent] = useState(false)

    function handleClickDecrescent () {
        setDecrescent(false)
    }

    function handleClickCrescent () {
        setDecrescent(true)
    }


    const card = (produtos: IProduct[]) => {
        if (decrescent) {
            return produtos.sort((a, b) => a.valor && b.valor ? parseInt(a.valor) - parseInt(b.valor) : 0).map((produto) => {
                return <Card key={produto.id} id={produto.id} nome={produto.nome} valor={"R$" + produto.valor} url={produto.url} ></Card>
            });
        }
        else{
            return produtos.sort((a, b) => a.valor && b.valor ? parseInt(b.valor) - parseInt(a.valor) : 0).map((produto) => {
                return <Card key={produto.id} id={produto.id} nome={produto.nome} valor={"R$" + produto.valor} url={produto.url} ></Card>
            });
        }
    };
    return (
        <>
            <div className="btn">
                <button className="btnOrder" onClick={handleClickCrescent}>Ordem Crescente</button>
                <button className="btnOrder" onClick={handleClickDecrescent}>Ordem Decrescente</button>
            </div>
            <div>

                {status === "loading" && <div>Loading...</div>}
                {status === "error" && <div>Error fetching produtos</div>}
                {status === "success" && <section className="cards"> {card(data)}</section>}
            </div>
        </>
    )
}

export default Cards