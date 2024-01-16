import './Rodape.css'

const Rodape = ({imagem, alt, credito}) => {
    return (
        <footer className='footer'>
            <div className='contatos'>
                <li><a href='https://facebook.com' target='blank'><img src='/imagens/facebook.png' alt='face' /></a></li>
                <li><a href='https://twitter.com' target='blank'><img src='/imagens/twitter.png' alt='twitter' /></a></li>
                <li><a href='https://instagram.com' target='blank'><img src='/imagens/instagram.png' alt='insta' /></a></li>
            </div>
            <div className='footer-imagem'>
                <img src={imagem} alt={alt}/>
            </div>
            <div className='creditos'>
                <h6>{credito}</h6>
            </div>
        </footer>


    )
}

export default Rodape