import './CampoTexto.css'

const CampoTexto = (props) => {
    
    const aoDigitar = (event) => {
        props.aoAlterado(event.target.value);
    }
    
    return (
        <div className="campo-texto">
            <label htmlFor="">{props.label}</label>
            <input type="text" placeholder={props.placeholder} required={props.obrigatorio} onChange={aoDigitar} value={props.valor} />
        </div>
    )
        
}
    
export default CampoTexto;