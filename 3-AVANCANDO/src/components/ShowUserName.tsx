type obg = {
    name: string,
}

const ShowUserName = ({name} : obg) => {

    return(

        <div>

            <h2>O nome do usuário é: {name}</h2>

        </div>

    )
}

export default ShowUserName;