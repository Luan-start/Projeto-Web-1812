import { useState } from 'react'

export default function Cadastro(){
     // Estados para armazenar os dados do novo imóvel
    const[rua, setRua] = useState('')
    const[numero, setNumero] = useState('')
    const[bairro, setBairro] = useState('')
    const[cidade, setCidade] = useState('')
    const[estado, setEstado] = useState('')
    const[status, setStatus] = useState('')

    function salvar(){
        let obj = {rua, numero, bairro, cidade, estado, status}
        fetch('http://localhost:8080/imoveis',
        {
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(obj) 
        })
        .then(x => alert('Imovél criado com sucesso'))
    }

    return(
        <div className="container">
            <h2 className="text-center">Novo Imovel</h2>
            <label className="form-label">Informe rua</label>
            <input 
            className="form-control" 
            type="text" 
            placeholder="Informe o nome da rua"
            value={rua}
            onChange={txt => setRua(txt.target.value)}
            />

            <label className="form-label">Informe numero</label>
            <input 
            className="form-control" 
            type="text" 
            placeholder="Informe numero" 
            value={numero}
            onChange={txt => setNumero(txt.target.value)}
            />

            <label className="form-label">Informe Bairro</label>
            <input 
            className="form-control" 
            type="text" 
            placeholder="Informe bairro" 
            value={bairro}
            onChange={txt => setBairro(txt.target.value)}
            />

            <label className="form-label">Informe cidade</label>
            <input 
            className="form-control" 
            type="text" 
            placeholder="Informe cidade" 
            value={cidade}
            onChange={txt => setCidade(txt.target.value)}
            />

            <label className="form-label">Informe estado</label>
            <input 
            className="form-control" 
            type="text" 
            placeholder="Informe estado" 
            value={estado}
            onChange={txt => setEstado(txt.target.value)}
            />

            <label className="form-label">Informe o status</label>
            <input 
            className="form-control" 
            type="text" 
            placeholder="Informe o status" 
            value={status}
            onChange={txt => setStatus(txt.target.value)}
            />

            <div className="mt-3 d-flex justify-content-between">
                <button 
                    onClick={salvar}
                    className="btn btn-primary">
                    Salvar</button>
                <button className="btn btn-danger">Cancelar</button>
        </div>                                        
    </div>
    )
}