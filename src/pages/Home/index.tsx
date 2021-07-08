import React from "react";

import { Container } from "./styles";
import Header from "../../components/Header/index";
import Picture from "../../components/Picture";
import { useState } from "react";
import { TitlePage } from "../../assets/styles/global";

const Home: React.FC = () => {
  const [isAsideOpen, setIsAsideOpen] = useState(true);

  const handleMenuFilter = () => {
    setIsAsideOpen(!isAsideOpen);
  };

  return (
    <>
      <Header />
      <Container>
        <main>
          {isAsideOpen && (
            <aside>
              <TitlePage>Filtrar por categorias</TitlePage>

              <button>Limpar filtros</button>

              <ul>
                <li>Viagem</li>
                <li>Faculdade</li>
                <li>Amigos</li>
                <li>Familia</li>
                <li>Portugal</li>
              </ul>
            </aside>
          )}
          <div>
            <section>
              <TitlePage>
                Ola Reinaldo, aqui estão todas suas fotas :)
              </TitlePage>
              <button onClick={handleMenuFilter}>filtros</button>
            </section>
            <section>
              <Picture />
              <Picture />
              <Picture />
              <Picture />
              <Picture />
              <Picture />
              <Picture />
              <Picture />
              <Picture />
              <Picture />
            </section>
          </div>
        </main>
      </Container>
    </>
  );
};

export default Home;
