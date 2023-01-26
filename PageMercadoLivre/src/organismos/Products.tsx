import axios from "axios"
import Cards from "../moleculas/Cards";
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
    useQueryClient,
} from "react-query";

const qc = new QueryClient()

const fetchProducts = async () => {
    const { data } = await axios.get(
        "https://apigenerator.dronahq.com/api/YtBbxgqg/produtos"
    )
    ;
    return data
}

function SearchProducts () {
    
    return(
        <QueryClientProvider client={qc}>
            <SearchProductsInData />
        </QueryClientProvider>
    )
}

function SearchProductsInData() {
    const queryClient = useQueryClient();
    const { data, status} = useQuery("produtos", fetchProducts)
    return <Cards data={data} status={status} />
}

export default SearchProducts