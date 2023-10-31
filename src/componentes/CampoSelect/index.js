import './CampoSelect.css';

const CampoSelect = (props) =>{
    return(
        <div className='campo-select'>
            <label htmlFor="">{props.label}</label>
            <select name="" id="">
                { props.itens.map(item => <option key={item}>{item}</option>) }
            </select>
        </div>
    ); 
}

export default CampoSelect;
