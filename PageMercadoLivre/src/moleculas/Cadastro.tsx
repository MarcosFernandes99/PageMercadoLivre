import NavBar from "./NavBar"

const Cadastro = () => {

    return (
        <>
            <NavBar />

            <form className="form">
                <h1>Cadastre seu produto!</h1>
                <label>Nome</label>
                <input id="nome" name="nome" type="text" />
                <label>Marca</label>
                <input id="marca" name="marca" type="text" />
                <label>Valor</label>
                <input id="valor" name="valor" type="text" />
                <label>Categoria</label>
                <input id="categoria" name="categoria" type="text" />
                <label>Imagem</label>
                <input id="img" name="img" type="text" />
                <input type="submit" value="Enviar" />
            </form>
        </>

    )
}

export default Cadastro