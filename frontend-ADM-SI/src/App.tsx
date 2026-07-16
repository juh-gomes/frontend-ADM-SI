import { useEffect, useState } from 'react'
import './App.css'
import { api } from './services/api';

interface Cliente {
  id: number;
  nome: string;
  email: string;
  telefone: string;
}


function App() {
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [telefone, setTelefone] = useState("")

  async function carregarClientes() {
    const reponse = await api.get("/cliente")

    setClientes(reponse.data);

  }
async function cadastrar(){
  await api.post("/cliente", {
    nome,
    email,
    telefone
  })
}
  


useEffect(() => {
    carregarClientes();
  }, [])


  return (
    <> 
     
     <div style={{padding:20}}>
     <h1>Cadastro de Cliente</h1>
     <input 
     placeholder= 'Nome' 
     value={nome} 
     onChange= {(e) => setNome(e.target.value)}
     >

     </input>
     
  </div>
  </>
   )
}

  

export default App
