import { useEffect, useState } from "react"
import Card from "./card"

export default function Consulta() {
    // Estado para armazenar a lista de imóveis
    const [imoveis, setImoveis] = useState([])

    function consultar() {
        fetch('http://localhost:8080/imoveis')
            .then(data => data.json())
            .then(response => setImoveis(response))
    }

    useEffect(consultar, [])
    return (
        <div>
            <h1>Consulta de Imoveis</h1>
            <div className="d-flex flex-wrap">
                {
                    imoveis.map(im => <Card imoveis={im} />)
                }
            </div>
        </div>
    )
}
