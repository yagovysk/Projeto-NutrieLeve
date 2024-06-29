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
    zIndex: 9999,
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
      <h2>Indique e ganhe desconto!</h2>
      <div className="container-buttons">
        <div className="icon-container" ref={buttonRef} onClick={openModal}>
          <FaMapMarkerAlt className="icon" />
          <span>Pontos de Entrega</span>
        </div>
        <div className="icon-container">
          <a
            href="https://www.instagram.com/seu_instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icon" />
          </a>
        </div>
        <div className="icon-container">
          <a
            href="https://wa.me/seu_numero_whatsapp"
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
            <li>Local 1</li>
            <li>Local 2</li>
            <li>Local 3</li>
            {/* Adicione mais locais conforme necessário */}
          </ul>
        </div>
      </Modal>
    </div>
  );
}
