import { useState } from "react";

const HookUse = () => {

    const age = 19;

    const [name, setName ] = useState("Leticia");
    console.log(name);

    return(

        <div>

            <h1>UseState</h1>

            <div>

                <button onClick={() => age}>Click Me</button>

            </div>

            <div>

                <button onClick={() => setName("Matheus")}>Click</button>

            </div>

        </div>
    )
}

export default HookUse;