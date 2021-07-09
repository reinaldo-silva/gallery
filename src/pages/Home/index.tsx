import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { TiArrowBack } from "react-icons/ti";
import { TitlePage } from "../../assets/styles/global";
import ButtonFilter from "../../components/ButtonFilter";
import Header from "../../components/Header/index";
import Picture from "../../components/Picture";
import PictureAdd from "../../components/PictureAdd";
import { Container } from "./styles";

const Home: React.FC = () => {
  const categories = [
    "Ferias",
    "Familia",
    "Amigos",
    "Faculdade",
    "Praia",
    "Festas",
  ];

  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const [isOpenAddPicture, setIsOpenAddPicture] = useState(false);
  const [categoriesFilter, setCategoriesFilter] = useState<String[]>([]);

  const handleMenuFilter = () => {
    setIsAsideOpen(!isAsideOpen);
  };

  const handleNewImage = () => {
    setIsOpenAddPicture(!isOpenAddPicture);
  };

  const addFilter = (category: string) => {
    const index = categoriesFilter.indexOf(category);
    if (index < 0) {
      setCategoriesFilter((categoriesArray) => [...categoriesArray, category]);
      return;
    }
    const array = categoriesFilter;
    array.splice(index, 1);
    setCategoriesFilter(() => [...array]);
  };

  const findInArray = (category: string) => {
    return categoriesFilter.find((categorySel) => categorySel === category);
  };

  const removeFilters = () => {
    setCategoriesFilter(() => []);
  };

  return (
    <>
      <Header />
      <Container isAsideOpen={isAsideOpen} isOpenAddPicture={isOpenAddPicture}>
        {/* <div>teste</div> */}
        <main>
          <aside>
            <TitlePage>Filtrar por categorias</TitlePage>

            <button onClick={removeFilters}>Limpar filtros</button>

            <ul>
              {categories.map((category, key) => (
                <ButtonFilter
                  text={category}
                  key={key}
                  onClick={() => addFilter(category)}
                  selected={!!findInArray(category)}
                />
              ))}
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

                {categoriesFilter.map((categorie, key) => (
                  <li key={key}>{categorie}</li>
                ))}
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
              <PictureAdd click={handleNewImage} />
            </section>
          </div>
        </main>
      </Container>
    </>
  );
};

export default Home;
