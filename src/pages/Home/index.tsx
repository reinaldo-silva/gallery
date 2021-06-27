import React from "react";

import { Container } from "./styles";
import Header from "../../components/Header/index";
import Picture from "../../components/Picture";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <main>
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
        </main>
      </Container>
    </>
  );
};

export default Home;
