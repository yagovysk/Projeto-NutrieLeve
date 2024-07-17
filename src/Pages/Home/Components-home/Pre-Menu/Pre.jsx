import React, { useState, useRef, useEffect } from "react";
import { FaMapMarkerAlt, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Modal from "react-modal";
import "./Pre.css";

Modal.setAppElement("#root"); // Para acessibilidade

const customStyles = {
  content: {
    top: "initial", // Vamos calcular a posição dinamicamente
    left: "initial", // Vamos calcular a posição dinamicamente
    right: "initial", // Vamos calcular a posição dinamicamente
    bottom: "initial", // Vamos calcular a posição dinamicamente
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    position: "absolute", // Para permitir posicionamento dinâmico
    zIndex: 99,
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

export function Pre() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef(null);

  const openModal = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setModalPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="container-pre">
      <h2>A melhor marmita fit de Brasília!</h2>
      <div className="container-buttons">
        <div className="icon-container" ref={buttonRef} onClick={openModal}>
          <FaMapMarkerAlt className="icon" />
          <span>Pontos de Entrega</span>
        </div>
        <div className="icon-container">
          <a
            href="https://www.instagram.com/nutrielevebsb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icon" />
          </a>
        </div>
        <div className="icon-container">
          <a
            href="https://wa.me/556199845648?text=Olá, vim pelo site, gostaria de mais informações."
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="icon" />
          </a>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Pontos de Entrega"
        style={{
          ...customStyles,
          content: {
            ...customStyles.content,
            top: modalPosition.top,
            left: modalPosition.left,
          },
        }}
      >
        <h2>Pontos de Entrega</h2>
        <div className="container-modal-content">
          <button className="button-modal" onClick={closeModal}>
            Fechar
          </button>
          <ul>
            <li>Vicente Pires - gratuito</li>
            <li>Águas Claras - R$ 10,00</li>
            <li>Guará - R$ 15,00</li>
            <li>Ceilândia - R$ 15,00</li>
            <li>Samambaia - R$ 15,00</li>
            <li>Asa Sul - R$ 15,00</li>
            <li>Asa Norte - R$ 20,00</li>
            <li>Lago Sul - R$ 20,00</li>
            <li>Lago Norte - R$ 20,00</li>
            <li>Demais localidades consultar.</li>
            {/* Adicione mais locais conforme necessário */}
          </ul>
        </div>
      </Modal>
    </div>
  );
}
