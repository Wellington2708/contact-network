import CampoTexto from '../CampoTexto'
import './Formulario.css'


const Formulario = (props) => {
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da Imagem" />
                <CampoTexto label="Time" placeholder="Digite o seu Time" />
            </form>
        </section>
    )
}

export default Formulario

