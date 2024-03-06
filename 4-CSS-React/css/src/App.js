import './App.css';
import Mycomponent from './components/Mycomponent';
import Title from './components/Title';

function App() {

  const name = "Leticia";

  const mudarCor = false;


  return (
    <div className="App">
      <h1>CSS no React</h1>
      <p>Esse codigo pertence a App.js</p>
      <Mycomponent />

      {/*CSS Inline */}
      <h2 style={{color: 'red', backgroundColor: "gray"}}>CSS Inline</h2>

      {/*CSS Dinamico */}
      <p  style={name === "Leticia" ? ({backgroundColor: "purple", padding: "5px"}) : ({backgroundColor: "green", padding: "5px"})}>CSS Dinamico</p>
      <p  style={name === "Matheus" ? ({backgroundColor: "purple", padding: "5px"}) : ({backgroundColor: "green", padding: "5px"})}>CSS Dinamico</p>
     
      {/*Classe Dinamica */}
      <p className={mudarCor ? ("title") : ("titleColorido")}> Classe Css Dinamica</p>

      {/* CSS Modules */}
      <Title />
    </div>
  );
}

export default App;
