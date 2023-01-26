import NavBar from "./NavBar"
import { useEffect, useState } from "react"
import axios from 'axios'

const Cadastro = () => {

    const [productsList, setProductList] = useState({nome: '', marca: '', valor: '', categoria: '', url: ''})

    useEffect(() => {

    }, [productsList])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        console.log(productsList)
        event.preventDefault()

        axios.post("https://apigenerator.dronahq.com/api/YtBbxgqg/produtos", productsList)
    }
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProductList({...productsList, [event.target.name]: event.target.value})
        
        
    }

    return (
        <>
            <NavBar />

            <form className="form" onSubmit={handleSubmit}>
                <h1>Cadastre seu produto!</h1>
                <label>Nome</label>
                <input id="nome" name="nome" type="text" onChange={handleChange}/>
                <label>Marca</label>
                <input id="marca" name="marca" type="text" onChange={handleChange}/>
                <label>Valor</label>
                <input id="valor" name="valor" type="text" onChange={handleChange}/>
                <label>Categoria</label>
                <input id="categoria" name="categoria" type="text" onChange={handleChange}/>
                <label>Imagem</label>
                <input id="url" name="url" type="text" onChange={handleChange}/>
                <input type="submit" />
            </form>
        </>

    )
}

export default Cadastro