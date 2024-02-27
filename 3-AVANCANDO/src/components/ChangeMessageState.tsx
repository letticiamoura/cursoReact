
const ChangeMessageState = ( {handleMessage}:any ) => {
  
    const message = ["Leticia", "Matheus", "Elon", "Thiago"]
    return (

    <div>
        
        <button onClick={() => handleMessage(message[1])}>1</button>
        <button onClick={() => handleMessage(message[2])}>2</button>
        <button onClick={() => handleMessage(message[3])}>3</button>
        <button onClick={() => handleMessage(message[4])}>4</button>

    </div>

  )
}

export default ChangeMessageState