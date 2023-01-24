import Card from "../atomos/Card"

export interface IProduct {
    
        nome:string;
        valor:string;
        url:string;
        id:string;
    
}

interface ICards {
    data: IProduct[]
    status: string
}


const Cards: React.FC<ICards> = ({ data, status}) => {
    const card = (produtos: IProduct[]) => {
        return produtos.map((produto) => {
            return <Card key={produto.id }id={produto.id} nome={produto.nome} valor={produto.valor} url={produto.url} ></Card>
        });
    };
    return (
        <div>
            {status === "loading" && <div>Loading...</div>}
            {status === "error" && <div>Error fetching produtos</div>}
            {status === "success" && <section className="cards"> {card(data)}</section>}
        </div>
    )
}

export default Cards