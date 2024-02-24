import MyComponent from "./MyComponent";

const TemplateExpressions = () => {

    const lenguage = "JavaScript";

    const data = {
        name: "Leticia",
        age: 19,
        job: "Desenvolvedora Frontend"
    }

    return(

        <div>

            <h1>Template Expressions</h1>

            <p>É um recurso que nos permite executar {lenguage} no JSX e também <strong>Interpolar Variaveis</strong></p>

            <h3>Exemplo:</h3>

            <p>Hello, my names is {data.name}, tenho {data.age} anos e sou {data.job}.</p>

            <MyComponent />

            
        </div>
    )
}

export default TemplateExpressions;