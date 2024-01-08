import './CampoTexto.css'

const CampoTexto = (props) => {


const aoDigitado = (evento) => {
   props.aoAlterado(evento.target.value);
 
    
}

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input valor={props.value} onChange={aoDigitado} placeholder={props.placeholder} required={props.obrigatorio}/>

        </div>
    )
}

export default CampoTexto