import './CampoSelect.css';

const CampoSelect = (props) =>{

    const aoAlterar = (event) => {
        props.aoAlterado(event.target.value);
    }

    return(
        <div className='campo-select'>
            <label htmlFor="">{props.label}</label>
            <select required={props.obrigatorio} value={props.valor} onChange={aoAlterar}>
                <option defaultValue>Selecione</option>
                { props.itens.map(item => <option key={item}>{item}</option>) }
            </select>
        </div>
    ); 
}

export default CampoSelect;
