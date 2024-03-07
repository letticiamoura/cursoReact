import './App.css'
import Car from './components/Car'
import car1 from './assets/carroAzul.jpg';
import car2 from  './assets/carRed.jpg';
import car3 from './assets/carroBranco.jpg';

function App() {

  return (
    <div>
     <h1>Chellenge CSS</h1>

     <div className='cars'>
     <Car
      img={car1}
      title='One Car'
      description='LoremLoremLoremLorem LoremLorem'
     />
     <Car
      img={car2}
      title='Second Car'
      description='LoremLoremLoremLorem LoremLorem'
     />

     <Car
      img={car3}
      title='White Car'
      description='LoremLoremLoremLorem LoremLorem'
     />
</div>

    </div>
  )
}

export default App
