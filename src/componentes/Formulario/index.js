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
    return (
        <section className='formulario'>
            <form action="">
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Informe a url da imagem" />

                <CampoSelect itens={times} label="Time"/>

                <Botao texto="Criar card"/>
            </form>
        </section>
    );
}

export default Formulario;