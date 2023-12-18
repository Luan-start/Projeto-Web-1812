import { Link } from "react-router-dom"

export default function Card(props) {
    function excluir(){
    fetch(`http://localhost:8080/imoveis/${props.imoveis.id}`,
      {
        method:'DELETE'        
      })
      .then(x => alert('Imovel excluido com sucesso.'))
    }
    return (
        <div className="card mt-3 col-sm-3">
            <img src="https://cdn.uso.com.br/11146/2023/04/mini_7ea3b92489fbc33c079e2311f3f06daf.jpg" 
            className="card-img-top" alt={props.imoveis.Rua} />
            <div className="card-body">
                <div>
                    <span className="fw-bold me-1">Rua:</span>
                    <span className="text-danger">{props.imoveis.rua}</span>
                </div>
                <div>
                    <span className="fw-bold me-1">Numero:</span>
                    <span className="text-danger">{props.imoveis.numero}</span>
                </div>
                <div>
                    <span className="fw-bold me-1">Bairro:</span>
                    <span className="text-danger">{props.imoveis.bairro}</span>
                </div>
                <div>
                    <span className="fw-bold me-1">Cidade:</span>
                    <span className="text-danger">{props.imoveis.cidade}</span>
                </div>
                <div>
                    <span className="fw-bold me-1">Estado:</span>
                    <span className="text-danger">{props.imoveis.estado}</span>
                </div>
                <div>
                    <span className="fw-bold me-1">Status:</span>
                    <span className="text-danger">{props.imoveis.status}</span>
                </div>
                <div className="mt-3 d-flex justify-content-between">
                    <Link to={`/imovel/editar/${props.imoveis.id}`}><button className="btn btn-outline-primary">Editar</button></Link>
                    <button 
                      onClick={excluir}
                    className="btn btn-outline-danger" >Excluir</button>
                </div>
            </div>
        </div>
    )
}