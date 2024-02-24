const Chalenge = () => {

    const num1 = 1;
    const num2 = 10;

    const handleSum = () => {
        const sum = num1 + num2;
        console.log(sum);
    }

    return(
        <div>
            <h1>Chalenge</h1>

            <h3>Clique para ver a soma entre {num1} e {num2}:</h3>

            <button onClick={handleSum}>Sum</button>

        </div>
    )
}
export default Chalenge;