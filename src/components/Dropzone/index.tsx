import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";
import { Container } from "./styles";

interface props {
  oneFileUploaded: (file: File) => void;
  title: string;
}

const Dropzone = ({ oneFileUploaded, title }: props) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState("");

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      const fileUrl = URL.createObjectURL(file);

      setSelectedFileUrl(fileUrl);
      oneFileUploaded(file);
    },
    [oneFileUploaded]
  );
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <Container {...getRootProps()}>
      <div>
        <input {...getInputProps()} accept="image/*" />
        {selectedFileUrl ? (
          <img src={selectedFileUrl} alt="Sua Foto" />
        ) : (
          <p>
            <FiUpload />
            Selecione sua Imagem
          </p>
        )}
      </div>
      <span>{title !== "" ? title : "Titulo da Imagem"}</span>
    </Container>
  );
};

export default Dropzone;
