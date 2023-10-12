import React from "react";
import {ProcurarInput, DivProcurar} from "./Style"


function Procurar({ procurar, setProcurar }) {
  const handleInputChange = (event) => {
    setProcurar(event.target.value);
  };

  return (
    <DivProcurar>
      <ProcurarInput
        type="text"
        placeholder="Buscar tarefas"
        value={procurar}
        onChange={handleInputChange}
      />
    </DivProcurar>
  );
}

export default Procurar;