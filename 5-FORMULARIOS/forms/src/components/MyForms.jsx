import React, { useState } from 'react';

import Styles from "./MyForms.module.css";

function MyForms({user}) {
    {/**Gerenciamento de dados */}

    const [ name, setName ] = useState(user ? user.name : " ");
    const [ email, setEmail ] = useState(user ? user.email : " ");
    const [item, setItem] = useState()
    const [ message, setMessage ] = useState(user ? user.message : " ")

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviado o formulario")
        console.log(name, email, item, message)
        {/**Limpando os input */}
        setName(" ")
        setEmail(" ")
        setItem(" ")
        setMessage(" ")
    }


    return(
        <div>
            <h1>Form</h1>

            <form onSubmit={handleSubmit} className={Styles.form} action="">

                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Digite seu nome"
                        onChange={handleName}
                        value={name}
                        />
                </div>

                {/**Label envolvendo o input */}
                <div>
                    <label htmlFor="name">Email
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="Digite seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                </div>

                <label htmlFor="item">Selecione
                    <select value="item" name="item" id="item" onChange={(e) => setItem(e.target.value)}>
                        <option value="1">Opção 01</option>
                        <option value="2">Opção 02</option>
                        <option value="3">Opção 03</option>
                        <option value="4">Opção 03</option>
                    </select>
                </label>
                <label htmlFor="message">
                    <textarea 
                        name="message" 
                        value={message}
                        placeholder='Digite sua mensagem'
                        onChange={(e) => setMessage(e.target.value)}>
                        </textarea>
                </label>
                <button>Enviar</button>
            </form>
        </div>
    )
}
export default MyForms;