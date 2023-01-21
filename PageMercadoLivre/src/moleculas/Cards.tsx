import Image from "../atomos/Image"

interface ICards {
    src: string;
    alt:string;
    altura: string;
}

const Cards: React.FC<ICards> = (props) => {

    return (

        <>
            <section className="cards">
                <div className="card"><Image src="https://static.appgeek.com.br/imagens/iphone-13-pro-max-3-cke.jpg" alt="phone1" altura="270"> 
                </Image></div>
                <div className="card"><Image src="https://static.appgeek.com.br/imagens/iphone-13-pro-max-3-cke.jpg" alt="phone1" altura="270"> 
                </Image></div>
                <div className="card"><Image src="https://static.appgeek.com.br/imagens/iphone-13-pro-max-3-cke.jpg" alt="phone1" altura="270"> 
                </Image></div>
                <div className="card"><Image src="https://static.appgeek.com.br/imagens/iphone-13-pro-max-3-cke.jpg" alt="phone1" altura="270"> 
                </Image></div>
                <div className="card"><Image src="https://static.appgeek.com.br/imagens/iphone-13-pro-max-3-cke.jpg" alt="phone1" altura="270"> 
                </Image></div>
                <div className="card"><Image src="https://static.appgeek.com.br/imagens/iphone-13-pro-max-3-cke.jpg" alt="phone1" altura="270"> 
                </Image></div>
            </section>

        </>
    )
}

export default Cards