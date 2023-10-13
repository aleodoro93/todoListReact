import { useState } from "react";
import { Cabecalho, FormNovaTarefa, InputNovaTarefa, BtnNovaTarefa } from "./Style";
import logoNaruto from "/public/logoNaruto.svg";
import { AiOutlinePlusCircle } from "react-icons/ai";
import logoSasuke from "/public/logoSasuke.svg"


const Header = ({ onAddTask }) => {
 
 
  const [title, setTtitle] = useState('');


  function handleSubmit(event) {
    event.preventDefault();
    onAddTask(title);
    setTtitle('')
  }

  function aoMudarTitulo(event) {
    setTtitle(event.target.value);
  }

  return (
    <Cabecalho>
      <img src={logoSasuke} alt="personagem sasuke, do anime naruto: Sasuke"/>
      <h1>SHINOBI TO DO LIST</h1>
      <img src={logoNaruto} alt="personagem naruto, do anime: Naruto" />
      
      <FormNovaTarefa onSubmit={handleSubmit}>
        <InputNovaTarefa
          placeholder="Adicionar nova tarefa"
          type="text"
          value={title}
          onChange={aoMudarTitulo}
        />
        
        <BtnNovaTarefa>
          Criar
          <AiOutlinePlusCircle size={30} />
        </BtnNovaTarefa>
      
      </FormNovaTarefa>
      
    </Cabecalho>
    
  );
};

export default Header

