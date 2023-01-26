import { Link } from "react-router-dom"

const NavBar: React.FC = () => {

    return (

        <>

        <header className="header">
            <section className="search">
                <input className="input" type="text" />
            </section>

            <section className="navegation">
                <span className="category" >Categorias</span>
                <span className="category" >Ofertas do dia</span>
                <a className="category" href="/" >Produtos</a>
                <a className="category" href="/Cadastro" >Cadastro</a>
            </section>
        </header>
        
        </>
    )
}

export default NavBar