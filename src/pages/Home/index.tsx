import React from "react";

import { Container } from "./styles";
import Header from "../../components/Header/index";
import Picture from "../../components/Picture";
import { useState } from "react";

const Home: React.FC = () => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const handleMenuFilter = () => {
    setIsAsideOpen(false);
  };

  return (
    <>
      <Header />
      <Container>
        {isAsideOpen && (
          <aside>
            barra lateral
            <strong onClick={handleMenuFilter}>123</strong>
          </aside>
        )}
        <main>
          <div>
            <section>
              <h2>Ola Reinaldo, aqui estão todas suas fotas :)</h2>
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
