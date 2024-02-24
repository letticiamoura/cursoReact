const Events = () => {

    const handleClick = (e: any) => {

        alert("HELLO!")

        console.log(e);
    }

    const RenderSomething = (x: any) => {

        if(x) {
            return <h3>Rederizando isso</h3>
        } else {
            return <h3>Renderização Falhou</h3>
        }
    }
    

    return(

        <div>

            <div>

                <button onClick={handleClick}>Clique me</button>

            </div>

            <br />

            <div>

                <button onClick={() => console.log("HELLO")}>Click aqui</button>

            </div>

            <br />

            <div>

                <button onClick={() => {
                    if(true) {
                        console.log("Botão ativado")
                    }
                }}>Clique</button>
            </div>

            <br />

            <div>
                
                <button onClick={RenderSomething}>CLICK</button>

            </div>

            {RenderSomething(true)}

            {RenderSomething(false)}

        </div>
    )
}

export default Events;