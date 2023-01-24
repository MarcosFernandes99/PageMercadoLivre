import NavBar from "../moleculas/NavBar"
import Benefits from "../moleculas/benefits"
import Products from "./Products"


const Home: React.FC = () => {

    return (
        <>
            <NavBar></NavBar>
            <Benefits></Benefits>
            <Products></Products>
        </>
    )
}


export default Home