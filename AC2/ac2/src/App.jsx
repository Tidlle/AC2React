import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Apresentacao from './Apresentacao';
import Habilidades from './Habilidades';
import Contato from './Contato';
import Footer from './Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <Banner />
      <Apresentacao />
      <Habilidades />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
