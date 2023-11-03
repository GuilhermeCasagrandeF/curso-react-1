import './Colaborador.css';

const Colaborador = (props) =>{
    return(
        <div className='colaborador'>
            <div className='cabecalho'>
                <img src="https://github.com/Guilhermefcasagrande.png" alt="Guilherme Francisco Casagrande" />
            </div>
            <div className='rodape'>
                <h4>Guilherme Francisco Casagrande</h4>
                <h5>Desenvolvedor web front-end</h5>
            </div>
        </div>
    );
}

export default Colaborador;