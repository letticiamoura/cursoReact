
type details = {
    brand: string,
    km: number,
    color: string
}
const CarDetails = ({brand, km, color}: details) => {
  return (
    <div>
        <h1>Detalhes do carro:</h1>
        <ul>
            <li>Marca: {brand}</li>cls
            
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
        </ul>
    </div>
  )
}

export default CarDetails