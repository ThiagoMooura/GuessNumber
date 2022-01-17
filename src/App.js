import React, {useState} from "react";
import './App.css';
import Logo from './images/img.png'

function App() {

  //ENTRADA, RODANDO ,FIM 
  const [estado, setEstado] = useState('ENTRADA')

  //PALPITE
  const [palpite, setPalpite] = useState(150)
  const [numPalpites, setNumPalpites] = useState(1)

  const [min, setMin] = useState(0)
  const [max, setMax] = useState(300)

  const iniciarJogo = () => {
    setEstado('RODANDO')
    setMin(0)
    setMax(300)
    setNumPalpites(1)
    setPalpite(150)
  }
  const reiniciarJogo = () => {
    setEstado('ENTRADA')
    setMin(0)
    setMax(300)
    setNumPalpites(1)
    setPalpite(150)
  }
  if(estado === 'ENTRADA'){
    return(
      <section className="inicio">

        <div className="inicio-content-wrap">

          <div className="logo">
            <img src={Logo} alt="" />
          </div>

          <div className="instrucoes-wrap">
            <div className="instrucoes">
              <h3><span>instruções:</span> Pense em um numero de 0 a 300 e o React irá adivinhar.</h3>
            </div>
          </div>

          <div className="inicio-btns-wrap">
            <button onClick={iniciarJogo} className="btn-inicio">JOGAR</button>
            <a className="link-inicio" href="https://thiago-moura.netlify.app/" target='_blank'>CRÉDITOS</a>
          </div>
        
        </div>
      </section>
    );
  }

  const menor = () => {
    setNumPalpites(numPalpites + 1)
    setMax(palpite)
    const proximoPalpite = parseInt((palpite - min)/2) + min
    setPalpite(proximoPalpite)
  }  

  const maior = () => {
    setNumPalpites(numPalpites + 1)
    setMin(palpite)
    const proximoPalpite = parseInt((max - palpite)/2) + palpite
    setPalpite(proximoPalpite)
  }

  const acertou = () => {
    setEstado('FIM')
  }
  if(estado === 'FIM'){
    return(
      <section className="fim">

        <div className="fim-wrap">     
          <div className="fim-content">
            <h1>O React acertou o numero {palpite} com {numPalpites} tentativas</h1>
          </div> 

          <button onClick={reiniciarJogo} className="btn-inicio alt">Jogar novamente</button>
        </div>

      </section>
    );
  }

  return (
    <section className="jogo">
    
    <div className="jogo-content-wrap">
      <div className="jogo-content">
      <h1>o seu numero é </h1>
      <h1>{palpite} ?</h1>
      <p>minimo: {min} / maximo: {max}</p>
      </div>
      
      <div className="btns-wrap-jogo">
        <button onClick={menor} className="btn-jogo"><i className="fas fa-angle-down"></i>Menor</button>  
        <button onClick={acertou} className="btn-jogo">Acertou!</button>  
        <button onClick={maior} className="btn-jogo"><i className="fas fa-angle-up"></i>Maior</button> 
      </div>
      <button onClick={iniciarJogo} className="reset-btn"><i className="fas fa-undo-alt"></i>Reset</button>
    </div>
      
    </section>
  );
}

export default App;
