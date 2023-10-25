import './CampoTexto.css'

const CampoTexto = () => {
  return (
    <div className="campo-texto">
      <label htmlFor="">Nome</label>
      <input type="text" placeholder='Digite o seu nome'/>
    </div>
  )

}

export default CampoTexto;