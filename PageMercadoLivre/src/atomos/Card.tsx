import { IProduct } from "../moleculas/Cards"

const Img: React.FC<IProduct> = (props) => {

    return (

        
            <div className="card">

                <img src={props.url} />
                <h3>{props.nome}</h3>
                <p>{props.valor}</p>


            </div>

                

             

          

    )
}

export default Img

