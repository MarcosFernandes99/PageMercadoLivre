import NavBar from "./NavBar"
import axios from "axios"
import { useFormik } from "formik"


const CadastroFormik = () => {

    const formik = useFormik({
        initialValues: {
            nome: '',
            marca: '',
            valor: '',
            categoria: '',
            url: '',
        },
        onSubmit: (values) => {
            console.log('values', values)

            axios.post("https://apigenerator.dronahq.com/api/YtBbxgqg/produtos", values)
        }
    })

    return (
        <>

            <NavBar />

            <form className="form" onSubmit={formik.handleSubmit}>
                <h1 className="title">Cadastre seu produto!</h1>
                <label>Nome:</label>
                <input className="fieldInput" id="nome" name="nome" type="text" onChange={formik.handleChange} value={formik.values.nome}/>
                <label>Marca:</label>
                <input className="fieldInput" id="marca" name="marca" type="text" onChange={formik.handleChange} value={formik.values.marca}/>
                <label>Valor:</label>
                <input className="fieldInput" id="valor" name="valor" type="text" onChange={formik.handleChange} value={formik.values.valor}/>
                <label>Categoria:</label>
                <input className="fieldInput" id="categoria" name="categoria" type="text" onChange={formik.handleChange} value={formik.values.categoria}/>
                <label>Imagem:</label>
                <input className="fieldInput" id="url" name="url" type="text" onChange={formik.handleChange} value={formik.values.url}/>
                <button>Enviar</button>
            </form>


        </>
    )
}

export default CadastroFormik