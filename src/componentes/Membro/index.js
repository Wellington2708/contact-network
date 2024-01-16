import './Membro.css'

const Membro = ({nome, idade, imagem, caracteristica, corDeFundo}) => {
    return (
        <div className='membro'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}> 
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{caracteristica}</h5>
                <h6>{idade}</h6>
            </div>

        </div>
    )
}

export default Membro