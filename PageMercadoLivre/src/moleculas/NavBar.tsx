

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
                <span className="category" >Histórico</span>
                <span className="category" >Moda</span>
            </section>
        </header>
        
        </>
    )
}

export default NavBar