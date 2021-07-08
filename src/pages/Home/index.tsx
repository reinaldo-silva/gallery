import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { TiArrowBack } from "react-icons/ti";
import { TitlePage } from "../../assets/styles/global";
import Header from "../../components/Header/index";
import Picture from "../../components/Picture";
import { Container } from "./styles";

const Home: React.FC = () => {
  const [isAsideOpen, setIsAsideOpen] = useState(true);

  const handleMenuFilter = () => {
    setIsAsideOpen(!isAsideOpen);
  };

  return (
    <>
      <Header />
      <Container isAsideOpen={isAsideOpen}>
        <main>
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

          <div>
            <section>
              {!isAsideOpen && (
                <TitlePage>
                  Ola Reinaldo, aqui estão todas suas fotas :)
                </TitlePage>
              )}

              <ul>
                <div onClick={handleMenuFilter}>
                  {isAsideOpen ? <TiArrowBack /> : <FaFilter />}
                </div>

                <li>Férias</li>
                <li>Viagem</li>
                <li>Portugal</li>
                <li>Portugal</li>
                <li>Portugal</li>
                <li>Portugal</li>
                <li>Portugal</li>
                <li>Portugal</li>
                <li>Portugal</li>
              </ul>
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
