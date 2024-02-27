import { useState } from "react";

const ListRender = () => {

    const [ list ] = useState(["Leticia", "Esthefane", "Matheus", "Maria"])

    const [ users, setUsers ] = useState([
        {id: 1, name: "Leticia", age: 19},
        {id: 2, name: "Carlos", age: 39},
        {id: 3, name: "Virginia", age: 25},
        {id: 4, name: "Ze Felipe", age: 39},
        {id: 5, name: "Alicia", age: 22},
    ])

    const handleDelete = () => {

        const randomNumber = Math.floor(Math.random() * 5);

        setUsers((prevUsers: any) => {

            return prevUsers.filter((user: any) => randomNumber !== user.id)

        })

    };

    return(

        <div>

            <div>

                <ul>

                    {list.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}

                </ul>

            </div>

            <div>

                <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.id} - {user.name} - {user.age}</li>
                    ))}

                </ul>

                <button onClick={handleDelete}>Delete Users</button>

            </div>

            {users.map((user) => (
                <h1 key={user.id}> {user.name} </h1>
            ))}

        </div>
    )
}

export default ListRender;