import './Botao.css'

const Botao = (pros) => {
    return (
        <button className='botao'>{pros.children}</button>
    )
}

export default Botao