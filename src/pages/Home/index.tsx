import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import { CgClose } from "react-icons/cg";
import { FaFilter } from "react-icons/fa";
import { TiArrowBack } from "react-icons/ti";
import { TitlePage } from "../../assets/styles/global";
import Button from "../../components/Button";
import ButtonFilter from "../../components/ButtonFilter";
import Combobox from "../../components/Combobox/index";
import Dropzone from "../../components/Dropzone";
import Header from "../../components/Header/index";
import Input from "../../components/Input";
import Picture from "../../components/Picture";
import PictureAdd from "../../components/PictureAdd";
import { categories } from "../../data";
import api from "../../services/api";
import { AddNewImage, Container } from "./styles";

const Home = () => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const [isOpenAddPicture, setIsOpenAddPicture] = useState(false);
  const [categoriesFilter, setCategoriesFilter] = useState<String[]>([]);
  const [selectedFile, setSelectedFile] = useState<File>();

  const [gallery, setGallery] = useState([]) as any;

  const [title, setTitle] = useState("");
  const [categorySelcted, setCategorySelcted] = useState("");

  const handleMenuFilter = () => {
    setIsAsideOpen(!isAsideOpen);
  };

  const handleOpenModal = () => {
    setIsOpenAddPicture(!isOpenAddPicture);
    setCategorySelcted("");
    setTitle("");
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

  const handleAddNewImage = (e: any) => {
    e.preventDefault();
    const image = {
      title,
      selectedFile,
      categorySelcted,
    };
    handleOpenModal();

    console.log(image);
  };

  const listGallery = useCallback(async () => {
    let filter = "";
    categoriesFilter.forEach((category) => {
      filter === ""
        ? (filter = `${category}`)
        : (filter = `${filter},${category}`);
    });
    await api
      .get("/gallery", {
        params: {
          category: filter,
        },
      })
      .then((res) => {
        setGallery(res.data);
      });
  }, [categoriesFilter]);

  useEffect(() => {
    listGallery();
  }, [categoriesFilter, listGallery]);

  return (
    <>
      <Header />
      <Container isAsideOpen={isAsideOpen} isOpenAddPicture={isOpenAddPicture}>
        {isOpenAddPicture && (
          <AddNewImage id="modal">
            <Dropzone oneFileUploaded={setSelectedFile} title={title} />

            <form onSubmit={handleAddNewImage}>
              <TitlePage>Detalhes da Imagem</TitlePage>
              <Input
                placeholder="Titulo da Imagem"
                onChange={(e) => setTitle(e.target.value)}
              />
              <Combobox setValue={setCategorySelcted} />

              <Button type="submit" background="#aa59eb">
                Salvar
              </Button>
            </form>
            <p onClick={handleOpenModal}>
              <CgClose />
            </p>
          </AddNewImage>
        )}
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
              {gallery.map((picture: any) => (
                <Picture
                  key={picture.photo_id}
                  title={picture.title}
                  image={picture.image_url}
                />
              ))}
              <PictureAdd click={handleOpenModal} />
            </section>
          </div>
        </main>
      </Container>
    </>
  );
};

export default Home;
