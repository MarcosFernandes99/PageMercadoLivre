interface IImg {
    src: string;
    alt: string;
    altura: string;
}


const Img:React.FC<IImg> = (props) => {

    return (

        <img src={props.src} alt={props.alt} height={props.altura}/>

    )

}

export default Img