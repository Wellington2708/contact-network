import Membro from '../Membro'
import './Categoria.css'

const Categoria = (props)=> {

    const css = { background: props.corSecundaria }

    return (
        props.conhecidos.length > 0 &&
        <section className='categoria' style={{css}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='membros'>
                {props.conhecidos.map(conhecido => <Membro  corDeFundo={props.corPrimaria} key={conhecido.nome} nome={conhecido.nome} idade={conhecido.idade} imagem={conhecido.imagem} caracteristica={conhecido.caracteristica}/>)}
            </div>
            
        </section>
    )
}

export default Categoria