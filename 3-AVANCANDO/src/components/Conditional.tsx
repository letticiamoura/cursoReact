import { useState } from "react";

const Conditional = () => {

    const [ x ] = useState(true);

    const [ name ] = useState("Leticia")

    return(

        <div>

            <h1>Isso será exibido?</h1>

            {x && <p>Se x for true, sim</p>}
            {!x && <p>X é falso</p>}

            {x ? <p>X é true </p> : <p>X é false</p>}

            {name === "Leticia" ? (
                <div>
                    <h1>Hello {name}</h1>
                </div>
            ) : <p>Seu nome está errado, {name}</p>}

        </div>

    )
}

export default Conditional;