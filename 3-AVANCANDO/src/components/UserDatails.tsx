
type user = {
    nome: string,
    idade: number,
    profissao: string
}

const UserDatails = ({nome, idade, profissao}: user) => {
    
    return (
    <div>
        
        <h2>Hello, I'am {nome}, {idade} years old, work how to {profissao}</h2>

        { idade >= 18 ? (
            <p>Maior de Idade</p>
        ) : (
            <p>Menor de idade</p>
        )}
    
    </div>
  )
}

export default UserDatails