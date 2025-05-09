import React, { useState } from 'react';
import '../styles/Certificates.css';
import dataCertPDF from '../assets/DataCertificado.pdf';
import ecoCertPDF from '../assets/EconomiaCertificado.pdf';
import apiCert from '../assets/PostamanAPI.png';


const certificates = [
  {
    title: 'Certificado de Data Analytics (PowerBI)',
    issuer: 'Otorgado por UTEC en 2024',
    pdf: dataCertPDF,
  },
  {
    title: 'Certificado de Educación Financiera',
    issuer: 'Otorgado por la Secretaría de Hacienda',
    pdf: ecoCertPDF,
  },
  {
    title: 'Certificado de API Fundamentals',
    issuer: 'Otorgado por Postman Academy',
    pdf: apiCert,
  },
];

const Certificates = () => {
  const [selected, setSelected] = useState(null);

  const openModal = (cert) => setSelected(cert);
  const closeModal = () => setSelected(null);

  return (
    <section className="certificates-section">
      <h1 className="section-title">Certificados</h1>
      <div className="certificates-container">
        {certificates.map((cert, index) => (
          <div className="certificate-card" key={index}>
            <iframe
              src={cert.pdf}
              title={cert.title}
              className="certificate-preview"
              frameBorder="0"
            ></iframe>
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
            <button className="certificate-link" onClick={() => openModal(cert)}>
              Ver certificado
            </button>
          </div>
        ))}
      </div>

      {selected && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>&times;</button>
            <h3>{selected.title}</h3>
            <p>{selected.issuer}</p>
            <iframe
              src={selected.pdf}
              className="modal-pdf"
              title={selected.title}
              frameBorder="0"
            ></iframe>
            <a href={selected.pdf} download className="certificate-link" target="_blank" rel="noopener noreferrer">
              Descargar PDF
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;

