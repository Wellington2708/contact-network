import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import Botao from '../Botao'
import { useState } from 'react'


const Formulario = (props) => {
    const categoria = [
        "Igreja",
        "Escola / Faculdade",
        "Trabalho",
        "Familia",
        "Azar"
    ];

    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [imagem, setImagem] = useState('')
    const [local, setLocal] = useState('')



const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoConhecidoCadastrado({
        nome,
        idade,
        imagem,
        local
    })
}

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar seu card.</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"  
                    valor={nome}
                    aoAlterado={valor => setNome(valor)} />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Idade" 
                    placeholder="Digite o quão velho(a) você está" 
                    valor={idade}
                    aoAlterado={valor => setIdade(valor)} />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço de sua Imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)} />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Categoria" 
                    itens={categoria} 
                    valor={local}
                    aoAlterado={valor => setLocal(valor)}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario

