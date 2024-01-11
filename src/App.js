import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Categoria from './componentes/Categoria';

function App() {

  const categoria = [
    {
      nome: 'Igreja',
      corPrimaria: '#57c278',
      corSecundaria: '#D9f7E9'
    },
    {
      nome: 'Escola/Faculdade',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },
    {
      nome: 'Trabalho',
      corPrimaria: '#a6d1d7',
      corSecundaria: '#f0fbe2'
    },
    {
      nome: 'Familia',
      corPrimaria: '#e06b69',
      corSecundaria: '#fde7e8'
    },
    {
      nome: 'Azar',
      corPrimaria: '#d86ebf',
      corSecundaria: '#fae9fs'
    },

  ]

  const [conhecidos, setConhecido] = useState([]);
  const aoNovoConhecidoAdicionado = (conhecido) => {
    console.log(conhecido)
    setConhecido([...conhecidos, conhecido])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoConhecidoCadastrado={conhecido => aoNovoConhecidoAdicionado(conhecido)} />
      {categoria.map(categoria => <Categoria key={categoria.nome} nome={categoria.nome} corPrimaria={categoria.corPrimaria} corSecundaria={categoria.corSecundaria}/>)}
    </div>
  );
}

export default App;
