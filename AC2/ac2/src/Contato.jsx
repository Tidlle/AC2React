import React from 'react';

function Contato() {
  return (
    <div className="card" id="contato">
      <h2>Formulário de Contato</h2>
      <form>
        <input type="text" placeholder="Nome" /><br /><br />
        <input type="email" placeholder="Email" /><br /><br />
        <textarea placeholder="Mensagem"></textarea><br /><br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contato;
