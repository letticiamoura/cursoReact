import Foto from './assets/fotoinicial.jpg';
import HookUse from './components/HookUse';
import ListRender from './components/ListRender';

import './App.css'
import Conditional from './components/Conditional';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import { useState } from 'react';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDatails from './components/UserDatails';

function App() {

  const name = "Larissa";

  const showMessage = () => {
    console.log("Função executada")
}

const [ message, setMessage ] = useState("");

const handleMessage = (msg: any) => {
  setMessage(msg)
}

const users = ([
  {id: 1, nome: "Leticia", idade: 19, profissao:"Developer"},
  {id: 2, nome: "Larissa", idade: 35, profissao:"Developer"},
  {id: 3, nome: "Luana", idade: 22, profissao:"Developer"},
  {id: 4, nome: "Lidia", idade: 15, profissao:"Developer"}
])
  return (

      <div>

        {users.map((user) =>(
          <UserDatails 
          key={user.id}
          nome={user.nome}
          idade={user.idade}
          profissao={user.profissao}
        />
        ))}

        {/*State Lift */}

        <Message msg={message}/>

        <ChangeMessageState handleMessage={handleMessage}/>

        <ExecuteFunction myFunction={showMessage}/>

        <Container>
          <p>Teste </p>
        </Container>

        <Fragments /> 

        <CarDetails brand="Feat" km={50000} color="Blue"/>

        <ShowUserName name={name} />

        <Conditional />

        <HookUse />

        <ListRender />

        <h1>Avançando no React</h1>
        {/*Importando do Public */}
        <p>Importando na pasta public:</p>
        <img src="./morroBranco.jpg" alt='Imagem de exemplo'/>

        {/*Importando do Public */}
        <p>Importando dentro da pasta assets:</p>
        <img src={Foto} alt='Imagem de exemplo'/>
      </div>

  )
}

export default App
