import './Formulario.css';
import CampoTexto from '../CampoTexto';
import CampoSelect from '../CampoSelect';
import Botao from '../Botao';

const Formulario = () => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Gestão e Inovação',
    ];

    const aoSalvar = (event) =>{
        event.preventDefault();
        console.log('Form enviado');
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" obrigatorio={true} />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" obrigatorio={true} />
                <CampoTexto label="Imagem" placeholder="Informe a url da imagem" />

                <CampoSelect itens={times} label="Time" obrigatorio={true}/>

                <Botao texto="Criar card">
                    Criar card
                </Botao>
            </form>
        </section>
    );
}

export default Formulario;