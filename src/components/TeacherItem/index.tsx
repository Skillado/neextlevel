import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css';

function TeacherItem(){
  return(
  <article className="teacher-item">
  <header>
    <img src="https://avatars3.githubusercontent.com/u/62740493?s=460&u=c6898742ead55966ba98725d8707db7bb9f361f5&v=4" alt="Guilherme Fernandes"/>
    <div>
      <strong>Guilherme Fernandes</strong>
      <span>Engenharia</span>
    </div>
  </header>
  <p>
    Estremamente focado em terminar meu TCC.
    <br/> <br/>
    Apaixonado por programação.
  </p>

  <footer>
    <p>
      Preço/hora
      <strong>R$ 120,00</strong>
    </p>
    <button>
      <img src={whatsappIcon} alt="Whatsapp"/>
      Entrar em contato
    </button>
  </footer>
</article>
);
}

export default TeacherItem;